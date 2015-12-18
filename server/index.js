var proxyPath = '/api';
var oauthPath = '/oauth';
var appPath = '/app';
var middlePath = '/user';

var bodyParser = require('body-parser');
var globSync   = require('glob').sync;

var apiProxy = require('./lib/fullNodeProxy.js').createProxyServer( { target: 'https://186.33.210.53:9000/apirest' } );
var appProxy = require('./lib/fullNodeProxy.js').createProxyServer( { target: 'http://186.33.210.36' } );
var oauthProxy = require('./lib/fullNodeProxy.js').createProxyServer( { target: 'https://186.33.210.56:9000/o' } );
var middleProxy = require('./lib/fullNodeProxy.js').createProxyServer( { target: 'http://localhost:1337' } );

var path = require('path');


module.exports = function(app) {
  app.use(bodyParser.json());

  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin)
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');
    next();
  });

  app.use(proxyPath, function(req, res, next) {
    apiProxy.web(req, res);
  });

  app.use(appPath, function(req, res, next) {
    appProxy.web(req, res);
  });

  app.use(oauthPath, function(req, res, next) {
    oauthProxy.web(req, res);
  });

  app.use(middlePath, function(req, res, next) {
    middleProxy.web(req, res);
  });
};


