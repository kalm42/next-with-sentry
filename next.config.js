const withSourceMaps = require("@zeit/next-source-maps");
require("dotenv").config();

module.exports = withSourceMaps({
  target: "serverless",
  env: {
    SENTRY_DSN: process.env.SENTRY_DSN
  },
  webpack(config) {
    return config;
  }
});
