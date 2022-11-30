## Project description. 

    Test different functionality for  https://www.redmine.org/


## Projects

    It allows testing Chromium, Firefox and WebKit with a single API

## Project set up
    Pre-Requisites: 

    Install Visual Studio Code: Download and Install Visual Studio Code(VSCode).
    Install NodeJS: Download and Install Node JS

    Installation Playwright:

    Run the install command in Terminal VSCode

    npm init playwright@latest
    
    and select the following to get started:

    Choose JavaScript 
    Name of your Tests folder 
    Add a GitHub Actions workflow to easily run tests on CI
    
    To clone progect 
    git clone https://github.com/PZhannet/testRedmine.org

## Running Tests

    Running all tests:   npx test

    Run a one definite files:  npx playwright test testCase№.spec.js

    Running tests in headed mode:  npx playwright test --headed

    Run a one definite files in headed mode:  npx playwright test testCase№.spec.js --headed

## Allure report


    Open Allure Report: npm run allure:open

    Press <Ctrl+C> to exit from opened Allure Report

##  Requirements

    Version: 1.73.1(user setup)

    Chromium: 102.0.5005.167

    Node.js: 16.14.2

    OS: Windows_NTx64 10.0.19044





