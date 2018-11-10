const logger = require(process.env.APP_SERVICES_DIR + 'logger');

function handleMessage(message, done) {
  // log the received message
  logger.info(message.Body);

  // call the done function this will delete the message from the queue
  done();
}

module.exports = handleMessage;
