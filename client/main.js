import angular from 'angular';
import angularMeteor from 'angular-meteor';

import test from '../imports/components/test/test';
import navBar from '../imports/components/navBar/navBar';
import landing from '../imports/components/landing/landing';
 
angular.module('move-giant', [
  angularMeteor,
  test.name,
  navBar.name,
  landing.name
]);