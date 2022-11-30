
const { expect } = require('@playwright/test');
const { OpenRedminePage } = require('./openRedmine.page');
import * as generateString from '../helper/helperGeneCode'


exports.EmailInputPage = class EmailInputPage extends OpenRedminePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {  
    super(page);
    this.page = page;
    this.signInLink = page.locator('a[href="/login"]');
    this.lostPasswordLink=page.locator('a[href$="/lost_password"]')
    this.emailInput = page.locator('#mail');
    this.submitButton=page.locator('[name="commit"]')
    this.unknownUserError=page.locator('#flash_error')
    this.gettingLoginForm = page.locator('#login-form')
    this.gettingLostPasswordHeader = page.locator('div>h2')
  }

  async clickSignInLink(){
    await this.signInLink.first().click();
    await expect(this.gettingLoginForm).toBeVisible();
  }

  async clicklostPasswordLink(){
    await this.lostPasswordLink.first().click();
    await expect(this.gettingLostPasswordHeader).toHaveText('Lost password')
  }

  async inputEmail(){
    await this.emailInput.fill(generateString.generateString(5)+'@gmail.com');
    await expect(this.emailInput).not.toBeEmpty();
  }

  async clickSubmitButton(){
    await this.submitButton.first().click();
    await expect(this.emailInput).toBeEmpty();
  }

  async signIn (){
    await this.goto();
    await this.clickSignInLink();
    await this.clicklostPasswordLink();
    await this.inputEmail();
    await this.clickSubmitButton();
  }
}






