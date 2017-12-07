'use strict';

const AWS = require('aws-sdk');
AWS.config.setPromisesDependency(require('bluebird'));
const docClient = new AWS.DynamoDB.DocumentClient();

module.exports.list = (event, context, callback) => {
   var params = {
    TableName : "aws-images"
    };
 
   docClient.scan(params, (err,data) =>{
        
        if(err){
            callback(err,null);
        }
        
        else{
           callback(err,{ statusCode: 200,
                          headers: {
                            'x-custom-header' : 'custom header value',
                            "Access-Control-Allow-Origin" : "*" 
                          },
                          body: JSON.stringify({
                          images: data.Items
                })}); 
            
        }
        
    });
};
