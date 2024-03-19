import {Button, Modal} from "react-bootstrap";
import React, {useState} from "react";
import {TicketDurationType, TicketType} from "../model/Ticket";

export default function AddTicketPopUp({isAddingTicket, handleClose, onSave}: {
    isAddingTicket: boolean,
    handleClose: () => void,
    onSave: (ticketType: TicketType, date: Date, time: TicketDurationType) => void
}) {
    const [ticketType, setTicketType] = useState<TicketType>(TicketType.ADULT)
    const [date, setDate] = useState<Date>(new Date())
    const [ticketDurationType, setTicketDurationType] = useState<TicketDurationType>(TicketDurationType.MORNING)

    return (
        <Modal className={"flex mt-24"} show={isAddingTicket} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Ticket Hinzufügen</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input type={"date"} onChange={event => setDate(new Date(event.target.value))}/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Abbrechen
                </Button>
                <Button variant="success" onClick={() => onSave(ticketType, date, ticketDurationType)}>
                    Speichern
                </Button>
            </Modal.Footer>
        </Modal>
    )
}