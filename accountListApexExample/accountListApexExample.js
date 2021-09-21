import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountControllerLWC.getAccountList';

export default class AccountListApexExample extends LightningElement {

    @wire(getAccountList) accountList;

}