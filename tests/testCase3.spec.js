const { test, expect } = require('@playwright/test');
const { CheckCategoryReports} = require('./testCase3.page');


test('Page Summary contains Tracker, Priority, Assignee, Version, Author, Subproject and Category reports', async ({ page }) => {
  const checkCategoryReports = new CheckCategoryReports(page);
  await checkCategoryReports.goto();
  await checkCategoryReports.issuesPage.click();
  await checkCategoryReports.summuryLink.click();
  
  await expect(checkCategoryReports.categoryName).toHaveText([
    'Tracker  ','Priority  ', 'Assignee  ', 'Author  ', 'Version  ', 'Subproject  ','Category  ']
    
    );

  
});