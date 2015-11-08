angular.module('angular')
  .config(function($logProvider) {
		$logProvider.debugEnabled(true);
  })
	.config(function($authProvider) {
		$authProvider.configure({
			apiUrl: '/api'
		});
	});
