/**
 * Created by xuyuhang on 2/19/14.
 */
window.angular.module('xyh.controllers.header', [])
  .controller('HeaderCtrl', ['$scope', 'Global',
    function($scope, Global) {
      $scope.global = Global;
    }]);