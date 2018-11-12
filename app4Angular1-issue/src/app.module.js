import angular from 'angular';
import '@uirouter/angularjs';
import 'angular-material';

angular
    .module('app', ['ui.router', 'ngMaterial'])
    .component('root', {
        template: `
            <div style="margin-top: 100px;">
                This app gets the 'app.module.js' with System.JS otherwise, it is the same as app3Angular1
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
            
            <a href="#/app4/subroute1">Subroute 1</a>
            <a href="#/app4/subroute2">Subroute 2</a>
            
            <ui-view />
        `,
        controllerAs: 'vm',
        controller($timeout) {
            const vm = this;
        }
    })
    .component('subroute1', {
        template: `<div style="margin-top:20px">Subroute 1 is working!</div>`,
        controllerAs: 'vm',
        controller() {
            const vm = this;

        },
    })
    .component('subroute2', {
        template: `<div style="margin-top:20px">Subroute 2 is working!</div>`,
        controllerAs: 'vm',
        controller() {
            const vm = this;

        },
    })
    .config(($stateProvider, $locationProvider) => {

        // make sure angular does not rewrite our urls, since they are set by the portal
        $locationProvider.hashPrefix('');
        $locationProvider.html5Mode({
            enabled: false,
            requireBase: false,
        });


        $stateProvider
            .state('root', {
                url: '/app4',
                template: '<root />',
            })

            .state('root.subroute1', {
                url: '/subroute1',
                template: '<subroute1 />',
            })

            .state('root.subroute2', {
                url: '/subroute2',
                template: '<subroute2 />',
            })

    });
