import angular from 'angular';
import angularMaterialize from 'angular-materialize';
import uiRouter from 'angular-ui-router'

import CatalogCtrl from './catalog/catalog.controller';
import CartCtrl from './cart/cart.controller';
import CartCountCtrl from './nav/cart_count.controller';
import OrdersCtrl from './orders/orders.controller';
import SignUpCtrl from './signup/signup.controller';

import CatalogService from './catalog/catalog.services';
import CartService from './cart/cart.services';
import OrdersService from './orders/orders.services';
import SignUpService from './signup/signup.services';


angular.module('my-app', [angularMaterialize, uiRouter])
  .service('CatalogService', CatalogService)
  .service('CartService', CartService)
  .service('OrdersService', OrdersService)
  .service('SignUpService', SignUpService)
  .controller('CatalogCtrl', CatalogCtrl)
  .controller('CartCtrl', CartCtrl)
  .controller('CartCountCtrl', CartCountCtrl)
  .controller('OrdersCtrl', OrdersCtrl)
  .controller('SignUpCtrl', SignUpCtrl)
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
