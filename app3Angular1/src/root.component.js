import angular from 'angular';

angular
    .module('app')
    .component('root', {
        template: `
            <div style="margin-top: 100px;">
              This app is the same app3 as the original repository https://github.com/me-12/single-spa-portal-example with a slider from angular-material added
            </div>
            
             <md-slider aria-label="test"
                class="md-primary"
                id="slider-test"
                max="100"
                md-discrete
                min="0"
                ng-model="vm.test"
                step="1">
            </md-slider>
            
            <a href="#/app3/subroute1">Subroute 1</a>
            <a href="#/app3/subroute2">Subroute 2</a>
            
            <ui-view />
        `,
        controllerAs: 'vm',
        controller($timeout) {
            const vm = this;
        }
    });
