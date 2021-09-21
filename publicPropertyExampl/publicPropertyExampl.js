import { LightningElement, api } from 'lwc';

export default class PublicPropertyExampl extends LightningElement {
    @api recordId;
    @api objectApiName;
}