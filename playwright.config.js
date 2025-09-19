// @ts-check
// ✅ Enables TypeScript type checking for JS files (helps catch errors early)

import { defineConfig, devices } from '@playwright/test';
// ✅ Import Playwright test utilities and pre-defined device configs

import dotenv from 'dotenv';
import path from 'path';
// ✅ Load env vars (e.g., BASE_URL, credentials) from .env file

dotenv.config({ path: path.resolve(process.cwd(), '.env') });
// ✅ Ensures environment variables are available inside tests


/**
 * Playwright Configuration File
 * Documentation: https://playwright.dev/docs/test-configuration
 */
export default defineConfig({

  // =============== GLOBAL SETUP ==================
  //globalSetup: "./global-setup.js",  // 
  // ✅ Runs once before all tests. Used for tasks like generating auth cookies.

  // =============== TIMEOUTS ==================
  timeout: 80000,
  // ✅ Max time for each test (in ms). Default: 30s. Example: 60000 (1 min)

  expect: {
    timeout: 30000,
    // ✅ Max time for Playwright assertions like expect().toBeVisible()
  },

  // =============== TEST DIRECTORY ==================
  testDir: './tests',
  // ✅ Path to folder containing tests. Example: "./e2e" or "./specs"

  fullyParallel: true,
  // ✅ Run tests in file parallel. false = sequential

  forbidOnly: !!process.env.CI,
  // ✅ Prevents accidental commit of test.only in CI

  retries: process.env.CI ? 2 : 0,
  // ✅ Retry failing tests. Common: 0 (no retry), 1, or 2

  workers: process.env.CI ? 1 : undefined,
  // ✅ Number of parallel workers. Default = auto-detect CPU cores

  // =============== REPORTING ==================
  reporter: [
    ['html'], // ✅ Generates Playwright HTML report
    // ['line'], // Each test result in a single line
    // ['dot'],  // One dot per test
    // ['json', { outputFile: 'report.json' }],
    // ['junit', { outputFile: 'results.xml' }],
    // ['allure-playwright', { outputFolder: 'allure-results' }],
  ],

  // =============== SHARED SETTINGS ==================
  use: {

    //storageState: "./playwright/.auth/auth.json",// ✅ Reuse saved authentication state (cookies + localStorage)

    // baseURL: "https://restful-booker.herokuapp.com",
    // extraHTTPHeaders: {
    //   Accept: "application/json",
    //   "Content-Type": "application/json",
    //   Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
    // },
    // baseURL: process.env.BASE_URL || "http://localhost:3000",
    // ✅ Base URL for `page.goto('/login')`

    screenshot: 'on',
    // ✅ Capture screenshots → 'off' | 'on' | 'only-on-failure'

    video: 'on',
    // ✅ Record videos → 'off' | 'on' | 'retain-on-failure' | 'only-on-failure'

    viewport: { width: 1280, height: 720 },
    // ✅ Browser viewport size

    headless: false,
    // ✅ true = no browser UI, false = visible browser

    trace: 'on',
    // ✅ Collect trace for debugging → 'off' | 'on' | 'retain-on-failure' | 'on-first-retry'

    // ignoreHTTPSErrors: false,
    // // ✅ Ignore HTTPS errors (self-signed certs)

    // bypassCSP: false,
    // // ✅ Bypass Content-Security-Policy checks

    // locale: 'en-US',
    // // ✅ Browser locale (language)

    // timezoneId: 'Asia/Kolkata',
    // // ✅ Set timezone in browser context

    // userAgent: 'MyCustomAgent',
    // // ✅ Custom browser User-Agent

    // permissions: ['geolocation'],
    // // ✅ Grant permissions automatically

    // geolocation: { longitude: 77.59, latitude: 12.97 },
    // // ✅ Fake geolocation

    // colorScheme: 'light',   
    // // ✅ 'light' | 'dark' | 'no-preference'
  },

  // =============== PROJECTS (multi-browser/devices) ==================
  projects: [
    // {
    //   name: "setup",  // A custom project for global setup
    //   testMatch:/.*\.setup\.js/,   // Only runs files ending with .setup.js
    //   //testMatch: "global.setup.ts"   // Only runs this specific file
    // },
    {
      name: 'chromium',
      //dependencies:["setup"],   // Ensures "setup" project runs first
      use: { ...devices['Desktop Chrome'] }, // ✅ Google Chrome
      //storageState: "./playwright/.auth/auth.json"     // Reuse saved authentication state (cookies + localStorage)
    },
    // {
    //   name: 'Desktop Chrome',
    //   use: {
    //     ...devices['Desktop Chrome'], // ✅ predefined desktop device
    //     viewport: { width: 1280, height: 720 }, // custom viewport
    //   },
    // },
    // {
    //   name: 'Tablet',
    //   use: {
    //     viewport: { width: 820, height: 1180 }, // ✅ tablet size
    //     userAgent: 'tablet-test', // optional custom UA
    //   },
    // },
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5'], // ✅ predefined Pixel 5 device (mobile)
    //   },
    // },
    // {
    //   name: 'iPhone 12 Safari',
    //   use: {
    //     ...devices['iPhone 12'], // ✅ predefined iPhone 12 viewport
    //   },
    // },
    // {
    //   name: 'firefox',
    //  dependencies:["setup"],   // Ensures "setup" project runs first
    //   use: { ...devices['Desktop Firefox'] }, // ✅ Firefox
    //storageState: "./playwright/.auth/auth.json"  // Reuse saved authentication state (cookies + localStorage)
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] }, // ✅ Safari
    // },
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] }, // ✅ Emulate Pixel 5
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] }, // ✅ Emulate iPhone 12
    // },
  ],

  // =============== WEB SERVER (for local apps) ==================
  // webServer: {
  //   command: 'npm run start',        // ✅ Command to run server
  //   url: 'http://localhost:3000',    // ✅ Wait until this URL is reachable
  //   reuseExistingServer: !process.env.CI,
  //   // ✅ Avoid restarting server if already running
  //   timeout: 120000,                  // ✅ Max time to wait for server
  // },
  
});
