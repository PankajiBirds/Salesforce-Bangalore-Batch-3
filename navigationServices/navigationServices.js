import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils';

export default class NavigationServices extends NavigationMixin(LightningElement) {
    handleHomePage() {
        this[NavigationMixin.Navigate]({
            type : 'standard__namedPage',
            attributes : {
                pageName : 'home'
            }
        })
    }

    handleChatterPage() {
        this[NavigationMixin.Navigate]({
            type : 'standard__namedPage',
            attributes : {
                pageName : 'chatter'
            }
        })
    }

    handleAccountList() {
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes : {
                objectApiName : 'Account',
                actionName : 'list'
            },
            state : {
                filterName : '00B5g00000RNyxREAT'
            }
        })
    }

    handleNewAccount() {
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes : {
                objectApiName : 'Account',
                actionName : 'new'
            }
        })
    }

    handleEditAccount() {
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes : {
                objectApiName : 'Account',
                actionName : 'edit',
                recordId : '0015g00000NjaLpAAJ'
            }
        })
    }

    handleViewAccount() {
        this[NavigationMixin.Navigate]({
            type : 'standard__recordPage',
            attributes : {
                objectApiName : 'Account',
                actionName : 'view',
                recordId : '0015g00000NjaLpAAJ'
            }
        })
    }

    handleOpenGoogle() {
        this[NavigationMixin.Navigate]({
            type : 'standard__webPage',
            attributes : {
                url : 'https://www.google.com/'
            }
        })
    }

    handleApexExample() {
        this[NavigationMixin.Navigate] ({
            type : 'standard__navItemPage',
            attributes : {
                apiName : 'Apex_Example'
            }
        })
    }

    handleNewAccountWithValue() {
        const data = encodeDefaultFieldValues({
            Name : 'Navigation Account',
            Rating : 'Hot',
            Phone : '9090907865'
        })

        this[NavigationMixin.Navigate] ({
            type : 'standard__objectPage',
            attributes : {
                objectApiName : 'Account',
                actionName : 'new'
            },
            state : {
                defaultFieldValues : data
            }
        })
    }
}