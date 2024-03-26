import {type} from "node:os";

export class Ticket {
    price: number;
    amount: number;
    durationType: TicketDurationType;
    type: TicketType;
    date: Date;


    constructor(price: number, amount: number, durationType: TicketDurationType, type: TicketType, date: Date) {
        this.price = price;
        this.amount = amount;
        this.durationType = durationType;
        this.type = type;
        this.date = date;
    }
}

export enum TicketType {
    CHILD = "Kind",
    ADULT = "Erwachsen"
}

export enum TicketDurationType {
    MORNING = "Morgen",
    WHOLE_DAY = "Ganzer Tag",
    AFTERNOON = "Nachmittag"
}