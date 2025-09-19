# Copilot Instructions for PracticePlaywright

## Project Overview
This is a Playwright-based end-to-end testing project for web applications. The workspace contains test scripts, page objects, configuration files, and test data. The main focus is on automating UI flows and validating web features using Playwright.

## Key Directories & Files
- `e2e/`, `tests/`, `tests-examples/`: Main test scripts. Follow Playwright's test structure and naming conventions.
- `pages/`: Page Object Model (POM) files. Encapsulate selectors and actions for each web page/module.
- `playwright.config.js`: Central config for Playwright (browser, baseURL, timeouts, reporter, etc.).
- `auth.json`, `test-data/`: Store credentials and test data. Do not hardcode secrets in scripts.
- `playwright-report/`, `allure-results/`, `Screenshots/`, `test-results/`: Output directories for reports, screenshots, and results.

## Developer Workflows
- **Run all tests:**
  ```powershell
  npx playwright test
  ```
- **Run a specific test file:**
  ```powershell
  npx playwright test tests/DropDownList/AutosuggestDD.spec.js
  ```
- **Generate HTML report:**
  ```powershell
  npx playwright show-report
  ```
- **Debug tests:** Use Playwright's `--debug` or `--headed` flags. Example:
  ```powershell
  npx playwright test --debug
  ```
- **Allure reporting:** If configured, results are in `allure-results/`. Use Allure CLI for advanced reporting.

## Patterns & Conventions
- **Page Object Model:** Place reusable page logic in `pages/`. Example: `pages/OrangeHRM/Buzzmodule.js`.
- **Test Data:** Use external files in `test-data/` for data-driven tests.
- **Selectors:** Prefer Playwright locators (`page.locator(...)`) over raw XPath/CSS unless necessary.
- **Timeouts:** Use explicit waits (`waitForSelector`, `waitForTimeout`) for dynamic content.
- **Reporting:** Test results and artifacts are stored in dedicated folders for easy access.

## Integration Points
- **External Sites:** Tests interact with real web apps (e.g., Flipkart, Abhibus). Handle popups and dynamic elements robustly.
- **Authentication:** Use `auth.json` for login flows. Avoid storing credentials in code.

## Example Patterns
- **Autosuggest Dropdown Test:** See `tests/DropDownList/AutosuggestDD.spec.js` for capturing and selecting dropdown suggestions.
- **Product Search & Extraction:** See Flipkart product extraction logic for array mapping and conditional checks.

## Tips for AI Agents
- Always reference selectors and page objects from `pages/` when possible.
- Use Playwright's built-in assertions and reporting tools.
- Keep test scripts modular and data-driven.
- Clean up artifacts (screenshots, results) after test runs if needed.

---
If any section is unclear or missing, please provide feedback for further refinement.
