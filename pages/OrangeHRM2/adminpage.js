import { expect } from '@playwright/test';

export class AdminPage {
  constructor(page) {
    this.page = page;
    this.adminMenu = page.locator("//span[text()='Admin']");
    this.jobMenu = page.locator("//span[normalize-space()='Job']");
    this.jobTitlesOption = page.locator("//a[normalize-space()='Job Titles']");
    this.addButton = page.locator("//button[normalize-space()='Add']");
    this.jobTitleInput = page.locator("(//form[contains(@class,'oxd-form')]//input[contains(@class,'oxd-input')])[1]");
    this.saveButton = page.locator("//button[normalize-space()='Save']");
  }

  async navigateToJobTitles() {
    await this.adminMenu.click();

    // ✅ wait until Job menu is visible
    await expect(this.jobMenu).toBeVisible({ timeout: 10000 });
    await this.jobMenu.click();

    // ✅ wait until Job Titles link is visible
    await expect(this.jobTitlesOption).toBeVisible({ timeout: 10000 });
    await this.jobTitlesOption.click();
  }

  async addJobTitle(jobTitle) {
    await this.addButton.click();

    // ✅ wait until Job Title input is visible
    await expect(this.jobTitleInput).toBeVisible({ timeout: 10000 });

    await this.jobTitleInput.fill(jobTitle);
    await this.saveButton.click();

    // ✅ verify added
    await expect(this.page.locator(`//div[text()='${jobTitle}']`)).toBeVisible();
  }
}