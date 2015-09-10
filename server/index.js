var proxyPath = '/api';
var oauthPath = '/oauth';
var apiPath = '/api';

var bodyParser = require('body-parser');
var globSync   = require('glob').sync;

var apiProxy = require('./lib/fullNodeProxy.js').createProxyServer( { target: 'http://10.105.5.55:8000/apirest' } );
var oauthProxy = require('./lib/fullNodeProxy.js').createProxyServer( { target: 'http://10.105.5.55:9000/o' } );
var path = require('path');



module.exports = function(app) {
  app.use(bodyParser.json());

  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(proxyPath, function(req, res, next) {
    apiProxy.web(req, res);
  });

  app.use(oauthPath, function(req, res, next) {
    oauthProxy.web(req, res);
  });
};

