# Ops Console — Status Module V3

Final cleanup of the selected Status Module design.

Changes:
- Removed the complete `FOCUS ... ACTIVE` strip.
- Projects now start directly after the hero.
- Kept `01 / PROJECTS`.
- Made the portrait/status panel slightly smaller and better aligned.
- Removed the portrait-panel drop shadow for a more consistent Ops Console look.
- Tightened panel header and metric spacing.
- Kept the portrait crop and overall visual identity.
- Kept the employment module:
  - Research Associate
  - Fachhochschule Dortmund
  - Germany
- Kept Skills, About, CV and Contact.
- Light mode remains the default.

## Preview locally

```powershell
python -m http.server 8000
```

Open `http://localhost:8000`.


## V4

Project names are now clickable:
- MIGOps → GitHub repository
- GPUNodeDiag → GitHub repository

Added a minimal underline + arrow movement on hover/focus.


## V5

Added Certifications:
- NVIDIA Certified Associate — AI Infrastructure & Operations
- VMware Certified Professional — Data Center Virtualization 2022 (VCP-DCV 2022)
- Azure Certification (generic title until the exact Azure credential name is supplied)

Skills updated with:
- VMware vSphere
- VMware vCenter
- VMware ESXi
- Terraform


## V6 — certification dates and order

Certifications are sorted newest to oldest:

1. NVIDIA Certified Associate — AI Infrastructure and Operations — February 2026
2. Microsoft Certified: Azure Fundamentals (AZ-900) — February 2023
3. VMware Certified Professional — Data Center Virtualization (VCP-DCV 2022) — October 2022
4. Cisco CCNA and CCNP — September 2019
