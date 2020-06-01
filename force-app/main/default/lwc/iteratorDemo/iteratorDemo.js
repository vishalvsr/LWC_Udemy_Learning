import { LightningElement } from 'lwc';

export default class IteratorDemo extends LightningElement {
    contacts = [
        {
            Id : 1,
            Name : "Vishal Singh",
            Email : "vishal@gmail.com"
        },
        {       
            Id : 2,
            Name : "Anuj Singh",
            Email : "anuj@outlook.com"
        },
        {
            Id : 3,
            Name : "Ankit Singh",
            Email : "ankit@hotmail.com"
        }
    ]
}