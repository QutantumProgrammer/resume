require.config({
	baseUrl : "../js",
	paths:{
		"angular": "angular.min", 
		"angular-ui-route" : ["angular-ui-router.min"],
		"jquery":["jquery-2.1.4.min"],
		"bootstrap":["bootstrap.min"],
		"app":["app"]
	},
	shim:{
		"angular-ui-route":{deps: ["angular"]},
		"bootstrap":["jquery"]
	}
});
require([
	"angular", 
	"angular-ui-route", 
	"jquery",
	"bootstrap",
	"../resume/myPlugin/my-file-upload",
	"../resume/controller/MainCtrl"
	],function(){
		alert(1);
		angular.bootstrap(document, ['demoApp']);
	});
