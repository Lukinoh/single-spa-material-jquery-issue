import 'zone.js';
import * as singleSpa from 'single-spa';
import { loadApp } from './helper'

async function init() {
    const loadingPromises = [];

    // app3: The URL "/app3/..." is being redirected to "http://localhost:9003/..." this is done by the webpack proxy (webpack.config.js)
    loadingPromises.push(loadApp('app3', '/app3', '/app3/singleSpaEntry.js', null, null)); // does not have a store, so we pass null

    // app3: The URL "/app4/..." is being redirected to "http://localhost:9004/..." this is done by the webpack proxy (webpack.config.js)
    loadingPromises.push(loadApp('app4', '/app4', '/app4/singleSpaEntry.js', null, null)); // does not have a store, so we pass null

    // wait until all stores are loaded and all apps are registered with singleSpa
    await Promise.all(loadingPromises);

    singleSpa.start();
}

init();

