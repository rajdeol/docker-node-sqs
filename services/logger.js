const { createLogger, format, transports } = require('winston');
const { combine, timestamp } = format;

const logger = createLogger({
  level: 'info',
  format: combine(format.json(), format.colorize(), timestamp()),
  transports: [
    new transports.Console({
      format: combine(format.splat(), format.colorize(), timestamp())
    })
  ],
  exceptionHandlers: [
    new transports.Console({
      format: combine(format.splat(), format.colorize(), timestamp())
    })
  ]
});

module.exports = logger;
