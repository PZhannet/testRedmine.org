exports.CheckSearchInputIsFocused = class CheckSearchInputIsFocused {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
  
      this.page = page;
      this.searchInput = page.locator('[id="q"]');
      
      
    }
  
    async goto() {
      await this.page.goto('https://www.redmine.org/');
    }
  }