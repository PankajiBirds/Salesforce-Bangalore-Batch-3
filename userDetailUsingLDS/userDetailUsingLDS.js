import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi'
import USER_ID from '@salesforce/user/Id'

export default class UserDetailUsingLDS extends LightningElement {

    user = {};

    @wire(getRecord, {
        recordId : USER_ID,
        fields : ['User.FirstName','User.LastName','User.Email']
    }) userDetail({data, error}){
        if(data) {
            console.log("^^^ ", data);
            this.user = {
                FirstName : data.fields.FirstName.value,
                LastName : data.fields.LastName.value,
                Email : data.fields.Email.value
            }
        } else {
            console.log("*** ", error);
        }
    }

}