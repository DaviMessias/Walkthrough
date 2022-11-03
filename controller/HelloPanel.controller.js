sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
 ], 
 
 function (Controller, MessageToast, Fragment) {
    "use strict";
 
    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {


       exibirBotao: function () {
          // lê a mensagem do modelo i18n 
          var oBundle = this.getView().getModel("i18n").getResourceBundle();
          var sRecipient = this.getView().getModel().getProperty("/conteudo/nome");
          var sMsg = oBundle.getText("olaMsg", [sRecipient]);
          // Mostrar mensagem
          MessageToast.show(sMsg);
       },

       aoAbrirDialogo: function() {
            if(!this.pDialog) {
                  this.pDialog = this.loadFragment({
                        name: "sap.ui.demo.walkthrough.view.HelloDialog"
                  });
            }
            this.pDialog.then(function(oDialog){
                  oDialog.open();
            });
         },

         aoFecharDialogo: function(){
            this.byId("helloDialog").close();
         },
    });
 });