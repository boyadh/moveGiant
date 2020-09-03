import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './landing.html';
//import styles from './landing.css';

class LandingCtrl {
    constructor() {
        this.label = "This is from the constructor in landing component!";
    }
}

export default angular.module('landing', [
    angularMeteor
]).component('landing', {
    templateUrl: 'imports/components/landing/landing.html',
    //stylesUrl: 'imports/components/landing/landing.css',
    controller: LandingCtrl
})