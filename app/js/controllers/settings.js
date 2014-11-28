'use strict';

/**
 * @ngdoc function
 * @name cnodejs.controllers:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Main Controller of the cnodejs app
 */

angular.module('cnodejs.controllers')
.controller('SettingsCtrl', function($scope, $log, ENV) {
  $log.log('settings ctrl');

  // mail feedback
  var feedbackMailAddr = 'hi@lanceli.com';
  var feedbackMailSubject = 'CNodeJs Feedback v' + ENV.version;
  $scope.feedback = function() {
    if (window.cordova && window.cordova.plugins.email) {
      window.cordova.plugins.email.open({
        to:      feedbackMailAddr,
        subject: feedbackMailSubject,
        body:    ''
      });
    } else {
      window.open('mailto:' + feedbackMailAddr + '?subject=' + feedbackMailSubject);
    }
  };
});
