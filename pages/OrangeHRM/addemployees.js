// Import expect for assertions
import { expect } from '@playwright/test';

export class AddEmployeePage {
    constructor(page) {
        this.page = page;   // ▶ Store page reference
        // ▶ Define locators
        this.pimMenu = page.getByRole('link', { name: 'PIM' });  // Unique PIM menu locator
        this.addEmployeeButton = page.locator('//a[text()="Add Employee"]');
        this.firstNameInput = page.locator('input[name="firstName"]');
        this.lastNameInput = page.locator('input[name="lastName"]');
        this.employeeIdInput = page.locator('input[class*="oxd-input"]').nth(4); // Employee ID input field
        this.saveButton = page.locator('button[type="submit"]');
    }

    // ▶ Generate random Employee ID (1000–9999)
    generateRandomEmployeeId() {
        const randomId = Math.floor(1000 + Math.random() * 9000).toString();
        console.log(`▶ Generated Random Employee ID: ${randomId}`);
        return randomId;
    }

    // ▶ Navigate to Add Employee page
    async navigateToAddEmployee() {
        console.log("▶ Navigating to PIM → Add Employee");
        await this.pimMenu.click();
        await this.addEmployeeButton.click();
    }

    // ▶ Fill employee details (with random ID)
    async fillEmployeeDetails(firstName, lastName) {
        const empId = this.generateRandomEmployeeId();
        console.log(`▶ Filling Employee Details: ${firstName} ${lastName}, ID: ${empId}`);

        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.employeeIdInput.fill(empId);

        return empId; // Return ID for validation
    }

    // ▶ Click Save button
    async saveEmployee() {
        console.log("▶ Saving employee details...");
        await this.saveButton.click();
    }
}
