import angular from 'angular';
import angularMaterialize from 'angular-materialize';
import uiRouter from 'angular-ui-router'

import CatalogCtrl from './catalog/catalog.controller';
import CartCtrl from './cart/cart.controller';
import CartCountCtrl from './nav/cart_count.controller.js';

import CatalogService from './catalog/catalog.services';
import CartService from './cart/cart.services';


angular.module('my-app', [angularMaterialize, uiRouter])
  .service('CatalogService', CatalogService)
  .service('CartService', CartService)
  .controller('CatalogCtrl', CatalogCtrl)
  .controller('CartCtrl', CartCtrl)
  .controller('CartCountCtrl', CartCountCtrl)
  .config(['$stateProvider', ($stateProvider) => {
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'views/home.html',
      })
      .state('main', {
        url: '/',
        templateUrl: 'views/home.html',
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'views/signup.html',
      })
      .state('signin', {
        url: '/signin',
        templateUrl: 'views/signin.html',
      })
      .state('checkout', {
        url: '/checkout',
        templateUrl: 'views/checkout.html',
      })
      .state('orders', {
        url: 'orders',
        templateUrl: 'views/orders.html'
      })
  }]);
