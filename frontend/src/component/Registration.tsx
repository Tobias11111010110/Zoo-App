import React, {useState} from "react";
import {Button, Card, Form, Toast} from "react-bootstrap";
import Header from "./Header";
import {HeaderModel} from "../model/HeaderModel";
import {useNavigate} from "react-router-dom";
import {submitRegistration} from "../service/ApiService";

export default function Registration() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const navigate = useNavigate();

    function submitRegistrationFrom(email: string, password: string) {
        submitRegistration(email, password, () => {
            setToastMessage('Ein Fehler ist aufgetreten.')
            setShowToast(true)
        }, () => {
            navigate('/')
        })
    }

    return (
        <>
            <Header headerModel={HeaderModel.REGISTRATION}/>
            <div className={"flex justify-center align-middle"}>
                <Card className={"w-[50%] p-10 shadow-lg"}>
                    <h2>Bitte geben Sie ihre Daten an:</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email-Adresse</Form.Label>
                            <Form.Control type="email" placeholder="max.mustermann@gmail.com"
                                          onChange={(e) => setEmail(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Passwort</Form.Label>
                            <Form.Control type="password" placeholder="Passwort"
                                          onChange={(value) => setPassword(value.target.value)}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={(event) => {
                            event.preventDefault();
                            submitRegistrationFrom(email, password);
                        }}>
                            Registrieren
                        </Button>
                    </Form>
                </Card>
            </div>
            <Toast show={showToast} onClose={() => setShowToast(false)} delay={3000} autohide className={"right-0"}>
                <Toast.Header>
                    <strong className="me-auto">Hinweis</strong>
                </Toast.Header>
                <Toast.Body>{toastMessage}</Toast.Body>
            </Toast>
        </>
    )
}