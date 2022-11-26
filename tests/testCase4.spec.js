const { test, expect } = require('@playwright/test');
const {CheckSearchInputIsFocused} = require('./testCase4.page');


test('Search input is focused after a click', async ({ page }) => {
  const checkSearchInputIsFocused = new CheckSearchInputIsFocused(page);
  await checkSearchInputIsFocused.goto();
  await checkSearchInputIsFocused.searchInput.click();
  await expect(checkSearchInputIsFocused.searchInput).toBeFocused();

  
});