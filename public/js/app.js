window.app = angular.module('mean', ['ngCookies', 'ngResource', 'ui.bootstrap', 'ui.route', 'mean.system', 'xyh.services', 'xyh.controllers']);

angular.module('mean.system', []);
window.angular.module('xyh.services', ['xyh.services.global']);
window.angular.module('xyh.controllers', ['xyh.controllers.header']);