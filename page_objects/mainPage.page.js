exports.MainPage = class MainPage {
    
  constructor(page) {
    this.page = page;
    this.url = "https://www.redmine.org/";
    this.searchLink = page.locator('[href$="/search"]');
    
  }
   async goto() {
    await this.page.goto(this.url);
  }
  /*async clickSerchLink (){
    await this.searchLink.first().click();
  }*/
}