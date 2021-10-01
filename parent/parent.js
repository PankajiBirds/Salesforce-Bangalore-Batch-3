import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {

    userDetail = {};

    handleData(data) {
        alert("Hello");
        console.log("$$$ : " , JSON.stringify(data));
        this.userDetail = {
            "name" : data.detail.name,
            "contact" : data.detail.contact,
            "email" : data.detail.email,
            "city" : data.detail.city
        }

        console.log("### : " , this.userDetail);
    }

}