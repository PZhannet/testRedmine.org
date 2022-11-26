
const { expect } = require('@playwright/test');

exports.EmailInputPage = class EmailInputPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {

    this.page = page;
    this.signInLink = page.locator('a[href="/login"]');
    this.lostPasswordLink=page.locator('a[href$="/lost_password"]')
    this.emailInput = page.locator('#mail');
    this.submitButton=page.locator('[name="commit"]')
    this.unknownUserError=page.locator('#flash_error')
  
  }

  async goto() {
    await this.page.goto('https://www.redmine.org/');
  }
}