import { LightningElement } from 'lwc';
import createContact from '@salesforce/apex/ContactControllerLWC.createContact';

export default class CreateContactUsingApex extends LightningElement {

    handleSave() {
        var dataArray = this.template.querySelectorAll(".forInput");

        var data = {
            FirstName : dataArray[0].value,
            LastName : dataArray[1].value,            
            Email : dataArray[2].value,
            Phone : dataArray[3].value
        }

        console.log("%%%% " + data);

        createContact({contact : data}).then(result => {
            console.log("@@## " + result);
            alert(result);
        }).catch(error => {
            console.log("##$$ " + JSON.stringify(error));
        })

    }

}