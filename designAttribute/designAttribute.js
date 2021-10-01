import { LightningElement, api } from 'lwc';

export default class DesignAttribute extends LightningElement {
    @api
    title = "Design Attribute Example";
    @api
    hideShow;
    @api
    city;

    constructor() {
        super();
        this.hideShow = true;
    }

}