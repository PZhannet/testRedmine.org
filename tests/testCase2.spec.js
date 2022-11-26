const { test, expect } = require('@playwright/test');
const { SearchInputPage} = require('./testCase2.page');
import * as generateString from './helperGeneCode'


test('Enter  not valid information in the "Search" input', async ({ page }) => {
  const searchInputPage = new SearchInputPage(page);
  await searchInputPage.goto();
  await searchInputPage.searchLink.click();
  await searchInputPage.serchInput.fill(generateString.generateString(10));
  await await searchInputPage.submitButton.click();
  await expect(searchInputPage.messegeResultsCount).toHaveText('Results (0)'
    );
});