const { test, expect } = require('@playwright/test');
const { SearchPage} = require('../page_objects/searchPage.page');
import {generateString} from '../helper/helperGeneCode'

test('ID 2 Check Search input with not valid information on Search page', async ({ page }) => {
  const searchPage = new SearchPage(page);
  await searchPage.clickSearchLink();
  await searchPage.fillSearchInput(generateString(10));
  await searchPage.clickSubmitButton();
  await expect(searchPage.messegeResultsCount).toHaveText('Results (0)');
});