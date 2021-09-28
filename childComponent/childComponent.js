import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api
    username;
    @api
    userId;

    @api
    getInfo(data) {
        console.log(JSON.stringify(data));
        alert(data.detail.username);
        this.username = data.detail.username;
        this.userId = data.detail.userid;
    }

}




// childComponent               // camel case
// child-component              // kebab case