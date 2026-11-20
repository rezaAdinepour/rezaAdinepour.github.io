# AcademicPages source

Template: https://github.com/academicpages/academicpages.github.io

Revision: `c433dbd4f9f8295b9c010e33d764699220abf83b` (retrieved 19 November 2026).

The default theme, Sass, layouts, includes, JavaScript, and guide are from this revision. Two metadata-only guards in the SEO include and single layout prevent year-only publication records or term-only teaching records from claiming an invented exact date; they do not change the default visual design. The same jQuery dependency is served locally through a postbuild copy step so a failed CDN request cannot disable navigation or theme switching. Personalization lives in `_config.yml`, `_data/`, pages, and collections. The previous custom academic style has been removed.

Personal facts were migrated from the pre-migration site and `files/Reza_s_CV_Oct2026.pdf`. Projects and research-collaboration details were added from that CV. Publication BibTeX comes from the existing publications page. No talk attendance, language proficiency, experimental results, project completion dates, or unprovided credentials were inferred.

Template demonstration records are retained under `_drafts/examples/` and are not published. Publication January 1 date fields are sorting markers for a known year; the site displays only the publication year. Teaching date fields sort known terms and do not assert a particular class starting day. Existing website dates take precedence where the CV differs (notably Circuit Theory); confirm these when updating your CV.

Jekyll 4 deployment uses `.github/workflows/jekyll.yml`, with the same Ruby 3.2 family as the template Dockerfile and the verified local environment. GitHub Pages must use **GitHub Actions** as its source. Maintainer moderation and automatic scraping/commit workflows are not enabled on this personal site.

Critical stylesheet and JavaScript URLs carry a per-build version. This prevents cached files from the previous design being paired with the new HTML. `scripts/check-assets.cjs` verifies the emitted URLs and files before the deployment artifact is uploaded.
