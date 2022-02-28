const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');

const express = require('express');
const { timeStamp } = require('console');
const logger = express();

const myFormat = winston.format.printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const infoLogger = winston.createLogger({
    format: winston.format.combine(
      winston.format.label({label: 'logged'}),
      winston.format.timestamp(),
      myFormat
    ),
    level: 'info',
    transports: [
        new winston.transports.Console(),
        new winston.transports.DailyRotateFile({ 
          filename: 'info.log',
          datePattern: 'YYYY-MM-DD'
        })
    ],
});

// const errorLogger = winston.createLogger({
//   format: winston.format.combine(
//     winston.format.label({label: 'logged'}),
//     winston.format.timestamp(),
//     myFormat
//   ),
//   level: 'error',
//   transports: [
//       new winston.transports.Console(),
//       new winston.transports.DailyRotateFile({ 
//         filename: 'info.log',
//         datePattern: 'YYYY-MM-DD'
//       })
//   ],
// });

infoLogger.stream = {
  write: function(message, encoding) {
    // use the 'info' log level so the output will be picked up by both transports (file and console)
    infoLogger.info(message);
  },
};

module.exports = logger