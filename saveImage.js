'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk');
AWS.config.setPromisesDependency(require('bluebird'));
const docClient = new AWS.DynamoDB.DocumentClient();
const s3 = new AWS.S3();


module.exports.save = (event, context, callback) => {
  const image = event.files.file
  //const image = event.fileName
  /*const createItemObject = (callback) => {
    const params = { 
          Bucket: "aws-images", 
          Key: `${imageName}`, 
          ACL: 'public-read',
          Body:image
      };
    s3.upload(params, function (err, data) {
      if (err) {
          console.log("Error uploading image: ", err);
          callback(err, null)
        } else {
          console.log("Successfully uploaded image on S3", data);
          callback(null, { statusCode: 200,
                          headers: {
                            'x-custom-header' : 'custom header value',
                            "Access-Control-Allow-Origin" : "*" 
                          },
                          body: JSON.stringify({
                            message: `Image uploaded successfully`
                        })})
        }
    })  
  }*/

  callback(null,{statusCode: 200,
                          headers: {
                            'x-custom-header' : 'custom header value',
                            "Access-Control-Allow-Origin" : "*" 
                          },
                          body: JSON.stringify({
                            message: image
                        })})
};
