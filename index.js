const Consumer = require('sqs-consumer');

// initiate AWS SQS SDK
const sqs = require(process.env.APP_SERVICES_DIR + 'sqs')(
  process.env.SQS_ACCESS_KEY,
  process.env.SQS_SECRET_KEY,
  process.env.SQS_REGION,
  process.env.SQS_API_VERSION
);

// initiate logger
const logger = require(process.env.APP_SERVICES_DIR + 'logger');

// initiate Handler
const handleMessage = require(process.env.APP_SERVICES_DIR + 'handler');

//initiate sqs-consumer
const app = Consumer.create({
  sqs: sqs,
  queueUrl: process.env.SQS_QUEUE_URL,
  visibilityTimeout: process.env.SQS_VISIBILITY_TIMEOUT,
  terminateVisibilityTimeout: true,
  attributeNames: ['All'],
  handleMessage
});

// attach event handlers to the sqs-consumer to log messages and track if there is any error
app.on('error', err => {
  logger.error('Error in Team data aggregator Consumer : ' + err.message);
  // stop the polling
  app.stop();
});

app.on('message_received', message => {
  logger.info('message received from queue : ' + message.Body);
});

app.on('message_processed', message => {
  logger.info('message processed : ' + message.Body);
});

app.on('empty', () => {
  logger.info('Queue is Empty');
});

app.on('stopped', () => {
  logger.info('Consumer has stopped');
  process.exit(1);
});
logger.info('Starting the consumer');
app.start();
