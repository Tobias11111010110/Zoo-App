import React, {useState} from 'react';
import {Ticket, TicketDurationType, TicketType} from "../model/Ticket";
import TicketDisplay from "./TicketDisplay";
import {Button} from "react-bootstrap";
import AddTicketPopUp from "./AddTicketPopUp";
import Header from "./Header";
import {HeaderModel} from "../model/HeaderModel";

export default function TicketSelection() {
    const [tickets, setTickets] = useState<Ticket[]>([new Ticket(12, 2, TicketDurationType.AFTER_NOON, TicketType.ADULT)])
    const [isAddingTicket, setAddingTicket] = useState(false);

    const handleClose = () => setAddingTicket(false);
    const handleShow = () => setAddingTicket(true);

    const onSave = (ticketType: TicketType, date: Date, time: TicketDurationType) => {
        // todo ZooApp-28
        handleClose()
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
            {tickets.map(ticket =>
                <TicketDisplay ticket={ticket}/>
            )}
        </div>
    );
}
