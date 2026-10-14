---
permalink: /
title: "About Me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---


<style>
  .intro-card {
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 1.5rem 1.75rem;
    background-color: #ffffff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    margin-bottom: 2rem;
    line-height: 1.65;
    font-size: 1.02rem;
    color: #2d3748;
  }

  .intro-card a {
    color: #0011DB;
    font-weight: 600;
    text-decoration: underline;
  }

  .intro-badge-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px dashed #edf2f7;
  }

  .intro-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    background-color: #f0f3ff;
    color: #0011DB;
    border: 1px solid #d0d7de;
    padding: 0.25rem 0.65rem;
    border-radius: 6px;
    font-size: 0.82rem;
    font-weight: 600;
  }

  .interests-section-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: #1a202c;
    margin-bottom: 1rem;
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
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.03);
    transition: all 0.2s ease-in-out;
  }

  .interest-card:hover {
    border-color: #0011DB;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 17, 219, 0.08);
  }

  .interest-icon {
    font-size: 1.2rem;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: #f0f3ff;
    color: #0011DB;
    margin-right: 1rem;
    flex-shrink: 0;
  }

  .interest-title {
    font-size: 0.95rem;
    font-weight: 600;
    color: #2d3748;
  }
</style>

<div class="intro-card">
  <p>
    Hi! I am a Ph.D. Candidate in Computer Science at <b>Sussex AI</b>, University of Sussex, supervised by 
    <a href="https://scholar.google.com/citations?user=asUiHlIAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Prof. James Knight</a> 
    and 
    <a href="https://scholar.google.com/citations?user=W3T-i5AAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Prof. Thomas Nowotny</a>. 
    My doctoral research investigates <b>POSIT-enabled EventProp training</b> and the implementation of Spiking Neural Networks (SNNs) on programmable <b>RISC-V FPGA SoCs</b>.
  </p>
  <p>
    I received my M.Sc. in Computer Engineering from 
    <a href="https://aut.ac.ir/en" target="_blank" rel="noopener noreferrer">Amirkabir University of Technology (Tehran Polytechnic)</a> 
    and my B.Sc. in Electrical Engineering from <a href="https://shahroodut.ac.ir/en/" target="_blank" rel="noopener noreferrer">Shahrood University of Technology</a>.
  </p>
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
    <div class="interest-title">Real-Time & Embedded Systems</div>
  </div>

</div>