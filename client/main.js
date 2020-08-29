import angular from 'angular';
import angularMeteor from 'angular-meteor';

import test from '../imports/components/test/test';
 
angular.module('move-giant', [
  angularMeteor,
  test.name
]);