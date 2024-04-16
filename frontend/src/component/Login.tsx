import Header from "./Header";
import {HeaderModel} from "../model/HeaderModel";
import {Button, Card, Form} from "react-bootstrap";
import {useState} from "react";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function submitLogin(email: string, password: string) {
        fetch('http://localhost:5000/login', {
            method: 'POST',
            body: JSON.stringify({email: email, password: password})
        }).then(r => {
            switch (r.status) {
                case 200:
                    console.log('login success');
                    break;
                case 401:
                    console.log('credentials are wrong');
                    break;
                case 500:
                    console.log('server down');
                    break;
            }
        })
    }

    return (
        <>
            <Header headerModel={HeaderModel.LOGIN}/>
            <div className={"flex justify-center align-middle"}>
                <Card className={"w-[50%] p-10 shadow-lg"}>
                    <h2>Bitte geben Sie ihre Anmeldedaten an:</h2>
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
                        <Button variant="primary" type="submit" onClick={() => submitLogin(email, password)}>
                            Login
                        </Button>
                    </Form>
                </Card>
            </div>
        </>
    )
}