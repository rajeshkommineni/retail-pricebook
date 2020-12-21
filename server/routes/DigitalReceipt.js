const express = require('express');
const request = require('request');
const cryptojs = require('crypto-js');
const log4js = require('log4js');

const CONSTANTS = require('../../constants.js');
const config = require('../config/config.json');
const ping = require('ping');
const common = require('./common');

const DRRouter = express.Router();

log4js.configure('./server/config/log4js.json');
var log = log4js.getLogger('site');
var log_level = config.LOG_LEVEL;
log.logLevel = log_level;

DRRouter.get('/dr/image/:id', common.authToken, async (req, res, next) => {
    try {
      console.log('in get dr image API');
     var queryParams = req.params.id;
      request.get(
        common.setParams(
          CONSTANTS.METHOD_TYPES.GET,
         CONSTANTS.BSP.API_ENDPOINTS.DIGITAL_RECEIPT_SERVICE.GET_DIGITAL_RECEIPT + queryParams
        ),
        function (err, response, body) {
          console.log('Image: ' + JSON.stringify(response));
          console.log(body);
          res.send(JSON.stringify(body));
          //res.send(body);
        }
      );
    } catch (e) {
      log.error(`Error :${e}`);
      next(e);
    }
  });
	

module.exports = DRRouter;
