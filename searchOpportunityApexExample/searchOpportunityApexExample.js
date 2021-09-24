import { LightningElement } from 'lwc';
import opportunityList from '@salesforce/apex/OpportunityControllerLWC.opportunityList';

export default class SearchOpportunityApexExample extends LightningElement {

    opportunityList;

    constructor() {
        super();

        opportunityList().then(result => {            
            this.opportunityList = result;
        }).catch(error => {            
        })
    }

    handleSearch() {
        var searchText = this.template.querySelector(".forInput").value;        
        opportunityList({searchInput : searchText}).then(result => {
            console.log(result);
            this.opportunityList = result;
        }).catch(error => {
            console.log(error);
        })
    }

}