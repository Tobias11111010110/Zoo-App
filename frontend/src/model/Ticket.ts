export class Ticket {
    price: number;
    amount: number;
    durationType: TicketDurationType;
    type: TicketType;

    constructor(price: number, amount: number, durationType: TicketDurationType, type: TicketType) {
        this.price = price;
        this.amount = amount;
        this.durationType = durationType;
        this.type = type;
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