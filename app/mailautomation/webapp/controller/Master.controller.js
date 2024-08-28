sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("com.mailautomation.controller.Master", {
        onInit: function () {

        },
        onEmailConfigSelect: function (oEvent) {
            this._showTermsDialog();
        },

        _showTermsDialog: function () {
            var oView = this.getView();
            var oDialog = oView.byId("termsDialog");

            if (!oDialog) {
                oDialog = sap.ui.xmlfragment(oView.getId(), "com.mailautomation.fragments.TermsDialog", this);
                if (!oDialog) {
                    MessageToast.show("The TermsDialog fragment could not be loaded.");
                    return;
                }
                oView.addDependent(oDialog);
            }

            oDialog.open();
        },

        onAcceptTermsPress: function () {
            var oView = this.getView();
            var oDialog = oView.byId("termsDialog");

            if (oDialog) {
                oDialog.close();
            }

            this.getOwnerComponent().getRouter().navTo("RouteEmailAccountConfiguration");
        },

        onCancelTermsPress: function () {
            var oDialog = this.getView().byId("termsDialog");

            if (oDialog) {
                oDialog.close();
            }

            MessageToast.show("You need to accept the terms to proceed.");
            this.getOwnerComponent().getRouter().navTo("RouteHomepage");
        },

        onEmailReaderLog: function () {
            this.getOwnerComponent().getRouter().navTo("RouteEmailReaderLog");
        },

        onEmailProcessor: function () {
            this.getOwnerComponent().getRouter().navTo("RouteEmailProcessor");
        },

        onMailBox: function () {
            this.getOwnerComponent().getRouter().navTo("RouteMailBox");
        },

        onEmailReaderPress: function () {
            this.getOwnerComponent().getRouter().navTo("RouteConfiguredMail");
        }
    });
});
