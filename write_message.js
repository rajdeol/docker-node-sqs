// add our logger
const logger = require(process.env.APP_SERVICES_DIR + 'logger');

// initiate our AWS SQS sdk
const sqs = require(process.env.APP_SERVICES_DIR + 'sqs')(
  process.env.SQS_ACCESS_KEY,
  process.env.SQS_SECRET_KEY,
  process.env.SQS_REGION,
  process.env.SQS_API_VERSION
);

// Prepare a default test message, this message will be pushed if no message is supplied as an argument when calling this file
let messageBody = 'Test Message created at - ' + new Date().toISOString();

// if there is any message supplied in command line when calling this file, overwrite the test message
if (process.argv[2]) {
  messageBody = process.argv[2];
}

// SQS params
let sqsParams = {
  QueueUrl: process.env.SQS_QUEUE_URL,
  MessageBody: messageBody
};

// finally push the message to SQS
sqs.sendMessage(sqsParams, function(err, data) {
  if (err) {
    logger.error('Error while writing message to queue', err);
  } else {
    logger.info('Message written Successfully to queue : ' + data.MessageId);
  }
});
