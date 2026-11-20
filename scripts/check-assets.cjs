// Prevent a deployment from pairing new HTML with cached, incompatible assets.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(process.argv[2] || '_site');
const critical = ['assets/css/main.css', 'assets/css/fontawesome.css', 'assets/js/jquery.min.js', 'assets/js/main.min.js'];
let checked = 0;

function checkDirectory(directory) {
  for (const entry of fs.readdirSync(directory, {withFileTypes: true})) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      checkDirectory(file);
    } else if (entry.name.endsWith('.html')) {
      const html = fs.readFileSync(file, 'utf8');
      const build = html.match(/<meta name="site-build" content="(\d{14})">/);
      if (!build) continue; // Redirect documents and standalone tools have no site assets.
      const found = new Set();
      for (const match of html.matchAll(/<(?:link|script)\b[^>]*\b(?:href|src)="([^"]+)"/g)) {
        const url = new URL(match[1], 'https://example.invalid');
        for (const asset of critical) {
          if (!url.pathname.endsWith('/' + asset)) continue;
          assert.equal(url.searchParams.get('v'), build[1], `Incompatible asset URL in ${file}: ${asset}`);
          assert(fs.statSync(path.join(root, asset)).size > 0, `Missing built asset: ${asset}`);
          found.add(asset);
        }
      }
      assert.equal(found.size, critical.length, `Incomplete asset references in ${file}`);
      checked++;
    }
  }
}

checkDirectory(root);
assert(checked > 0, 'No site pages checked');
console.log(`Verified versioned CSS and JavaScript on ${checked} site pages.`);
