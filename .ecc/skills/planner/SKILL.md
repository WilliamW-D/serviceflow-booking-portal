---
name: ecc-planner
description: Autonomous system architect and planning skill for full-stack business applications.
---

# Autonomous System Planner

## Objective
Convert high-level business goals or client requirements into unambiguous architecture blueprints, data models, state flows, and prioritized execution phases.

## Execution Workflow
1. **Scope Definition**: Identify target user persona (Client Customer vs Business Owner/Admin).
2. **Data Modeling**: Define JSON schema for entities:
   - `Service`: id, title, category, description, durationMinutes, price, depositPercentage.
   - `Booking`: id, customerName, email, phone, serviceId, slotDate, slotTime, status, depositPaid, balanceDue, notes.
   - `MetricSnapshot`: revenueTotal, depositsCollected, activeBookings, completedBookings.
3. **State Transition Map**:
   - `DRAFT` -> `SLOT_SELECTED` -> `CHECKOUT_INITIATED` -> `CONFIRMED` -> `COMPLETED` / `CANCELLED`.
4. **Handoff Output**: Produce clean task breakdown for the implementation agent.
