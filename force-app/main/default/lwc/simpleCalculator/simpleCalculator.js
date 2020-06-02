import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {

    num1;
    num2;
    @track result;

    handleChangeEvent(event){
        const val = event.target.value;
        const name = event.target.name;

        if(name === 'num1'){
            this.num1 = val;
        }
        else if(name === 'num2'){
            this.num2 = val;
        }
    }

    doSum(){
        const sum = parseInt(this.num1) + parseInt(this.num2);
        alert(sum);
        this.result = sum;
    }

    doSubs(){
        const sub = parseInt(this.num1) - parseInt(this.num2);
        alert(sub);
        this.result = sub;
    }

    doDiv(){
        const divOut = parseInt(this.num1) / parseInt(this.num2);
        this.result = divOut;
    }

    doMulti(){
        const multiPli = parseInt(this.num1) * parseInt(this.num2);
        this.result = multiPli;
    }

}