const AWS = require('aws-sdk');

module.exports = (accessKeyId, secretAccessKey, region, apiVersion) => {
  AWS.config = new AWS.Config({
    accessKeyId,
    secretAccessKey,
    region
  });

  return new AWS.SQS({ apiVersion });
};
