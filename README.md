# single-spa-portal-example

## How to run this project
1. Clone this project
2. Jump into each app folder and do:
   - `npm install`
   - `npm run watch:portal`
3. Then start the portal with:
   - `npm install`
   - `npm run watch`
4. Open up http://localhost:9000 in a web browser.

## Resume
App3 Angular 1:
This apps is the same app3 as the original repository https://github.com/me-12/single-spa-portal-example with a slider from angular-material added


App4 Angular 1 - issue:
This apps is a modified version of app3.
Concretely the differences is:
- In the `singleSpaEntry.js` we do not import directly `app.module.js`, but we go through a SystemJS call.


The issue is probably link to SystemJS, but I do not know enough of the library to make some assumption.

## Original Repository
https://github.com/me-12/single-spa-portal-example