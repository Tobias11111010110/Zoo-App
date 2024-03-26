import {HeaderModel} from "../model/HeaderModel";

export default function Header(props: { headerModel: HeaderModel }) {
    const content = props.headerModel === HeaderModel.START ? (
        <img src="/zooh-logo.png" alt="Header Bild" width={200} />
    ) : (
        <p>{props.headerModel}</p>
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