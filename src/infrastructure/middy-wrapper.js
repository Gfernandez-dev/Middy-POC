const middy = require('middy');
const { httpSecurityHeaders, httpErrorHandler,validator } = require('middy/middlewares');
const {responseSchemma} = require('../domain/countrySchemma');
module.exports = (handler) => {
  return middy(handler).use(httpSecurityHeaders())
                       .use(httpErrorHandler())
                       .use(validator({outputSchema: responseSchemma}));
};