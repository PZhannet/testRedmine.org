const { expect } = require('@playwright/test');

exports.SearchInputPage = class SearchInputPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {

    this.page = page;
    this.searchLink = page.locator('[href$="/search"]');
    this.serchInput=page.locator('[id="search-input"]')
    this.submitButton = page.locator('[name="commit"]');
    this.messegeResultsCount=page.locator('[id$="counts"]~h3');
    
  }

  async goto() {
    await this.page.goto('https://www.redmine.org/');
  }
}