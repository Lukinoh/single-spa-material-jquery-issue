import singleSpaAngular1 from 'single-spa-angularjs';
import angular from 'angular';
import SystemJS from 'systemjs/dist/system-production';

// import './app.module.js';
// import './routes.js';

const wait = SystemJS.import('app4/app4.js');

const angularLifecycles = singleSpaAngular1({
    angular,
    domElementGetter,
    mainAngularModule: 'app',
    uiRouter: true,
    preserveGlobal: false,
});

export function bootstrap(props) {
    return wait.then(() => angularLifecycles.bootstrap(props));
}

export function mount(props) {
    return wait.then(() => angularLifecycles.mount(props));
}

export function unmount(props) {
    return wait.then(() => angularLifecycles.unmount(props));
}

function domElementGetter() {
    // Make sure there is a div for us to render into
    let el = document.getElementById('app4');
    if (!el) {
        el = document.createElement('div');
        el.id = 'app4';
        document.body.appendChild(el);
    }

    return el;
}
