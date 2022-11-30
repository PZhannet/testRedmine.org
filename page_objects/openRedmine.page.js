const { expect } = require('@playwright/test');

exports.OpenRedminePage = class OpenRedminePage {
  
  constructor(page) {
    this.page = page;
    this.url = "https://www.redmine.org/";
  }

   async goto() {
    await this.page.goto(this.url);
  }
}