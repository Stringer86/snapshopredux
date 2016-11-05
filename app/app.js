import angular from 'angular';
import angularMaterialize from 'angular-materialize';
import CatalogCtrl from './catalog/catalog.controller';
import CartCtrl from './cart/cart.controller';
import CartCountCtrl from './nav/cart_count.controller.js';

import CatalogService from './catalog/catalog.services';
import CartService from './cart/cart.services';


angular.module('my-app', [angularMaterialize])
  .service('CatalogService', CatalogService)
  .service('CartService', CartService)
  .controller('CatalogCtrl', CatalogCtrl)
  .controller('CartCtrl', CartCtrl)
  .controller('CartCountCtrl', CartCountCtrl)
