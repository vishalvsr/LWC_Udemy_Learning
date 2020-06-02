import { LightningElement, api } from 'lwc';

export default class MetaExample extends LightningElement {
    @api message;
    @api pageno;
}