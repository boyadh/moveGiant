import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './test.html';
//import styles from './test.css';

class TestCtrl {
    constructor() {
        this.label = "This is from the constructor in test component!";
    }
}

export default angular.module('test', [
    angularMeteor
]).component('test', {
    templateUrl: 'imports/components/test/test.html',
    //stylesUrl: 'imports/components/test/test.css',
    controller: TestCtrl
})