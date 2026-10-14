---
permalink: /
title: "About Me"
author_profile: true
redirect_from: 
- /about/
- /about.html
---

<style>
  :root {
    --card-bg: #ffffff;
    --card-border: #e2e8f0;
    --card-hover-border: #3b82f6;
    --text-primary: #2d3748;
    --heading-color: #1a202c;
    --accent-blue: #0011DB;
    --accent-light-bg: #f0f3ff;
    --dashed-border: #edf2f7;
    --shadow-color: rgba(0, 0, 0, 0.04);
    --shadow-hover: rgba(0, 17, 219, 0.08);
  }

  /* Support OS/System Dark Mode & Jekyll Dark Themes */
  @media (prefers-color-scheme: dark) {
    :root {
      --card-bg: #1e293b;
      --card-border: #334155;
      --card-hover-border: #60a5fa;
      --text-primary: #e2e8f0;
      --heading-color: #f8fafc;
      --accent-blue: #60a5fa;
      --accent-light-bg: rgba(96, 165, 250, 0.15);
      --dashed-border: #334155;
      --shadow-color: rgba(0, 0, 0, 0.3);
      --shadow-hover: rgba(96, 165, 250, 0.2);
    }
  }

  /* Support explicit Dark Mode toggle classes used in Jekyll themes */
  html[data-theme="dark"], body.dark-theme, .dark-mode {
    --card-bg: #1e293b;
    --card-border: #334155;
    --card-hover-border: #60a5fa;
    --text-primary: #e2e8f0;
    --heading-color: #f8fafc;
    --accent-blue: #60a5fa;
    --accent-light-bg: rgba(96, 165, 250, 0.15);
    --dashed-border: #334155;
    --shadow-color: rgba(0, 0, 0, 0.3);
    --shadow-hover: rgba(96, 165, 250, 0.2);
  }

  .intro-card {
    border: 1px solid var(--card-border);
    border-radius: 8px;
    padding: 1.5rem 1.75rem;
    background-color: var(--card-bg);
    box-shadow: 0 1px 3px var(--shadow-color);
    margin-bottom: 2rem;
    line-height: 1.65;
    font-size: 1.02rem;
    color: var(--text-primary);
    transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
  }

  .intro-card a {
    color: var(--accent-blue) !important;
    font-weight: 600;
    text-decoration: underline;
  }

  .intro-badge-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px dashed var(--dashed-border);
  }

  .intro-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    background-color: var(--accent-light-bg);
    color: var(--accent-blue);
    border: 1px solid var(--card-border);
    padding: 0.25rem 0.65rem;
    border-radius: 6px;
    font-size: 0.82rem;
    font-weight: 600;
  }

  .interests-section-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--heading-color);
    margin-bottom: 1rem;
    transition: color 0.3s ease;
  }

  .interests-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1rem;
  }

  .interest-card {
    display: flex;
    align-items: center;
    padding: 1rem 1.25rem;
    border: 1px solid var(--card-border);
    border-radius: 8px;
    background-color: var(--card-bg);
    box-shadow: 0 1px 3px var(--shadow-color);
    transition: all 0.2s ease-in-out;
  }

  .interest-card:hover {
    border-color: var(--card-hover-border);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px var(--shadow-hover);
  }

  .interest-icon {
    font-size: 1.2rem;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: var(--accent-light-bg);
    color: var(--accent-blue);
    margin-right: 1rem;
    flex-shrink: 0;
  }

  .interest-title {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--text-primary);
  }
</style>

<div class="intro-card">
  <p>
    Hi! I am a Ph.D. Candidate in Computer Science at <b>Sussex AI</b>, University of Sussex, supervised by 
    <a href="https://scholar.google.com/citations?user=asUiHlIAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Prof. James Knight</a> 
    and 
    <a href="https://scholar.google.com/citations?user=W3T-i5AAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Prof. Thomas Nowotny</a>[cite: 5]. 
    My doctoral research investigates <b>POSIT-enabled EventProp training</b> and the implementation of Spiking Neural Networks (SNNs) on programmable <b>RISC-V FPGA SoCs</b>[cite: 5].
  </p>
  <p>
    I received my M.Sc. in Computer Engineering from 
    <a href="https://aut.ac.ir/en" target="_blank" rel="noopener noreferrer">Amirkabir University of Technology (Tehran Polytechnic)</a> 
    and my B.Sc. in Electrical Engineering from <a href="https://shahroodut.ac.ir/en/" target="_blank" rel="noopener noreferrer">Shahrood University of Technology</a>[cite: 5].
  </p>

  <div class="intro-badge-container">
    <span class="intro-badge"><i class="fas fa-university"></i> Sussex AI</span>
    <span class="intro-badge"><i class="fas fa-microchip"></i> RISC-V & FPGA SoC</span>
    <span class="intro-badge"><i class="fas fa-brain"></i> Neuromorphic Computing</span>
    <span class="intro-badge"><i class="fas fa-calculator"></i> Low-Precision Arithmetic</span>
  </div>
</div>

<div class="interests-section-title">Research Interests</div>

<div class="interests-grid">

  <div class="interest-card">
    <div class="interest-icon"><i class="fas fa-brain"></i></div>
    <div class="interest-title">Computational Neuroscience & Neuromorphic Computing</div>
  </div>

  <div class="interest-card">
    <div class="interest-icon"><i class="fas fa-microchip"></i></div>
    <div class="interest-title">AI Hardware Accelerators & Reconfigurable Computing</div>
  </div>

  <div class="interest-card">
    <div class="interest-icon"><i class="fas fa-calculator"></i></div>
    <div class="interest-title">Low-Precision POSIT Arithmetic</div>
  </div>

  <div class="interest-card">
    <div class="interest-icon"><i class="fas fa-code-branch"></i></div>
    <div class="interest-title">High-Level Synthesis (HLS) & SystemC</div>
  </div>

  <div class="interest-card">
    <div class="interest-icon"><i class="fas fa-network-wired"></i></div>
    <div class="interest-title">Parallel & Distributed Systems</div>
  </div>

  <div class="interest-card">
    <div class="interest-icon"><i class="fas fa-cogs"></i></div>
    <div class="interest-