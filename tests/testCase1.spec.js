const { test, expect } = require('@playwright/test');
const { EmailInputPage } = require('../page_objects/signIn.page');

test('ID 1 To test Sign in with valid but not registered email address.', async ({ page }) => {
  const emailInputPage = new EmailInputPage(page);
  await emailInputPage.signIn();
  await expect(emailInputPage.unknownUserError).toHaveText('Unknown user.');                                                  
});