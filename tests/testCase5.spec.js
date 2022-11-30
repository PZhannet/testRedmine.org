const { test, expect } = require('@playwright/test');
const {CheckPriceMasteringRedmine2Edition} = require('../page_objects/priceFree');


test('ID 5 To test the price of a book when "Read for free" button is pressed', async ({ page }) => {
  const checkPriceMasteringRedmine2Edition= new CheckPriceMasteringRedmine2Edition(page);
  await checkPriceMasteringRedmine2Edition.checkPrice();
  await expect(checkPriceMasteringRedmine2Edition.priceFree).toHaveText('€0.00');  
});