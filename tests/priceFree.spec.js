const { test, expect } = require('@playwright/test');
const {CheckPriceMasteringRedmine2Edition} = require('../page_objects/priceFree.page');

test('ID 5 Check the price of a book is €0.00 when the "Read for free" button is pressed on the Packtpub Mastering Redmine-Second Edition page.', async ({ page }) => {
  const checkPriceMasteringRedmine2Edition= new CheckPriceMasteringRedmine2Edition(page);
  await checkPriceMasteringRedmine2Edition.clickBuyItOnline();
  await checkPriceMasteringRedmine2Edition.clickReadForFree();
  await expect(checkPriceMasteringRedmine2Edition.priceFree).toHaveText('€0.00');  
});