const { OpenRedminePage } = require('./openRedmine.page');
exports.CheckSearchInputFocused = class CheckSearchInputFocused extends OpenRedminePage{
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