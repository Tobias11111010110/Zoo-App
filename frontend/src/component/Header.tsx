import {HeaderModel} from "../model/header-model";

export default function Header(props: { headerModel: HeaderModel }) {

    const content = props.headerModel === HeaderModel.START ? (
        <img src="/zooh-logo.png" alt="Header Bild"/>
    ) : (
        <p>{props.headerModel.valueOf()}</p>
    );

    return (
        <div>
            <div className={"flex justify-center text-4xl mt-4"}>
                {content}
            </div>
            <hr/>
        </div>
    )
}