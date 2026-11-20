// Keep the template's jQuery dependency available when a CDN request fails.
const {copyFileSync, mkdirSync} = require('node:fs');
const {resolve} = require('node:path');
const root = resolve(__dirname, '..');
mkdirSync(resolve(root, 'assets/js'), {recursive: true});
copyFileSync(require.resolve('jquery/dist/jquery.min.js'), resolve(root, 'assets/js/jquery.min.js'));
