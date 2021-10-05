import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';

export default class CreateAccountUsingLDS extends LightningElement {
    
    handleSave() {
        
        var details = this.template.querySelectorAll(".forInput");

        var fields = {
            Name : details[0].value,
            Email__c : details[1].value
        }

        createRecord({apiName : 'Account', fields}).then(result => {
            alert(JSON.stringify(result));
        }).catch(error => {
            alert(JSON.stringify(error));
        });
    }

}