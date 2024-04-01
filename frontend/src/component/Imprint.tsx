import Header from "./Header";
import {HeaderModel} from "../model/HeaderModel";
import {Button, Card} from "react-bootstrap";

export default function Imprint() {
    return (
        <div>
            <Header headerModel={HeaderModel.IMPRINT}/>
            <Card className={"w-[80%] m-auto p-10 shadow-lg"}>
                <h1>Impressum</h1>
                <p>Stand: 26. März 2024</p>
                <h3 id="m3">Verantwortlicher</h3>
                <p>
                    Zoo Zürich AG<br/>Zürichbergstrasse 221<br/> 8044 Zürich,
                    Schweiz
                </p>
                E-Mail-Adresse: <a href="">zoo@zoo.ch</a><br/>
                Telefonnummer: 044 254 25 00
            </Card>
            <div className={"flex justify-center p-10"}>
                <Button href={"/"}>Zurück</Button>
            </div>
        </div>
    )
}
