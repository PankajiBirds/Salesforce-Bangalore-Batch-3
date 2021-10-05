import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';

export default class AccountListUsingLDS extends LightningElement {

    accountList;
    /*
    @wire(getListUi,{
        "objectApiName" : "Account",
        "listViewApiName" : "AllAccounts"
    }) allAccountList({data, error}){
        if(data) {
            console.log("@@@ ", data);
            this.accountList = data.records.records;
        } else {
            console.log("### ", error);
        }
    }
    */

    @wire(getListUi,{
        "listViewId" : "00B5g00000RNyxLEAT"
    }) allAccountList({data, error}){
        if(data) {
            console.log("@@@ ", data);
            this.accountList = data.records.records;
        } else {
            console.log("### ", error);
        }
    }
}