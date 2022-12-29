const { MainPage } = require('./mainPage.page');
exports.CheckSearchInputFocused = class CheckSearchInputFocused extends MainPage{
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    this.page = page;
    this.searchInput=page.locator('[id="q"]')
  }
  async clickSearchInput(){
    await this.goto();
    await this.searchInput.click();
  }
}