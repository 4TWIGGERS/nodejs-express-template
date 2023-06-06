const pino = require("pino");

const pinoConfig = {
  options: {
    translateTime: "SYS:dd-mm-yyyy",
  },
};

const logger = pino(pinoConfig);

module.exports = logger;
