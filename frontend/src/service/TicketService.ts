import {Ticket, TicketDurationType, TicketType} from "../model/Ticket";

export function createTicket(ticketType: TicketType, date: Date, ticketDurationType: TicketDurationType) {
    return new Ticket(getTicketPrize(ticketType, ticketDurationType), 1, ticketDurationType, ticketType, date);
}

export function mergeDuplicateTickets(tickets: Ticket[]): Ticket[] {
    const uniqueTickets: Ticket[] = [];
    const ticketMap = new Map<string, Ticket>();

    tickets.forEach(ticket => {
        const key = `${ticket.durationType}-${ticket.type}-${ticket.date.toISOString()}`;

        if (ticketMap.has(key)) {
            const existingTicket = ticketMap.get(key)!;
            existingTicket.price += ticket.price;
            existingTicket.amount += ticket.amount;
        } else {
            ticketMap.set(key, ticket);
            uniqueTickets.push(ticket);
        }
    });

    return uniqueTickets;
}

export function removeTicket(tickets: Ticket[], ticket: Ticket): Ticket[] {
    return tickets.reduce((processedTickets, iteratedTicket) => {
        if (iteratedTicket.durationType === ticket.durationType &&
            iteratedTicket.type === ticket.type &&
            iteratedTicket.date.toISOString() === ticket.date.toISOString()) {
            iteratedTicket.amount -= 1
            if (iteratedTicket.amount > 0) {
                processedTickets.push(iteratedTicket)
            }
        } else {
            processedTickets.push(iteratedTicket)
        }
        return processedTickets
    }, [] as Ticket[])
}


function getTicketPrize(ticketType: TicketType, ticketDurationType: TicketDurationType): number {
    let prize = 0
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
