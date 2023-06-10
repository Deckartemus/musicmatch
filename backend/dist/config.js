"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_dotenv["default"].config({
  path: _path["default"].resolve(__dirname, "".concat(process.env.NODE_ENV, ".env"))
});
module.exports = {
  NODE_ENV: process.env.NODE_ENV || "development",
  API_KEY: process.env.API_KEY
  // DATABASE_HOST: process.env.DATABASE_HOST || "localhost",
  // DATABASE_PORT: process.env.DATABASE_PORT || 3000,
  // DATABASE_USERNAME: process.env.DATABASE_USERNAME,
  // DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  // DATABASE_NAME: process.env.DATABASE_NAME,
  // TOKEN_SECRET: process.env.TOKEN_SECRET,
};