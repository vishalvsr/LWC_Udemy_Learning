import { LightningElement } from 'lwc';

export default class HtmlEventBasic extends LightningElement {

    message = 'Welcome Vishal!!';

    handleOnChange(event){
        const val = event.target.value;
        const lab = event.target.label;

        console.log('Value is '+val +'Label is '+lab);
    }
}