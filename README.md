## Project description. 

    Test different functionality for  https://www.redmine.org/

    It allows testing Chromium, Firefox and WebKit with a single API

## Project set up
    
    To clone progect:  git clone https://github.com/PZhannet/testRedmine.org

## Running Tests

    Running all tests:   npx playwright test

    Run a one definite files:  npx playwright test #name.spec.js

    Running tests in headed mode:  npx playwright test --headed

    Run a one definite files in headed mode:  npx playwright test #name.spec.js --headed

## Allure report


    Open Allure Report: npx allure serve 

    Press <Ctrl+C> to exit from opened Allure Report

## HTML report

    Open HTML Report: npx playwright show-report

## Line reporter

    Line uses a single line to report the last finished test, and prints failures when they occur. 

    Line reporter is useful for large test suites where it shows the progress but does not spam the output by listing all the tests. 
    
    Its runs automatically during test running.

##  Technologies

    Node.js: 16.14.2
    





