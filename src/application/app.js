const middyWrapper = require('../infrastructure/middy-wrapper');
const goldenUsers= require('../domain/user-allowed'); 
const covid = require('../../data//countries.json');

const handler = async (event, context) => {  

        return {
            'statusCode': 200,
            'body': JSON.stringify({
               countries: covid,
               input:event
            })
          
        };
};

exports.handler = middyWrapper(handler)
                    .use(goldenUsers());