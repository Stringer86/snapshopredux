import angular from 'angular';
import angularMaterialize from 'angular-materialize';
import CatalogCtrl from './catalog/catalog.controller';


angular.module('my-app', [angularMaterialize])
  .controller('CatalogCtrl', CatalogCtrl);
