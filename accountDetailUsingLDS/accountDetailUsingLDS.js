import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

export default class AccountDetailUsingLDS extends LightningElement {

    account = {};

    @wire(getRecord, {
        "recordId" : "0015g00000Objh3AAB",
        "fields" : ['Account.Name','Account.Phone','Account.Rating','Account.Email__c']
    }) accountDetail({data, error}){
        if(data) {
            console.log("&&& ", data);
            this.account = {
                Name : data.fields.Name.value,
                Phone : data.fields.Phone.value,
                Email__c : data.fields.Email__c.value,
                Rating : data.fields.Rating.value
            }
        } else {
            console.log("!!! ", JSON.stringify(error));
        }
    }

}