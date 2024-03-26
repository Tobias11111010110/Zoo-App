import {Ticket} from "../model/Ticket";
import React from "react";
import {Card} from "react-bootstrap";

export default function TicketDisplay(
    {ticket}: { ticket: Ticket }
) {
    return (
        <div className={"flex justify-center mt-2"}>
            <Card className={"shadow"} style={{width: '22rem'}}>
                <Card.Body>
                    <Card.Title>{ticket.amount}x {ticket.type} {ticket.durationType} Ticket</Card.Title>
                    <Card.Text>
                        Datum: {ticket.date.toISOString().slice(0, 10)}<br/>
                        Preis: {ticket.price} CHF
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}