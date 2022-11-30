const { expect } = require('@playwright/test');
const { OpenRedminePage } = require('./openRedmine.page');

exports.CheckSearchInputIsFocused = class CheckSearchInputIsFocused extends OpenRedminePage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      super(page);
      this.page = page;
      this.searchInput = page.locator('[id="q"]');
    }
    async clickSearchInput(){
      await this.searchInput.click();
    }
  
    async focusedSearchInput() {
      await this.goto();
      await this.clickSearchInput();
    }
  }