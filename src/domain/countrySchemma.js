const responseSchemma = {
    required: ['body', 'statusCode'],
    properties: {
      statusCode: {
        type: 'number'
      },
      body: {
        type: 'string'
      }
    }
  }
module.exports = {
    responseSchemma
  }