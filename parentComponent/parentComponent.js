import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {

    handleSubmit() {
        var dataArray = this.template.querySelectorAll(".forInput");
        var data = {
            username : dataArray[0].value,
            userid : dataArray[1].value
        }
        
        this.template.querySelector(".childComponent").getInfo({detail : data})
    }

}