using { ust.rajavardhan.reddy.db.master, ust.rajavardhan.reddy.db.transaction } from '../db/datamodel';
using { ust.rajavardhan.reddy.cds } from '../db/CDSViews';
 
 
service CatalogService @(path: 'CatalogService', requires: 'authenticated-user') {
 
    entity ProductSet as projection on master.product;
    entity BusinessPartnerSet as projection on master.businesspartner;
    entity BusinessAddressSet as projection on master.address;
    entity POs @(odata.draft.enabled: true) as projection on transaction.purchaseorder;
    function largestOrder() returns array of  POs;
    //definition of the function
    function getOrderDefaults() returns POs;
    entity POItems as projection on transaction.poitems;
    // entity OrderItems as projection on cds.CDSViews.ItemView;
    // entity Products as projection on cds.CDSViews.ProductView;
 
}