const express = require('express');
const request = require('request');
const cryptojs = require('crypto-js');
const log4js = require('log4js');
var moment = require("moment");
const fs = require('fs');
var dateFormat = require('dateformat');
var path = require('path');

const CONSTANTS = require('../../constants.js');
const config = require('../config/config.json');
const ping = require('ping');
const common = require('./common');

const router = express.Router();

const dbsite = require('../models/tracking');
const SiteTracking = dbsite.models.SiteTracking;

const generateXMLFileforStore = require('../pricebook/generateXML.js').generateXMLFileforStore;

log4js.configure('./server/config/log4js.json');
var log = log4js.getLogger('site');
var log_level = config.LOG_LEVEL;
log.logLevel = log_level;
const generateXMLFileforItems = require('../pricebook/generateXML.js').generateXMLFileforItems;
const pushFileToDrive = require('../pricebook/fileTransfer.js').pushFileToDrive;
const zipFile = require('../pricebook/zip.js');


var siteTrackingArray = [
	{ sitenumber:55571, updated_time:'' , status: 'Completed', pending_files: '' },
	{ sitenumber:59947, updated_time:'' , status: 'Completed', pending_files: '' },
	{ sitenumber:59990, updated_time:'' , status: 'Completed', pending_files: '' },
];


//Get the details of the site for a given enterprise/Site ID.
  router.get('/site/sites/:id', common.authToken, async (req, res, next) => {
    try {
      //console.log('in Site Site API');
     var queryParams = '/' + req.params.id;
      request.get(
        common.setParams(
          CONSTANTS.METHOD_TYPES.GET,
         CONSTANTS.BSP.API_ENDPOINTS.SITE_SERVICE.GET_SITES + queryParams
        ),
        function (err, response, body) {
          //console.log('Sites: ' + JSON.stringify(response));
          res.json(body);
        }
      );
    } catch (e) {
      log.error(`Error :${e}`);
      next(e);
    }
  });
 
router.get(
	'/site/sites/:id/:pattern',
	common.authToken,
	async (req, res, next) => {
	  try {
		//console.log('in Site status API');
		var queryParams =
		  '/' + req.params.id + '?customAttributes=' + req.params.pattern;
		request.get(
		  common.setParams(
			CONSTANTS.METHOD_TYPES.GET,
			CONSTANTS.BSP.API_ENDPOINTS.SITE_SERVICE.GET_SITES + queryParams
		  ),
		  function (err, response, body) {
			var result = {};
			if(body) {
				result = JSON.parse(body);
			}
			//console.log('Sites: ' + JSON.stringify(response));
			var status = result.customAttributeSets;
			//var lenght = this.Sites.length;
			//getting the computerName for the Site
			for(var i = 0; i<status[0].attributes.length; i++){
				//console.log(status[0].attributes[i].value);
				if(status[0].attributes[i].key == "computername")
				{
				  var host = status[0].attributes[i].value;
				}
			}
			//console.log(status);

			//var host = status[0].attributes[3].value;
			//console.log(host);
			ping.sys.probe(host, function(isAlive){
				var msg = isAlive ? 'Online' : 'Offline';
				//console.log(msg);
			// Assigning the status of ping in response
			for(var i = 0; i<4 && ( msg == 'Online'); i++){
				//console.log(status[0].attributes[i].value);
				if(status[0].attributes[i].key == "online-offline")
				    status[0].attributes[i].value = msg;
			}
			//console.log(msg);
			//console.log(result) ;

			var resbody = {
				"Site Name": result.siteName,
				"status": msg};
			res.send(resbody );
			});
			

		  }
		);
	  } catch (e) {
		log.error(`Error :${e}`);
		next(e);
	  }
	}
  );
router.post('/site/extensions', common.authToken, async (req, res, next) => {
	try {
		request.post(
		  common.setOptions(
			CONSTANTS.METHOD_TYPES.POST,
		  CONSTANTS.BSP.API_ENDPOINTS.SITE_SERVICE.POST_SITE_EXTENSIONS,
				req.body      ),

				function (e, r, body) {
				//console.log(JSON.stringify(body));
				res.json(body);
     			  }
				);
		} catch (e) {}
});

  

router.post('/site/sites', common.authToken, async (req, res, next) => {
	try {

		//console.log("SItes details code :" );
		request.post(
		  common.setOptions(
			CONSTANTS.METHOD_TYPES.POST,
		  CONSTANTS.BSP.API_ENDPOINTS.SITE_SERVICE.POST_SITE_DETAILS,
									  req.body),
									  function (e, r, body) {
										//console.log(JSON.stringify(body));
										res.json(body);
									  }
									);
								  } catch (e) {}
								});
router.post('/site/sites/find-by-criteria', common.authToken, async (req, res, next) => {
		try {
								
				//console.log("List of Sites details" );
			// 	req.body = {
			// 		"criteria":{
			// 			"status":"ACTIVE",
			// 			 "customAttributeSets": [
			// 				   {
			// 					   "typeName": "PRICEBOOKSITEDETAILS"
			// 				   }
			// 			 ]
			// 		}
			//    }

				
				request.post(
				common.setOptions(
					CONSTANTS.METHOD_TYPES.POST,
					CONSTANTS.BSP.API_ENDPOINTS.SITE_SERVICE.POST_SITE_FIND_BY_CRITERIA,
						req.body),
						function (e, r, body) {
						//console.log(JSON.stringify(body));
						res.json(body);
			            }
		            );
            } catch (e) {}
});


router.get('/site/updateSiteStatus/:sitenumber', common.authToken, async (req, res, next) => {
	try {
	  console.log('updateSiteStatus-',req.params.sitenumber );

	  var idx = siteTrackingArray.findIndex(site => site.sitenumber == req.params.sitenumber);
      if( idx != -1 ) {
		siteTrackingArray[idx].updated_time = new Date();
		res.send({ status: siteTrackingArray[idx].status, pending_files: siteTrackingArray[idx].pending_files });
	  }
	  else {
		res.send({ error: 'Site Not found' });
	  }
	} catch (e) {
	  log.error(`Error :${e}`);
	  next(e);
	}
  
});

router.get('/site/siteStatus/:siteId', common.authToken, async (req, res, next) => {
	try { 

		var idx = siteTrackingArray.findIndex(site => site.sitenumber == req.params.siteId);
		if( idx != -1 ) {

			var start_date = moment(siteTrackingArray[idx].updated_time, 'YYYY-MM-DD HH:mm:ss');
			var end_date = moment(new Date(), 'YYYY-MM-DD HH:mm:ss');

			var duration = moment.duration(end_date.diff(start_date));
			var seconds = duration.asSeconds(); 
			var mins = duration.asMinutes(); 
			console.log('site-', siteTrackingArray[idx].updated_time,  start_date,end_date, mins, seconds);

			if( seconds < 30 ) {
				res.send({ online_status: 'Online', status: siteTrackingArray[idx].status, pending_files: siteTrackingArray[idx].pending_files  });
			}
			else {
				res.send({ online_status: 'Offline', status: siteTrackingArray[idx].status, pending_files: siteTrackingArray[idx].pending_files });
			}

		}
		
	} catch (e) { }
});

router.get('/download/:sitenumber/:filename', common.authToken, async(req, res, next) => {
    var appDir = path.dirname(require.main.filename);
	console.log("dir:" , appDir);
	
	var idx = siteTrackingArray.findIndex(site => site.sitenumber == req.params.sitenumber);
	if( idx != -1 ) {
		siteTrackingArray[idx].status = 'Completed';
		siteTrackingArray[idx].pending_files = '';
	}

	res.download( appDir + '/' + req.params.filename);

});


router.put('/generateItemsXML/:storeId', common.authToken, async (req, res, next) => {
	try {
  
	  console.log('API Enter: generateItemsXML');
  
	  var filename = "E" + dateFormat(new Date(), "yyyymmdd_HHMMss_") + req.params.storeId + ".XML";
  
	  generateXMLFileforStore(req.params.storeId,(result) => {
  
		if( result.result === 'SUCCESS' ) {
  
		  var xmlFile = result.filename;
		  var xmlZip = xmlFile.replace('.XML', '.ZIP');
		  zipFile(xmlFile, xmlZip);
		  fs.unlink(xmlFile, err => { console.log(err) });
		  console.log('Zip-',xmlZip);
		  
		  var idx = siteTrackingArray.findIndex(site => site.sitenumber == req.params.storeId);
		  if( idx != -1 ) {
			siteTrackingArray[idx].status = 'Pending';
			siteTrackingArray[idx].pending_files = xmlZip;
		  }
		}
  
		console.log(result);
		res.send( result );
	  });
								
	} catch (e) {
	  log.error(`Error :${e}`);
	  next(e);
	}
});




/*
router.get('/site/updateSiteStatus/:sitenumber', common.authToken, async (req, res, next) => {
	try {
	  console.log('updateSiteStatus-',req.params.sitenumber );
	  SiteTracking.updateSiteStatus(req.params.sitenumber)
	  .then(result=> {
		if(result[0] === 1 ) {
		  SiteTracking.getSiteInfo(req.params.sitenumber)
		  .then(site => {
			//console.log('site-', site);
			res.send({ status: site.status, pending_files: site.pending_files });
		  });
		}
		//res.send({result: 'ERROR' });
	  });
	} catch (e) {
	  log.error(`Error :${e}`);
	  next(e);
	}
  
});

router.get('/site/siteStatus/:siteId', common.authToken, async (req, res, next) => {
	try { 
		SiteTracking.getSiteInfo(req.params.siteId)
        .then(site => {

			var start_date = moment(site.updated_time, 'YYYY-MM-DD HH:mm:ss');
			var end_date = moment(new Date(), 'YYYY-MM-DD HH:mm:ss');

			var duration = moment.duration(end_date.diff(start_date));
			var seconds = duration.asSeconds(); 
			var mins = duration.asMinutes(); 
			console.log('site-', site.updated_time,  start_date,end_date, mins, seconds);

			if( seconds < 30 ) {
				res.send({ online_status: 'Online', status: site.status, pending_files: site.pending_files  });
			}
			else {
				res.send({ online_status: 'Offline', status: site.status, pending_files: site.pending_files });
			}
        });
		
	} catch (e) { }
});

router.get('/download/:sitenumber/:filename', common.authToken, async(req, res, next) => {
    var appDir = path.dirname(require.main.filename);
    console.log("dir:" , appDir);

    SiteTracking.updateSitePendingFiles(req.params.sitenumber,'Completed', '')
    .then(result=> {
      console.log('result-', result);
      if(result[0] === 1 ) {
        res.download( appDir + '/' + req.params.filename);
      }
    });
});


router.put('/generateItemsXML/:storeId', common.authToken, async (req, res, next) => {
	try {
  
	  console.log('API Enter: generateItemsXML');
  
	  var filename = "E" + dateFormat(new Date(), "yyyymmdd_HHMMss_") + req.params.storeId + ".XML";
  
	  generateXMLFileforStore(req.params.storeId,(result) => {
  
		if( result.result === 'SUCCESS' ) {
  
		  var xmlFile = result.filename;
		  var xmlZip = xmlFile.replace('.XML', '.ZIP');
		  zipFile(xmlFile, xmlZip);
		  console.log('Zip-',xmlZip);
  
		  SiteTracking.updateSitePendingFiles(req.params.storeId,'Pending', xmlZip)
		  .then(result=> {
			console.log('result-', result);
		  });
		}
  
		console.log(result);
		res.send( result );
	  });
								
	} catch (e) {
	  log.error(`Error :${e}`);
	  next(e);
	}
});

*/

module.exports = router;
