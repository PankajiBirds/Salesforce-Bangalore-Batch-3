import { LightningElement, wire } from 'lwc';
import { fireEvent, registerListener } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class Publisher extends LightningElement {

    @wire(CurrentPageReference) pageRef;

    employeeData = {}

    connectedCallback() {
        registerListener("sendDetail", this.displayData, this);
    }

    handleSendMessage() {
        fireEvent(this.pageRef, "sendMessage", "Message from publisher component");
    }

    handleSendUserInfo() {
        var data = this.template.querySelectorAll(".forInput");        
        var detail = {
            name : data[0].value,
            email : data[1].value,
            phone : data[2].value
        }        

        fireEvent(this.pageRef, "sendUserInfo", detail);
    }

    displayData(detail) {
        console.log("## : ", detail);
        this.employeeData = detail;
    }
}