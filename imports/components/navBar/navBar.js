import angular, { element } from 'angular';
import angularMeteor from 'angular-meteor';
import template from './navBar.html';
import style from './navBar.css';
import bgImg from '../../ui/img/nav-bar-bg.jpg';

class NavBarCtrl {
    constructor() {
        this.label = "This is from the constructor in navBar component!";
        element.css({})
    }
    
}

var app = angular.module('background',[]);
app.controller('background-ctrl', function($scope){});

app.directive('')

export default angular.module('navBar', [
    angularMeteor
]).component('navBar', {
    templateUrl: 'imports/components/navBar/navBar.html',
    styleUrl: 'imports/components/navBar/navBar.css',
    controller: NavBarCtrl
})