import { LightningElement, wire } from 'lwc';
import { getPicklistValues, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi'

export default class DisplayPicklistValue extends LightningElement {

    rating = {}
    type = {}
    SLA__c = {}

    @wire(getPicklistValues, {
        recordTypeId : "012000000000000AAA",
        fieldApiName : "Account.Rating"
    }) ratingValues({data, error}) {
        if(data) {
            console.log("!$! : ", data);
            this.rating = data.values;
        } else {
            console.log("!@! : ", error);
        }
    } 

    @wire(getPicklistValuesByRecordType, {
        recordTypeId : "012000000000000AAA",
        objectApiName : "Account"
    }) accountPicklistValues({data, error}) {
        if(data) {
            console.log("*@* : ", data);
            this.type = data.picklistFieldValues.Type.values;
            this.SLA__c = data.picklistFieldValues.SLA__c.values;
        } else {
            console.log("#@# : ", error);
        }
    }

}