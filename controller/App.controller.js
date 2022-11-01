sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"
], 

function (Controller, MessageToast) {
   "use strict";

   return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      
      aoClicarNoBotaoDigaOla : function () {
         // lê a mensagem do modelo i18n
         var oBundle = this.getView().getModel("i18n").getResourceBundle();
         var sRecipient = [this.getView().getModel().getProperty("/conteudo/nome")];

         var sMsg = oBundle.getText("olaMsg", sRecipient);
         // exibe mensagem
         MessageToast.show(sMsg);
      }
   });
});
