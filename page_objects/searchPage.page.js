const { expect } = require('@playwright/test');
const { MainPage } = require('./mainPage.page');
exports.SearchPage = class SearchPage extends MainPage{
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    this.page = page;
    this.serchInput=page.locator('[id="search-input"]');
    this.submitButton = page.locator('[name="commit"]');
    this.messegeResultsCount=page.locator('[id$="counts"]~h3');
    this.gettingSearchLinkHeder = page.locator(('div>h2'));
  }
  async clickSearchLink() {
    await this.goto();
    //await this.clickSearchLink();
    await this.searchLink.first().click();
    await expect(this.gettingSearchLinkHeder).toBeVisible();
  }
  async fillSearchInput(text){
    await this.serchInput.fill(text);
    await expect(this.serchInput).not.toBeEmpty();
  }
  async clickSubmitButton(){
    await this.submitButton.click();
  }
}