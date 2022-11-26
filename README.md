## First task. Test different functionality for  https://www.redmine.org/

    Run 5 different test cases to test functionality for  https://www.redmine.org/

    'testCase1.spec' is testing Test Case id:1, Target Description:[Lost password][Sign in] Enter in Email input valid but not registered email address.

    'testCase2.spec' is testing Test Case id:2, Target Description:[Search]Enter  not valid information in the "Search" input.

    'testCase3.spec' is testing Test Case id:3, Target Description:[Summary][Issues]Page Summary contains Tracker, Priority, Assignee, Version, Author, Subproject, and Category reports.

    'testCase4.spec' is testing Test Case id:4, Target Description:[Search]Search input is focused after a click.

    'testCase5.spec' is testing Test Case id:5, Target Description:[Read for free][Mastering Redmine - Second Edition] Check the price of a book is €0.00 when "Read for free" button is pressed.

## Projects

    It allows testing Chromium, Firefox and WebKit with a single API

## Running Tests

    Running all tests:   npx playwright test

    Run a one definite files:  npx playwright test testCase№.spec.js

    Running tests in headed mode:  npx playwright test --headed

    Run a one definite files in headed mode:  npx playwright test testCase5.spec.js --headed

## Allure report

    To run test and specify reporter: npx playwright test --reporter=line,allure-playwright

    Generate Allure Report: npx allure generate ./allure-results

    To overwrite Allure Report: npx allure generate ./allure-results --clean

    Open Allure Report: npx allure open ./allure-report

    Press <Ctrl+C> to exit from opened Allure Report

## Visual Studio Code

    Version: 1.73.1(user setup)

    Chromium: 102.0.5005.167

    Node.js: 16.14.2

    OS: Windows_NTx64 10.0.19044





