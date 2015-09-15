/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'sparl-core',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      client_id: 'K2io5Bw;3B5wCYhRoRbz5ifsx@;WR-LfMqkdHfa?',
      client_secret: 'p!fY;iymLsP0IolSnkCAz6Tj;2:S?S6:od.q2ID7P.LaS87YBpWrmnUILE9u6gYwxvNuuX4dK8O=3L5cIHR5Xv.D=IXa3cmjl!S5aoNpskj.5puRWwAB7Rq97H@4o.@S',
      host: 'http://localhost:4200',
      
       minifyHTML: {
          enabled: true,
          minifierOptions: {
              collapseWhitespace : true,
              removeComments     : true,
              minifyJS           : true,
              minifyCSS          : true
          }
        }      
    },

     pace: {
      color: 'red',
      theme: 'minimal',
      catchupTime: 50,
      initialRate: .01,
      minTime: 100,
      ghostTime: 50,
      maxProgressPerFrame: 20,
      easeFactor: 1.25,
      startOnPageLoad: true,
      restartOnPushState: true,
      restartOnRequestAfter: 500,
      target: 'body',
      elements: {
        checkInterval: 100,
        selectors: ['body', '.ember-view']
      },
      eventLag: {
        minSamples: 10,
        sampleCount: 3,
        lagThreshold: 3
      },
      ajax: {
        trackMethods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
        trackWebSockets: true,
        ignoreURLs: []
      }
    },
    
    
  };

  if (environment === 'development') {
     ENV.APP.LOG_RESOLVER = false;
     ENV.APP.LOG_ACTIVE_GENERATION = false;
     ENV.APP.LOG_TRANSITIONS = false;
     ENV.APP.LOG_TRANSITIONS_INTERNAL = false;
     ENV.APP.LOG_VIEW_LOOKUPS = false;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  ENV['contentSecurityPolicy'] = {
    'default-src': "'none'",
    'script-src': "* 'self' 'unsafe-inline'",
    'font-src': "* 'self' 'unsafe-inline'",
    'connect-src': "* 'self' 'unsafe-inline'",
    'img-src': "* 'self' 'unsafe-inline'",
    'style-src': "* 'self' 'unsafe-inline'",
    'media-src': "* 'self' 'unsafe-inline' "
  };

  ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:oauth2-bearer',
    session: 'session:custom'
  };

  ENV['simple-auth-oauth2'] = {
    serverTokenEndpoint: 'oauth/token/',
  };

  
  return ENV;
};
