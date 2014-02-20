/**
 * Created by xuyuhang on 2/19/14.
 */
window.angular.module('xyh.services.global', [])
  .factory('Global', function(){
    var current_user = window.user;
    return {
      currentUser: function() {
        return current_user;
      },
      isSignedIn: function() {
        return !!current_user;
      }
    };
  });