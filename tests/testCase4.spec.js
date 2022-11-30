const { test, expect } = require('@playwright/test');
const {CheckSearchInputIsFocused} = require('../page_objects/focusSearch');


test('ID 4 To test focus in Search input after a click', async ({ page }) => {
  const checkSearchInputIsFocused = new CheckSearchInputIsFocused(page);
  await checkSearchInputIsFocused.focusedSearchInput();
  await expect(checkSearchInputIsFocused.searchInput).toBeFocused();
});