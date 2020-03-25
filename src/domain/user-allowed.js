const createError = require("http-errors");

module.exports = () => {
  return {
    before: (handler,next) => {
      const { event } = handler;
      const user = event.user; // user context
     if (!user || user !== "golden-boys") {
      throw new createError.Unauthorized()}
      return next(); 
    }
  };
};