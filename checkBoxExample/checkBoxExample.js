import { LightningElement } from 'lwc';

export default class CheckBoxExample extends LightningElement {
    hobbiesOptions = [
        {label : 'Playing', value : 'playing'},
        {label : 'Reading', value : 'reading'},
        {label : 'Sleeping', value : 'sleeping'}
    ]

    defaultHobbies = ['playing', 'sleeping'];    

    handleHobbiesChange(e) {
        this.defaultHobbies = e.detail.value;
    }
}