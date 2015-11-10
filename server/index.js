var proxyPath = '/api';
var oauthPath = '/oauth';
var appPath = '/app';

var bodyParser = require('body-parser');
var globSync   = require('glob').sync;

var apiProxy = require('./lib/fullNodeProxy.js').createProxyServer( { target: 'https://srv-sparl-8.hcdn.gob.ar:9000/apirest' } );
var appProxy = require('./lib/fullNodeProxy.js').createProxyServer( { target: 'http://sparl.hcdn.gob.ar' } );
var oauthProxy = require('./lib/fullNodeProxy.js').createProxyServer( { target: 'https://srv-sparl-7.hcdn.gob.ar:9000/o' } );

var path = require('path');


module.exports = function(app) {
  app.use(bodyParser.json());

  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(proxyPath, function(req, res, next) {
    apiProxy.web(req, res);
  });

  app.use(appPath, function(req, res, next) {
    appProxy.web(req, res);
  });

  app.use(oauthPath, function(req, res, next) {
    oauthProxy.web(req, res);
  });
};


