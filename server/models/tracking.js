var env = process.env.NODE_ENV || 'development';
var Sequelize = require('sequelize');
const config = require(`${__dirname}/../config/db_config.json`)[env];

const db = new Sequelize(
	config.database, config.username, config.password, config
);

const SiteTracking = db.define('sitetracking', {
    sitenumber: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    updated_time: {
        type: Sequelize.DATE,
        allowNull: true
    },
    status: {
        type: Sequelize.STRING,
        allowNull: true
    },
    pending_files: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

SiteTracking.insertSiteInfo = function (site) {
	return SiteTracking.create(site);
}

SiteTracking.updateSiteStatus = function(sitenum) {
	console.log('updateSiteStatus-', sitenum );
    return SiteTracking.update(
        { updated_time: new Date() },
        { where: { sitenumber: sitenum } }
    );
}

SiteTracking.updateSitePendingFiles = function(sitenum, pstatus, filename) {
	console.log('updateSitePendingFiles-', sitenum, filename  );
    return SiteTracking.update(
		{ 
			status: pstatus,
			pending_files: filename
		},
        { where: { sitenumber: sitenum } }
    );
}


SiteTracking.getSiteInfo = function (sitenum) {
	return SiteTracking.findOne({
		where: {
			sitenumber: sitenum
		}
	});
}


let _conn;

const connect = () => {
	if (_conn) return _conn;
	_conn = db.authenticate();
	return _conn;
};

const siteModelSync = () => {
	return connect()
		.then(() => {
			console.log('Site DB Authenticate successfully.');
			return db.sync().then(() => {
				SiteTracking.findAll().then(sites => {
					if (sites.length == 0) {
						SiteTracking.create({
							sitenumber: 55571,
                            updated_time: new Date(),
                            status: 'Completed',
                            pending_files: ''
						});
						SiteTracking.create({
							sitenumber: 59947,
                            updated_time: new Date(),
                            status: 'Completed',
                            pending_files: ''
						});
						SiteTracking.create({
							sitenumber: 59990,
                            updated_time: new Date(),
                            status: 'Completed',
                            pending_files: ''
						});
					}
				});
			});;
		})
		.catch(err => {
			console.error('Unable to connect to the database:', err);
		});
};


module.exports = {
	siteModelSync,
	models: {
		SiteTracking
	}
};




