import Header from "./Header";
import {HeaderModel} from "../model/HeaderModel";

export default function Imprint() {
    return (
        <div>
            <Header headerModel={HeaderModel.IMPRINT} />
        </div>
    )
}