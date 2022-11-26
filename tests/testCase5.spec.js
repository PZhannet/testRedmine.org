const { test, expect } = require('@playwright/test');
const {CheckPriceMasteringRedmine2Edition} = require('./testCase5.page');


test('Check the price of a book is €0.00 when "Read for free" button is pressed', async ({ page }) => {
  const checkPriceMasteringRedmine2Edition= new CheckPriceMasteringRedmine2Edition(page);
  await checkPriceMasteringRedmine2Edition.goto();
  await checkPriceMasteringRedmine2Edition.buyItOnline.click();
  await checkPriceMasteringRedmine2Edition.readForFree.click();
  await expect(checkPriceMasteringRedmine2Edition.priceFree).toHaveText('€0.00');
  

  
});