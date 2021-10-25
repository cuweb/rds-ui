require('dotenv').config();

module.exports = (on, config) => {
  config.env.baseUrl = process.env.CYPRESS_BASE_URL;
  return config;
};
