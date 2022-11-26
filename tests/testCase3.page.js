const { expect } = require('@playwright/test');

exports.CheckCategoryReports = class CheckCategoryReports {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {

    this.page = page;
    this.issuesPage = page.locator('[class="issues"]');
    this.summuryLink=page.locator('[href$="/report"]')
    this.categoryName = page.locator('//body//div/h3');
    
    
  }

  async goto() {
    await this.page.goto('https://www.redmine.org/');
  }
}