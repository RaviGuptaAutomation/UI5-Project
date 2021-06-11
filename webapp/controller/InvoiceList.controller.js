sap.ui.define(["sap/ui/core/mvc/Controller",
"sap/ui/model/json/JSONModel",
"sap/ui/model/Filter",
"sap/ui/model/FilterOperator"
],function(Controller,JSONModel,Filter,FilterOperator){
    "use strict";

    return Controller.extend("com.app.secondapp.controller.InvoiceList",{

        onInit: function(){

            var oViewModel =  new JSONModel({
                currency: "EUR"
            });

            this.getView().setModel(oViewModel,"invoiceViewModel");
        },
        onFilterInvoices: function(oEvent){
            var aFilter = [];
            var sQuery = oEvent.getParameter("query");

            if(sQuery){
                aFilter.push(new Filter("ProductName",FilterOperator.Contains,sQuery));
            }else if(!sQuery){
               // alert("2");
            }else{

            }
            // filter binding
            var oList = this.byId("invoiceList");
            var oBinding = oList.getBinding("items");
            oBinding.filter(aFilter);

        },
        onPress: function(oEvent){
            var oItem = oEvent.getSource();
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("detail",{
                invoicePath: window.encodeURIComponent(oItem.getBindingContext("invoice").getPath().substr(1))
            }
            );

        }


    });

});