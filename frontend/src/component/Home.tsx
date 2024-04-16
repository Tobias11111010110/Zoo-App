import Header from "./Header";
import {HeaderModel} from "../model/HeaderModel";
import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
        <>
            <Header headerModel={HeaderModel.START}/>
            <div className={"flex justify-center"}>
                <h1>Willkommen</h1>
                <Button className={"absolute bottom-14"} onClick={() => navigate("/tickets")}>Tickets</Button>
                <Button className={"absolute bottom-24"} onClick={() => navigate("/map")}>Karte</Button>
            </div>
            <a href={"/data-protection"} className={"absolute bottom-0 p-2 left-0"}>Datenschutz</a>
            <a href={"/imprint"} className={"absolute bottom-0 p-2 right-0"}>Impressum</a>
        </>
    )
}