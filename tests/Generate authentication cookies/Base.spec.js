// ✅ Import Playwright test runner
import { test } from '@playwright/test';
import fs from 'fs';

test('Generate Auth Cookies', async ({ page }) => {

    // 👉 1. Navigate to OrangeHRM login page
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // 👉 2. Fill Username with "Admin"
    await page.locator("input[name='username']").fill("Admin");

    // 👉 3. Fill Password with "admin123"
    await page.locator("input[type='password']").fill("admin123");

    // 👉 4. Click on Login button
    await page.locator("button[type='submit']").click();

    // 👉 5. Wait until dashboard URL is loaded after successful login
    await page.waitForURL("**/dashboard/index");

    // 👉 6. Capture cookies + localStorage (auth state) //Takes a snapshot of login session (cookies + storage).
    const storage = await page.context().storageState({ path: "auth.json" });

    // 👉 7. Save them into a file (auth.json) //Saves that snapshot into auth.json for reuse.
    fs.writeFileSync('auth.json', JSON.stringify(storage));
    console.log("✅ Auth cookies & storage saved in auth.json");

});



// 🍪 Cookies

// Small pieces of data stored in the browser by a website.

// Example: when you log in, the site may store a cookie like:

// { "session_id": "abc123xyz", "user": "Admin" }


// These are sent automatically with every request to the same website → so the server knows “this is the same user.”

// Used for:

// Remembering logins

// Saving preferences (e.g., dark mode, language)

// Tracking (e.g., ads, analytics)

// 📍 In Playwright, cookies are part of storageState.

// 🗂️ Sessions

// A session is like a "conversation" between your browser and the server.

// It usually starts when you log in and ends when you log out (or when the session expires).

// The server creates a session record (in memory or database) and gives you a session ID (often stored in a cookie).

// Without a session → the server wouldn’t know who you are when you click to the next page.

// ✅ How they work together

// You log in → server creates a session.

// Server sends back a cookie with session_id=123.

// Browser stores the cookie.

// Every new request → browser sends session_id=123 automatically.

// Server uses this ID to find your session details (like username, role, preferences).

// 🔑 Example (OrangeHRM login flow)

// Without cookies/sessions → you’d have to log in on every page click.

// With cookies/sessions → once logged in, your session stays active until you log out or it expires.

// 👉 In automation (Playwright), we store cookies (storageState) to reuse the session without logging in every time.



//import fs from 'fs';


// ➡️ This means we are importing Node.js's built-in File System module (fs).

// fs = File System module → it allows you to read, write, update, and delete files on your computer.

// In our case, we use it to save authentication cookies (auth.json) after logging in.

// Example:

// Edit
// import fs from 'fs';

// // 👉 Write some text into a file
// fs.writeFileSync('test.txt', 'Hello OrangeHRM!');

// // 👉 Read the file back
// const data = fs.readFileSync('test.txt', 'utf-8');
// console.log(data);  // Output: Hello OrangeHRM!
// So in the auth cookies example:

// fs.writeFileSync('auth.json', JSON.stringify(storage));
// storage = cookies + localStorage data.

// JSON.stringify(storage) → converts it into JSON text.

// writeFileSync → saves it in a file called auth.json.

// 👉 Later, your test can read this file to log in without typing username & password again.

/*

// 🔹 Step 6: Capture cookies + localStorage (auth state)

// const storage = await page.context().storageState();

// page.context() → gets the browser context (a sandboxed browser profile).

// .storageState() → extracts the entire authentication state of that context, which includes:

// ✅ Cookies → e.g., session_id, auth_token, etc.

// ✅ LocalStorage → items saved by the app in the browser.

// ✅ Origin Storage → domain-specific session details.

// 👉 Basically, this line tells Playwright:
// "Take a snapshot of everything that keeps me logged in."

// 🔹 Step 7: Save them into a file
// fs.writeFileSync('auth.json', JSON.stringify(storage));
// console.log("✅ Auth cookies & storage saved in auth.json");


// fs.writeFileSync → writes data to a file on disk.

// 'auth.json' → the file where cookies + storage are saved.

// JSON.stringify(storage) → converts the storage object into JSON format so it can be stored in the file.

// ✅ After this step, you have a file auth.json containing something like:

// {
//   "cookies": [
//     {
//       "name": "session_id",
//       "value": "abc123xyz",
//       "domain": "opensource-demo.orangehrmlive.com",
//       "path": "/",
//       "expires": -1,
//       "httpOnly": true,
//       "secure": true,
//       "sameSite": "Lax"
//     }
//   ],
//   "origins": [
//     {
//       "origin": "https://opensource-demo.orangehrmlive.com",
//       "localStorage": [
//         { "name": "theme", "value": "dark" }
//       ]
//     }
//   ]
// }


// 👉 Later, you can replay these cookies in another test with:

// const context = await browser.newContext({ storageState: 'auth.json' });


// This way you skip login in future tests.

// ⚡ So in short:

// Step 6 → Takes a snapshot of login session (cookies + storage).

// Step 7 → Saves that snapshot into auth.json for reuse.

*/