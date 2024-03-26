import Header from "./Header";
import {HeaderModel} from "../model/HeaderModel";
import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <Header headerModel={HeaderModel.START}/>
            <div className={"flex justify-center"}>
                <h1>Willkommen</h1>
                <Button className={"absolute bottom-2"} onClick={() => navigate("/tickets")}>Tickets</Button>
            </div>
        </div>
    )
}