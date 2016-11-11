import angular from 'angular';
import angularMaterialize from 'angular-materialize';
import uiRouter from 'angular-ui-router';

import CartCountCtrl from './nav/cart_count.controller';
import CartCtrl from './cart/cart.controller';
import CatalogCtrl from './catalog/catalog.controller';
import CheckoutCtrl from './checkout/checkout.controller';
import OrdersCtrl from './orders/orders.controller';
import SignInCtrl from './signup/signin.controller';
import SignUpCtrl from './signup/signup.controller';

import CatalogService from './catalog/catalog.services';
import CartService from './cart/cart.services';
import OrdersService from './orders/orders.services';
import SignUpService from './signup/signup.services';
import SignInService from './signup/signin.services';
import CheckoutService from './checkout/checkout.services';

angular.module('my-app', [angularMaterialize, uiRouter])
  .service('CatalogService', CatalogService)
  .service('CartService', CartService)
  .service('OrdersService', OrdersService)
  .service('SignUpService', SignUpService)
  .service('SignInService', SignInService)
  .service('CheckoutService', CheckoutService)
  .controller('CatalogCtrl', CatalogCtrl)
  .controller('CartCtrl', CartCtrl)
  .controller('CartCountCtrl', CartCountCtrl)
  .controller('OrdersCtrl', OrdersCtrl)
  .controller('SignUpCtrl', SignUpCtrl)
  .controller('SignInCtrl', SignInCtrl)
  .controller('CheckoutCtrl', CheckoutCtrl)
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
      });
  }]);
