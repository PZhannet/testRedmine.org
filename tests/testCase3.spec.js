const { test, expect } = require('@playwright/test');
const { CheckCategoryReports} = require('../page_objects/summary.page');


test('ID 3 To check created reports on  Page Summary', async ({ page }) => {
  const checkCategoryReports = new CheckCategoryReports(page);
  await checkCategoryReports.checkSummaryReports();
  await expect(checkCategoryReports.categoryName).toHaveText([
    'Tracker  ','Priority  ', 'Assignee  ', 'Author  ', 'Version  ', 'Subproject  ','Category  ']); 
});