const { test, expect } = require('@playwright/test');
const { CheckSearchInputFocused } = require('../page_objects/focusSearch.page');

test('ID 4 Check Search input is focused after a click on Home page.', async ({ page }) => {
  const checkSearchInputFocused = new CheckSearchInputFocused(page);
  await checkSearchInputFocused.clickSearchInput();
  await expect(checkSearchInputFocused.searchInput).toBeFocused();                                               
});