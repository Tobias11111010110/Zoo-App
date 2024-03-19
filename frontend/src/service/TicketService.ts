import {Ticket, TicketDurationType, TicketType} from "../model/Ticket";

export function createTicket(ticketType: TicketType, date: Date, ticketDurationType: TicketDurationType) {
    return new Ticket(getTicketPrize(ticketType, ticketDurationType), 1, ticketDurationType, ticketType, date);
}

function getTicketPrize(ticketType: TicketType, ticketDurationType: TicketDurationType): number {
    let prize = 0;
    if (ticketDurationType === TicketDurationType.WHOLE_DAY) {
        prize += 15
    } else {
        prize += 9
    }

    if (ticketType === TicketType.CHILD) {
        prize /= 1.2
    }

    return prize
}
