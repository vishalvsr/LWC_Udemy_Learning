import { LightningElement } from 'lwc';

export default class IfElseDemo extends LightningElement {

    isTom = true;
    isJerry = false;

    showTom(){
        this.isTom = true;
        this.isJerry = false;
    }

    showJerry(){
        this.isTom = true;
        this.isJerry = false;
    }
}