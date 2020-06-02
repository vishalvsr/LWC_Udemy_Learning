import { LightningElement} from 'lwc';

export default class PropertyDemo extends LightningElement {
    message = 'This is non reactive property';

    handleChange(event){
        this.message = event.target.value;
        console.log(this.message);
    }
}