/*global QUnit, opaTest*/

sap.ui.define([
	"sap/ui/demo/walkthrough/localService/mockserver",
	"sap/ui/test/opaQunit",
	"./pages/App"
], function (mockserver) {
	"use strict";

	QUnit.module("Navigation");

	opaTest("Deve abrir a caixa de diálogo Olá", function (Given, When, Then) {
		// initialize the mock server
		mockserver.init();

		// Arrangements
		Given.iStartMyUIComponent({
			componentConfig: {
				name: "sap.ui.demo.walkthrough"
			}
		});

		//Actions
		When.onTheAppPage.iPressTheSayHelloWithDialogButton();

		// Assertions
		Then.onTheAppPage.iShouldSeeTheHelloDialog();

		// Cleanup
		Then.iTeardownMyApp();
	});
});
