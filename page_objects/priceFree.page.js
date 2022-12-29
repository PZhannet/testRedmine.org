const { expect } = require('@playwright/test');
const { MainPage } = require('./mainPage.page');
exports.CheckPriceMasteringRedmine2Edition = class CheckPriceMasteringRedmine2Edition extends MainPage{
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    this.page = page;
    this.buyItOnline = page.locator('tbody >tr a[href*="mastering"][class]');
    this.readForFree = page.locator('[class$="button--main"]')
    this.priceFree = page.locator('[class^="col-4 text"]');
    this.gettingBookTitle = page.locator('[class="product-info__title"]')
    this.unlockPacktLibraryForFreeTitle = page.locator('div>h1')
  }
  async clickBuyItOnline(){
    await this.goto();
    await this.buyItOnline.click();
    await expect(this.gettingBookTitle).toHaveText(' Mastering Redmine - Second Edition ')
  }
  async clickReadForFree(){
    await this.readForFree.click();
    await expect(this.unlockPacktLibraryForFreeTitle).toBeVisible();
  }
}