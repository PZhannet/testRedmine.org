exports.CheckPriceMasteringRedmine2Edition = class CheckPriceMasteringRedmine2Edition {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
  
      this.page = page;
      this.buyItOnline = page.locator('tbody >tr a[href*="mastering"][class]');
      this.readForFree = page.locator('[class$="button--main"]')
      this.priceFree = page.locator('[class^="col-4 text"]');
      
      
    }
  
    async goto() {
      await this.page.goto('https://www.redmine.org/');
    }
  }