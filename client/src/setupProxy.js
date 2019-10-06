const proxy = require('http-proxy-middleware');

/*
We are using http-proxy-middleware with React and Express.js so that there are no issues with CORS between the /api server
and the front end. This workaround is purely built in to allow cookies to be sent accross domains + no CORS
headaches.
*/
 
module.exports = app => {
    app.use(
      "/api/**",
      proxy({
        target: process.env.NODE_ENV !== "production" ? "http://localhost:9888" : "http://monquestionnaire.com"
      })
    );
  };