# ECC Automated Engineering Standards

## 1. Core Operating Principles
- **Autonomous Verification**: Never ship or mark a feature complete without automated validation (syntax, type check, unit tests, and runtime smoke testing).
- **Test-Driven Discipline (TDD)**: Formulate the expected input/output and behavior before writing implementation details.
- **Fail-Safe Design**: Handle network dropouts, validation errors, and invalid form data with user-friendly toast messages and fallback states.
- **Security by Default**:
  - Zero hardcoded secrets, API keys, or plaintext credentials.
  - Strict input sanitization against XSS and injection attacks.
  - Safe local storage isolation.

## 2. Code Quality & Modularity
- Clean separation between State Management, UI Rendering, and API/Network calls.
- Pure functions for business logic (e.g., pricing calculations, date formatting, deposit computation).
- Descriptive variable and function naming with zero cryptic abbreviations.

## 3. Production Deployment Checklist
- [ ] Responsive UI verified across mobile (375px), tablet (768px), and desktop (1440px).
- [ ] Keyboard navigation and accessibility (ARIA labels, focus states).
- [ ] Zero unhandled JavaScript console errors or rejected promises.
- [ ] SEO and open-graph metadata in place.
