const { test, expect } = require('@playwright/test');
const { EmailInputPage } = require('./testCase1.page');
import * as generateString from './helperGeneCode'

test('Enter in Email input valid but not registered email address.', async ({ page }) => {
  const emailInputPage = new EmailInputPage(page);
  await emailInputPage.goto();
  await emailInputPage.signInLink.click();
  await emailInputPage.lostPasswordLink.click();
  await emailInputPage.emailInput.fill(generateString.generateString(5)+'@gmail.com');
  await emailInputPage.submitButton.click();
  await expect(emailInputPage.unknownUserError).toHaveText('Unknown user.'
    );                                                    

});