const { expect } = require('@playwright/test');
const { OpenRedminePage } = require('./openRedmine.page');

exports.CheckPriceMasteringRedmine2Edition = class CheckPriceMasteringRedmine2Edition extends OpenRedminePage{

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
      await this.buyItOnline.click();
      await expect(this.gettingBookTitle).toHaveText(' Mastering Redmine - Second Edition ')

    }
    async clickReadForFree(){
      await this.readForFree.click();
      await expect(this.unlockPacktLibraryForFreeTitle).toBeVisible();
    }
  
    async checkPrice() {
      await this.goto();
      await this.clickBuyItOnline();
      await this.clickReadForFree();
    }
  }