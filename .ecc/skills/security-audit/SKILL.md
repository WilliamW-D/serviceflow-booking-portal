---
name: ecc-security-audit
description: Security scanning and vulnerability verification checklist for client booking & payment applications.
---

# Security Audit & Pre-Deployment Guardrails

## Checkpoints
1. **Payment Safety**:
   - Card information must never hit custom databases or plaintext logs.
   - Use simulated tokenization in demonstration mode and Stripe Elements in production.
2. **Data Privacy**:
   - Client phone numbers and addresses stored securely.
   - LocalStorage data encapsulated behind a clean DAO (Data Access Object) with encryption readiness.
3. **Defense Against Abuse**:
   - Client-side rate limiting on booking submissions to prevent spam.
