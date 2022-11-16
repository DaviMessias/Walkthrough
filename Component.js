sap.ui.define([ 
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "sap/ui/Device"
], function (UIComponent, JSONModel, Device) {
   "use strict";
   
   return UIComponent.extend("sap.ui.demo.walkthrough.Component", {

         metadata: {
                  interfaces: ["sap.ui.core.IAsyncContentCreation"],
                  manifest: "json"
         },

         init: function () {
               //chama a função init do pai
               UIComponent.prototype.init.apply(this, arguments);

               // define um modelo de dado
               var oData = {
                     conteudo : {
                           nome: "Davi",
                     }
               };

               var oModel = new JSONModel(oData);
               this.setModel(oModel);

               // define o modelo do dispositivo


               var oDeviceModel = new JSONModel(Device);
               oDeviceModel.setDefaultBindingMode("OneWay");
               this.setModel(oDeviceModel, "device");

               //cria as visualizações com base no url/hash
               this.getRouter().initialize();

         },

         getContentDensityClass : function () {
               if (!this._sContentDensityClass) {
                        if (!Device.support.touch) {
                                 this._sContentDensityClass = "sapUiSizeCompact";
                        } else {
                                 this._sContentDensityClass = "sapUiSizeCozy";
                        }
               }
               return this._sContentDensityClass;
         }

   });
   
});
