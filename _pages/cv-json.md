---
layout: archive
title: Structured CV
permalink: /cv-json/
author_profile: true
---

{% assign cv = site.data.cv %}

[Download PDF](/files/Reza_s_CV_Oct2026.pdf) · [Download JSON](/cv.json)

{{ cv.basics.summary }}

## Education
{% for item in cv.education %}
### {{ item.studyType }} in {{ item.area }}
{{ item.institution }} — {{ item.location }}<br>
{{ item.startDate }} – {% if item.endDate != '' %}{{ item.endDate }}{% else %}Present{% endif %}

**Thesis:** {{ item.thesis }}

{% endfor %}
## Work experience
{% for item in cv.work %}
### {{ item.position }}
{{ item.name }} — {{ item.location }}<br>
{{ item.startDate }} – {% if item.endDate != '' %}{{ item.endDate }}{% else %}Present{% endif %}

{% endfor %}
## Skills
{% for item in cv.skills %}
- **{{ item.name }}:** {{ item.keywords | join: ', ' }}.
{% endfor %}

## Publications
{% for item in cv.publications %}
- [{{ item.name }}]({{ item.url }}). {{ item.publisher }}, {{ item.releaseDate }}.
{% endfor %}

## Teaching
{% for item in cv.teaching %}
- **{{ item.course }}** — {{ item.role }}, {{ item.institution }}{% if item.term != '' %}, {{ item.term }}{% endif %}.
{% endfor %}

## Projects
{% for item in cv.projects %}
- {% if item.url != '' %}[{{ item.name }}]({{ item.url }}){% else %}{{ item.name }}{% endif %}
{% endfor %}

## Research interests
{% for item in cv.interests %}
- {{ item.name }}
{% endfor %}

## Honors and awards
{% for item in cv.awards %}
- {{ item.summary }}
{% endfor %}
