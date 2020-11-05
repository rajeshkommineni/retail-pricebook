const express = require('express');
const request = require('request');
const log4js = require('log4js');

const CONSTANTS = require('../../constants.js');
const config = require('../config/config.json');

const common = require('./common');

const router = express.Router();

log4js.configure('./server/config/log4js.json');
var log = log4js.getLogger('tdm');
var log_level = config.LOG_LEVEL;

log.logLevel = log_level;

//Upload the TDM in BSP.
router.post(
  '/tdm/upload/:providerName/:providerVersion',
  common.authToken,
  async (req, res, next) => {
    console.log('upload TDM');
    try {
      console.log('reqBody :' + JSON.stringify(req.body));
      var queryParams =
        '?providerName=' +
        req.params.providerName +
        '&providerVersion=' +
        req.params.providerVersion;
      request.post(
        common.setOptions(
          CONSTANTS.METHOD_TYPES.POST,
          CONSTANTS.BSP.API_ENDPOINTS.TDM_SERVICE.POST_UPLOAD_TDM + queryParams,
          req.body,
          true
        ),

        function (e, r, body) {
          console.log(JSON.stringify(body));
          res.json(body);
        }
      );
    } catch (e) {}
  }
);

module.exports = router;
