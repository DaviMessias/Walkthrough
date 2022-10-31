sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
], 

function (UIComponent, JSONModel) {
   "use strict";
   return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
      metadata : {
         interfaces: ["sap.ui.core.IAsyncContentCreation"],
         manifest: "json"
      },

      init : function () {
         //chama a função init do pai
         UIComponent.prototype.init.apply(this, arguments);

         // define um modelo de dado
         var objetoCriado = {
            conteudo : {
               nome: "",
            }
         };
         var oModel = new JSONModel(objetoCriado);
         this.setModel(oModel);
      }
   });
});
