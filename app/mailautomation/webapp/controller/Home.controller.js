sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("com.mailautomation.controller.Home", {
        onInit: function () {

        },
        onLoginPress: function () {
            // Get references to the controls
            var oView = this.getView();
            var oUserTypeSelect = oView.byId("userType");
            var sUserType = oUserTypeSelect.getSelectedItem().getText();
        
            // Get the router
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        
            // Navigate based on user type
            if (sUserType === "Admin") {
                oRouter.navTo("split"); // Ensure this matches the name defined in routing
            } else {
                // Handle navigation for other user types if necessary
            }
        },
        
        onForgotPasswordPress: function () {
            // Implement the forgot password logic here
        }
    });
});
