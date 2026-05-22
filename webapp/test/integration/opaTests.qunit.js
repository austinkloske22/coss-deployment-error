/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["coss/demodeployment/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
