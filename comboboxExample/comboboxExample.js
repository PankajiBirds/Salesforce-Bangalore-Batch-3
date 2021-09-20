import { LightningElement } from 'lwc';

export default class ComboboxExample extends LightningElement {

    citysOption = [
        {label : 'Ajmer', value : 'ajmer'},
        {label : 'Jaipur', value : 'jaipur'},
        {label : 'Kota', value : 'kota'},
        {label : 'Bikaner', value : 'Bikaner'}
    ];

    selectedCity = "kota";
    selectedState = "";

    handleCityChange(e) {
        this.selectedCity = e.detail.value;
    }

    get stateOptions() {
        return [
            {label : 'Rajasthan', value : 'rajasthan'},
            {label : 'Karnataka', value : 'karnataka'},
            {label : 'Madhya Pradesh', value : 'MP'}
        ]
    }

    handleStateChange(e) {
        this.selectedState = e.detail.value;
    }
}