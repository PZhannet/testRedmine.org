const { test, expect } = require('@playwright/test');
const { SearchInputPage} = require('../page_objects/searchInput.page');
import {generateString} from '../helper/helperGeneCode'

test('ID 2 Check Search input with not valid information on Search page', async ({ page }) => {
  const searchInputPage = new SearchInputPage(page);
  await searchInputPage.clickSearchLink();
  await searchInputPage.fillSearchInput(generateString(10));
  await searchInputPage.clickSubmitButton();
  await expect(searchInputPage.messegeResultsCount).toHaveText('Results (0)');
});