import { LightningElement } from 'lwc';

export default class Child extends LightningElement {

    handleSend(){
        var dataArray = this.template.querySelectorAll(".forInput");
        
        var data = {
            "name" : dataArray[0].value,
            "contact" : dataArray[1].value,
            "email" : dataArray[2].value,
            "city" : dataArray[3].value
        }

        const myEvent = new CustomEvent('simpleevent',{detail : data});

        console.log(data);

        this.dispatchEvent(myEvent);

    }

}