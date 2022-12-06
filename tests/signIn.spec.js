const { test, expect } = require('@playwright/test');
const { EmailInputPage } = require('../page_objects/signIn.page');
import {generateString} from '../helper/helperGeneCode'

test('ID 1 Check the password recovery with a valid but not registered email address on Sign in page, Lost password link.', async ({ page }) => {
  const emailInputPage = new EmailInputPage(page);
  await emailInputPage.clickSignInLink();
  await emailInputPage.clickLostPasswordLink();
  await emailInputPage.inputEmail(generateString(5)+'@gmail.com');
  await emailInputPage.clickSubmitButton();
  await expect(emailInputPage.unknownUserError).toHaveText('Unknown user.');                                                  
});