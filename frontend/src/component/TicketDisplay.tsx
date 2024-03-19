import {Ticket} from "../model/Ticket";
import React from "react";
import {Card} from "react-bootstrap";

export default function TicketDisplay(
    {ticket}: { ticket: Ticket }
) {
    return (
        <div className={"flex justify-center"}>
            <Card style={{width: '22rem'}}>
                <Card.Body>
                    <Card.Title>{ticket.amount}x {ticket.type} {ticket.durationType} Ticket</Card.Title>
                    <Card.Text>
                        {ticket.price} CHF
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}