---
name: ecc-tdd-workflow
description: Test-Driven Development workflow ensuring all financial calculations, calendar slot generations, and validation logic pass unit tests.
---

# TDD Workflow & Test Suite Guidelines

## Mandatory Invariants to Test
1. **Financial Calculations**:
   - `calculateDeposit(total, percentage)` must round cleanly to two decimals.
   - `calculateBalance(total, deposit)` must never yield negative balance.
2. **Date & Slot Generation**:
   - Weekend availability handling according to business hours.
   - Slot conflict detection (prevent double-booking the same provider at the same hour).
3. **Form Sanitization**:
   - Phone number format validation (E.164 or US 10-digit).
   - Email regex compliance.
   - Script injection strip on user notes.
