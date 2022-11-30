const { test, expect } = require('@playwright/test');
const { SearchInputPage} = require('../page_objects/search.page');



test('ID 2 To test the negative "Search" input scenario ', async ({ page }) => {
  const searchInputPage = new SearchInputPage(page);
  await searchInputPage.inputInSearch();
  await expect(searchInputPage.messegeResultsCount).toHaveText('Results (0)');
});