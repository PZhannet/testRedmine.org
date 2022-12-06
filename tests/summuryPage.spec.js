const { test, expect } = require('@playwright/test');
const { CheckCategoryReports} = require('../page_objects/summaryPage.page');

test('ID 3 Verify Page Summary contains Tracker, Priority, Assignee, Version, Author, Subproject, and Category reports.', async ({ page }) => {
  const checkCategoryReports = new CheckCategoryReports(page);
  await checkCategoryReports.clickIssuePage();
  await checkCategoryReports.clickSummaryLink();
  await expect(checkCategoryReports.categoryName).toHaveText([
    'Tracker  ','Priority  ', 'Assignee  ', 'Author  ', 'Version  ', 'Subproject  ','Category  ']); 
});