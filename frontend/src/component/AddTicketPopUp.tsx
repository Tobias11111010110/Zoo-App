import {Button, ButtonGroup, Dropdown, Modal} from "react-bootstrap";
import React, {useState} from "react";
import {TicketDurationType, TicketType} from "../model/Ticket";

export default function AddTicketPopUp({isAddingTicket, handleClose, onSave}: {
    isAddingTicket: boolean,
    handleClose: () => void,
    onSave: (ticketType: TicketType, date: Date, time: TicketDurationType) => void
}) {
    const [ticketType, setTicketType] = useState<TicketType>(TicketType.ADULT)
    const [date, setDate] = useState<Date>(new Date())
    const [ticketDurationType, setTicketDurationType] =
        useState<TicketDurationType>(TicketDurationType.WHOLE_DAY)
    const isAdult = () => ticketType === TicketType.ADULT

    return (
        <Modal className={"flex mt-24"} show={isAddingTicket} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Ticket Hinzufügen</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ButtonGroup className={"m-2"}>
                    <Button variant={isAdult() ? "outline-dark" : "secondary"}
                            onClick={() => setTicketType(TicketType.CHILD)}>
                        {TicketType.CHILD}
                    </Button>
                    <Button variant={isAdult() ? "secondary" : "outline-dark"}
                            onClick={() => setTicketType(TicketType.ADULT)}>
                        {TicketType.ADULT}
                    </Button>
                </ButtonGroup>
                <Dropdown className={"m-2"}>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        {ticketDurationType}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item
                            onClick={() => setTicketDurationType(TicketDurationType.MORNING)}>
                            {TicketDurationType.MORNING}
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => setTicketDurationType(TicketDurationType.WHOLE_DAY)}>
                            {TicketDurationType.WHOLE_DAY}
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => setTicketDurationType(TicketDurationType.AFTERNOON)}>
                            {TicketDurationType.AFTERNOON}
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <input className={"m-2"}
                       min={date.toISOString().slice(0, 10)}
                       type={"date"}
                       onChange={event => setDate(new Date(event.target.value))}
                       value={date.toISOString().slice(0, 10)}
                />
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