import {Ticket} from "../model/Ticket";
import React from "react";
import {Button, Card} from "react-bootstrap";
import {formatDate} from "../service/UtilFunctions";

export default function TicketDisplay(
    {ticket, onDelete}: { ticket: Ticket, onDelete: (ticket: Ticket) => void }
) {
    return (
        <div className={"flex justify-center mt-2"}>
            <Card className={"shadow"} style={{width: '23rem'}}>
                <Card.Body className="flex justify-between items-center">
                    <div>
                        <Card.Title>{ticket.amount}x {ticket.type} {ticket.durationType} Ticket</Card.Title>
                        <Card.Text>
                            Datum: {formatDate(ticket.date)}<br/>
                            Preis: {ticket.price} CHF
                        </Card.Text>
                    </div>
                    <Button variant="outline-danger" onClick={() => onDelete(ticket)}>
                        X
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}
