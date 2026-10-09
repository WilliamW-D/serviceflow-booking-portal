# ⚡ ServiceFlow — High-Converting Service Business Booking & Deposit Portal

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-10b981.svg)](https://williamw-d.github.io/serviceflow-booking-portal/)
[![ECC Harness Certified](https://img.shields.io/badge/ECC-Harness%20Certified-6366f1.svg)](#ecc-automated-engineering-harness)
[![Build Status](https://img.shields.io/badge/Tests-5%2F5%20Passing-10b981.svg)](#test-suite--quality-assurance)
[![Security Audit](https://img.shields.io/badge/AgentShield-Verified-06b6d4.svg)](#security--agentshield)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**ServiceFlow** is a modern, mobile-first customer booking, calendar reservation, and Stripe deposit collection platform built specifically for high-ticket local service businesses (mobile detailing, HVAC, home cleaning, plumbing, pet grooming).

It eliminates phone tag, prevents customer no-shows by collecting upfront deposits (e.g. 20%), and provides the business owner with a live operational CRM to manage appointments and track collected revenues.

---

## 🌟 Key Features

### 1. High-Converting Customer Booking Experience
- **Interactive Package Selection**: Showcase core tiers (Express, Signature, Diamond) with transparent pricing and deposit requirements.
- **Dynamic Calendar & Timeslots**: Conflict-free date selection that dynamically blocks out already booked slots.
- **Add-on Customizer**: Seamless upsells (pet hair removal, engine bay detailing, headlight restoration) with real-time total recalculation.
- **Stripe Deposit Simulator**: Real-time card checkout experience calculating total value, deposit paid today, and remaining balance due on job completion.
- **Automated Confirmation & SMS Dispatch**: Generates unique booking reference codes (`APX-####`) and simulated instant text alert delivery.

### 2. Business Owner Admin CRM & Schedule Hub
- **Executive Metrics**: Live KPI stat cards for Gross Bookings, Deposits Collected, Confirmed Upcoming, and Completed Jobs.
- **Interactive Operations Table**: Searchable and filterable booking database with one-click actions:
  - `✓ Done` (Mark completed & move balance to collected)
  - `📱 SMS` (Dispatch automated appointment reminder)
  - `✕ Cancel` (Cancel booking and immediately release the calendar slot)
- **Local Persistence**: State changes automatically sync with `localStorage` and optional backend endpoints.

### 3. Integrated Client Pitch & Monetization Kit
- **Interactive ROI Calculator**: Demonstrates to prospective business owners how preventing 2 no-shows pays for the entire software build within 30 days.
- **Ready-to-Send Cold Outreach Scripts**: Proven templates for Instagram DMs and cold emails targeting local business owners.
- **Pricing Strategy Guide**: Breakdown for pitching one-time setups ($499–$750) or recurring monthly retainers ($299 setup + $49/mo).

---

## 🧪 ECC Automated Engineering Harness

This codebase was developed following the **Everything Claude Code (ECC)** agent operating standards:

```
├── .ecc/
│   ├── rules/
│   │   └── engineering-standards.md     # Automated TDD, safety & accessibility standards
│   ├── skills/
│   │   ├── planner/SKILL.md             # Autonomous system planning & schema blueprinting
│   │   ├── tdd-workflow/SKILL.md        # Math, date conflict & regex test invariant enforcement
│   │   ├── security-audit/SKILL.md      # Secret leak detection & script injection auditor
│   │   └── client-pitch-kit/SKILL.md    # Commercial proposal templates & sales scripts
│   └── hooks.json                       # Event triggers for syntax checks & test suites
```

### Test Suite & Quality Assurance
The project includes automated validation for financial calculations, phone/email validation, and calendar collision prevention:

```bash
npm test
```

Output:
```text
🧪 Running ECC Automated Unit Tests...
✅ Test 1 Passed: calculateDeposit correctly handles percentages and rounding
✅ Test 2 Passed: calculateBalanceDue prevents negative balances
✅ Test 3 Passed: isValidPhone correctly validates US formats
✅ Test 4 Passed: isValidEmail accurately enforces email syntax
✅ Test 5 Passed: isSlotAvailable prevents calendar collisions
🎉 ALL 5/5 UNIT TESTS PASSED SUCCESSFULLY!
🛡️ Running AgentShield / Security Audit Check...
✅ Security Audit Passed: No hardcoded credentials or dangerous execution patterns detected in source files.
```

---

## 🚀 Quick Start & Local Run

No heavy dependencies required. Runs on vanilla Node.js:

```bash
# 1. Clone the repository
git clone https://github.com/your-username/serviceflow-booking-portal.git
cd serviceflow-booking-portal

# 2. Run the test suite
npm test

# 3. Start the local server
npm start
```

Visit **`http://localhost:3000`** in your browser.

---

## 💼 How to Use This to Get Paid / Land a Job

1. **For Freelance Clients:**
   - Deploy this project to [Vercel](https://vercel.com) or [Netlify](https://netlify.com) in 2 minutes.
   - Use the scripts in [`SALES_PITCH_GUIDE.md`](file:///C:/Users/billy/.gemini/antigravity-ide/scratch/booking-portal/SALES_PITCH_GUIDE.md) to reach out to 10 local service businesses.
   - Offer to customize their colors, logo, packages, and connect their Stripe account for $500–$1,000.

2. **For Software Engineering Interviews:**
   - Present this repo to showcase full-stack competency, disciplined TDD testing, responsive glassmorphic UI design, and modular state management.
   - Highlight the `.ecc/` directory to show you use bleeding-edge AI agent engineering workflows to ship reliable code at 5x velocity.
