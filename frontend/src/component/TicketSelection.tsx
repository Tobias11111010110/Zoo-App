import React, {useState} from 'react';
import {Ticket, TicketDurationType, TicketType} from "../model/Ticket";
import TicketCard from "./TicketDisplay";
import {Button} from "react-bootstrap";
import AddTicketPopUp from "./AddTicketPopUp";
import Header from "./Header";
import {HeaderModel} from "../model/HeaderModel";
import {createTicket, mergeDuplicateTickets, removeTicket} from "../service/TicketService";

export default function TicketSelection() {
    const [tickets, setTickets] = useState<Ticket[]>([])
    const [isAddingTicket, setAddingTicket] = useState(false);

    const handleClose = () => setAddingTicket(false);
    const handleShow = () => setAddingTicket(true);

    const onSave = (ticketType: TicketType, date: Date, ticketDurationType: TicketDurationType) => {
        setTickets(
            mergeDuplicateTickets([...tickets, createTicket(ticketType, date, ticketDurationType)])
        )
        handleClose()
    }

    const onDelete = (ticket: Ticket) => {
        setTickets(
            removeTicket(tickets, ticket)
        )
    }

    function getAllTicketCards() {
        return tickets.map(ticket =>
            <TicketCard key={ticket.amount + ticket.price + ticket.type + ticket.durationType + ticket.date}
                        ticket={ticket}
                        onDelete={onDelete}/>
        )
    }

    return (
        <div className={"ticket-selection"}>
            <Header headerModel={HeaderModel.TICKET}/>
            <div className={"flex justify-center"}>
                <Button variant="success" onClick={handleShow}>
                    +
                </Button>
            </div>
            <AddTicketPopUp isAddingTicket={isAddingTicket} handleClose={handleClose} onSave={onSave}/>
            <br/>
            {getAllTicketCards()}
        </div>
    );
}
