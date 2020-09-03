import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './navBar.html';
//import styles from './navBar.css';

class NavBarCtrl {
    constructor() {
        this.label = "This is from the constructor in navBar component!";
    }
}

export default angular.module('navBar', [
    angularMeteor
]).component('navBar', {
    templateUrl: 'imports/components/navBar/navBar.html',
    stylesUrl: 'imports/components/navBar/navBar.css',
    controller: NavBarCtrl
})