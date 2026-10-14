---
permalink: /experience/
title: "Experience"
author_profile: true
---

<style>
  .exp-container {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin-top: 1rem;
  }

  .exp-card {
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 1.25rem 1.5rem;
    background-color: #ffffff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    transition: all 0.2s ease-in-out;
  }

  .exp-card:hover {
    border-color: #0011DB;
    box-shadow: 0 4px 12px rgba(0, 17, 219, 0.08);
  }

  .exp-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 0.4rem;
  }

  .exp-title {
    font-size: 1.1rem;
    font-weight: 700;
    color: #1a202c;
    margin: 0;
  }

  .exp-company {
    font-size: 0.95rem;
    font-weight: 600;
    color: #4a5568;
    margin-top: 0.2rem;
  }

  .meta-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    background-color: #f8f9fa;
    color: #0011DB;
    border: 1px solid #e9ecef;
    padding: 0.25rem 0.6rem;
    border-radius: 6px;
    font-size: 0.8rem;
    font-weight: 600;
  }

  .exp-details {
    margin-top: 0.75rem;
    padding-top: 0.75rem;
    border-top: 1px dashed #edf2f7;
    font-size: 0.92rem;
    color: #4a5568;
    line-height: 1.6;
  }

  .teaching-section {
    margin-top: 2rem;
  }

  .teaching-group {
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    background-color: #ffffff;
    padding: 1.25rem 1.5rem;
    margin-bottom: 1.25rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.03);
  }

  .teaching-group-title {
    font-size: 1.05rem;
    font-weight: 700;
    color: #1a202c;
    border-bottom: 2px solid #f0f3ff;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .course-list {
    list-style: none;
    padding-left: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .course-item {
    position: relative;
    padding-left: 1.25rem;
    font-size: 0.93rem;
    color: #2d3748;
    line-height: 1.5;
  }

  .course-item::before {
    content: "•";
    color: #0011DB;
    font-weight: bold;
    font-size: 1.2rem;
    position: absolute;
    left: 0;
    top: -0.1rem;
  }

  .course-tag {
    display: inline-block;
    background-color: #f0f3ff;
    color: #0011DB;
    font-size: 0.78rem;
    font-weight: 600;
    padding: 0.15rem 0.45rem;
    border-radius: 4px;
    margin-left: 0.25rem;
  }

  .course-link {
    color: #0011DB;
    text-decoration: underline;
    font-weight: 500;
  }
</style>

<h2>Research & Industry Experience</h2>

<div class="exp-container">

  <!-- EPSRC -->
  <div class="exp-card">
    <div class="exp-header">
      <div>
        <h3 class="exp-title">Research Assistant</h3>
        <div class="exp-company"><i class="fas fa-university" style="margin-right: 0.4rem; color: #6c757d;"></i> EPSRC Research Fellow</div>
      </div>
      <span class="meta-badge"><i class="fas fa-map-marker-alt"></i> Brighton, UK</span>
    </div>
  </div>

  <!-- DSDA Lab -->
  <div class="exp-card">
    <div class="exp-header">
      <div>
        <h3 class="exp-title">Research Assistant</h3>
        <div class="exp-company"><i class="fas fa-microchip" style="margin-right: 0.4rem; color: #6c757d;"></i> Digital System Design Automation Laboratory</div>
      </div>
      <span class="meta-badge"><i class="fas fa-map-marker-alt"></i> Tehran, Iran</span>
    </div>
  </div>

  <!-- D3H-Group -->
  <div class="exp-card">
    <div class="exp-header">
      <div>
        <h3 class="exp-title">Biomedical Signal Processing Developer</h3>
        <div class="exp-company">
          <i class="fas fa-building" style="margin-right: 0.4rem; color: #6c757d;"></i>
          <a href="https://d3h-group.com/" target="_blank" rel="noopener noreferrer" style="color: #0011DB; text-decoration: none; font-weight: 600;">D3H-Group</a>
        </div>
      </div>
      <span class="meta-badge"><i class="fas fa-map-marker-alt"></i> Abu Dhabi, UAE</span>
    </div>
  </div>

  <!-- Radan Electronic -->
  <div class="exp-card">
    <div class="exp-header">
      <div>
        <h3 class="exp-title">Embedded Software Developer</h3>
        <div class="exp-company">
          <i class="fas fa-microchip" style="margin-right: 0.4rem; color: #6c757d;"></i>
          <a href="https://www.linkedin.com/company/radan-electronics/" target="_blank" rel="noopener noreferrer" style="color: #0011DB; text-decoration: none; font-weight: 600;">Radan Electronic</a>
        </div>
      </div>
      <span class="meta-badge"><i class="fas fa-map-marker-alt"></i> Mashhad, Iran</span>
    </div>
  </div>

</div>

<div class="teaching-section">
  <h2 style="margin-bottom: 1.25rem;">Teaching Experience</h2>

  <!-- AUT Teaching -->
  <div class="teaching-group">
    <div class="teaching-group-title">
      <i class="fas fa-chalkboard-teacher" style="color: #0011DB;"></i>
      Amirkabir University of Technology (Tehran Polytechnic)
    </div>

    <ul class="course-list">
      <li class="course-item">
        <strong>G5035: Compilers and Computer Architecture</strong>
      </li>
      <li class="course-item">
        <strong>CSE304: Operating System Lab</strong> — <a href="https://github.com/aut-ce/CE304-OS-Lab" class="course-link" target="_blank" rel="noopener noreferrer">GitHub Repo</a> <span class="course-tag">Fall 2025</span>
      </li>
      <li class="course-item">
        <strong>CSE112: Computer Architecture Lab</strong> — <a href="https://github.com/aut-ce/CE208-CA-Lab" class="course-link" target="_blank" rel="noopener noreferrer">GitHub Repo</a> <span class="course-tag">Spring 2025</span>
      </li>
      <li class="course-item">
        <strong>CSE105: Logic Circuit Lab</strong> — <a href="https://github.com/AUT-LCLab/Spring-2024/tree/main" class="course-link" target="_blank" rel="noopener noreferrer">Spring 2024</a> &nbsp;|&nbsp; <a href="https://github.com/AUT-LCLab/Fall-2023" class="course-link" target="_blank" rel="noopener noreferrer">Fall 2023</a>
      </li>
      <li class="course-item">
        <strong>CE243: Digital Electronics</strong> — Instructor: <a href="https://scholar.google.com/citations?user=2RN0Y2YAAAAJ&hl=en" class="course-link">Prof. Sedighi</a> <span class="course-tag"><a href="https://ce243-aut.github.io/" style="color: inherit; text-decoration: none;">Fall 2025</a></span>
      </li>
      <li class="course-item">
        <strong>CE5439: Embedded Systems Design & Modeling</strong> — Instructor: <a href="https://scholar.google.com/citations?user=2RN0Y2YAAAAJ&hl=en" class="course-link">Prof. Sedighi</a> <span class="course-tag"><a href="https://ce5439-aut.github.io/webpage" style="color: inherit; text-decoration: none;">Spring 2025</a></span>
      </li>
      <li class="course-item">
        <strong>CE201: Digital Logic Design</strong> — Instructors: <a href="https://scholar.google.com/citations?user=qMmvqUwAAAAJ&hl=en" class="course-link">Prof. Saheb Zamani</a> & <a href="https://scholar.google.com/citations?user=2RN0Y2YAAAAJ&hl=en" class="course-link">Prof. Sedighi</a> <span class="course-tag"><a href="https://ce201-aut.github.io/" style="color: inherit; text-decoration: none;">Fall 2024</a></span>
      </li>
    </ul>
  </div>

  <!-- Shahrood Teaching -->
  <div class="teaching-group">
    <div class="teaching-group-title">
      <i class="fas fa-university" style="color: #0011DB;"></i>
      Shahrood University of Technology
    </div>

    <ul class="course-list">
      <li class="course-item">
        <strong>Digital Electronics (Pulse Technique)</strong> — Instructor: <a href="https://scholar.google.com/citations?user=o7-0hSEAAAAJ&hl=en" class="course-link">Dr. Ahmadyfard</a> <span class="course-tag">Spring 2023</span>
      </li>
      <li class="course-item">
        <strong>Signals and Systems</strong> — Instructor: <a href="https://scholar.google.com/citations?user=o7-0hSEAAAAJ&hl=en" class="course-link">Dr. Ahmadyfard</a> <span class="course-tag">Fall 2021 – Spring 2023</span>
      </li>
      <li class="course-item">
        <strong>Analog Electronics</strong> — Instructor: <a href="https://scholar.google.com/citations?user=JxMfuz0AAAAJ&hl=en" class="course-link">Dr. Ashraf</a> <span class="course-tag">Fall 2022</span>
      </li>
      <li class="course-item">
        <strong>Circuit Theory</strong> — Instructor: <a href="https://shahroodut.ac.ir/en/as/?id=S865" class="course-link">Dr. Shivaie</a> <span class="course-tag">Fall 2020 – Spring 2021</span>
      </li>
    </ul>
  </div>

  <!-- Private Tutoring -->
  <div class="teaching-group">
    <div class="teaching-group-title">
      <i class="fas fa-user-graduate" style="color: #0011DB;"></i>
      Private Tutoring
    </div>

    <ul class="course-list">
      <li class="course-item">
        <strong>PCB Design & Hardware:</strong> Private Altium Designer Tutor <span class="course-tag">Shahrood, Iran</span>
      </li>
      <li class="course-item">
        <strong>Software & Scientific Computing:</strong> Private Tutor for Python, MATLAB, C, and C++ Programming <span class="course-tag">Mashhad, Iran</span>
      </li>
    </ul>
  </div>

</div>