import { LightningElement, wire } from 'lwc';
import { registerListener, fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class Subscriber extends LightningElement {

    @wire(CurrentPageReference) pageRef;

    message;
    userDetail = {};

    connectedCallback() {
        registerListener("sendMessage", this.displayMessage, this);        
    }

    displayMessage(message) {        
        this.message = message;
    }

    displayUserInfo(detail) {        
        this.userDetail =  JSON.parse(JSON.stringify(detail));
        console.log(this.userDetail);
    }

    handleSubscribe() {
        registerListener("sendUserInfo", this.displayUserInfo, this);
    }

    handleSendToPublisher() {

        var data = {
            FirstName : "Anirudha",
            LastName : "Kumar",
            Email : "ani.kumar@gmail.com",
            Contact : 9089786756,
            Dob : "27-09-2001"
        }

        fireEvent(this.pageRef, "sendDetail", data);

    }
}