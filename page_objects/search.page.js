const { expect } = require('@playwright/test');
const { OpenRedminePage } = require('./openRedmine.page');
import * as generateString from '../helper/helperGeneCode'

exports.SearchInputPage = class SearchInputPage extends OpenRedminePage{

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    this.page = page;
    this.searchLink = page.locator('[href$="/search"]');
    this.serchInput=page.locator('[id="search-input"]')
    this.submitButton = page.locator('[name="commit"]');
    this.messegeResultsCount=page.locator('[id$="counts"]~h3');
    this.gettingSearchLinkHeder = page.locator(('div>h2'))
    
  }

  async clickSearchLink() {
    await this.searchLink.first().click();
    await expect(this.gettingSearchLinkHeder).toBeVisible();
  }
  async fillSearchInput(){
    await this.serchInput.fill(generateString.generateString(10));
    await expect(this.serchInput).not.toBeEmpty();
  }
  async clickSubmitButton(){
    await this.submitButton.click();
  }
  async inputInSearch(){
    await this.goto();
    await this.clickSearchLink();
    await this.fillSearchInput();
    await this.clickSubmitButton();
  }
}
