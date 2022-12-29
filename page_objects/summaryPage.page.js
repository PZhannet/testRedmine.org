const { expect } = require('@playwright/test');
const { MainPage } = require('./mainPage.page');
exports.CheckCategoryReports = class CheckCategoryReports extends MainPage  {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    this.page = page;
    this.issuesPage = page.locator('[class="issues"]');
    this.summaryLink=page.locator('[href$="/report"]')
    this.categoryName = page.locator('//body//div/h3');
    this.gettingPageHeader = page.locator('div>h2');
  }
  async clickIssuePage(){
    await this.goto();
    await this.issuesPage.click();
    await expect(this.gettingPageHeader).toHaveText('Issues');
  }
  async clickSummaryLink(){
    await this.summaryLink.click();
    await expect(this.gettingPageHeader).toHaveText('Reports')
  }
}