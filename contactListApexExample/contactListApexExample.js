import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactControllerLWC.getContactList';

export default class ContactListApexExample extends LightningElement {

    contactList;

    @wire(getContactList) getAllContact({error, data}){
        if(data) {
            console.log("## : " + data);
            this.contactList = data;
        } else {
            console.log("$$ : " + error);
        }
    }

}