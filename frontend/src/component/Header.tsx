import {HeaderModel} from "../model/header-model";

export default function Header(props: {headerType: HeaderModel}) {

    const content = props.headerType === HeaderModel.START ? (
        <img src="/zooh-logo.png" alt="Header Bild" />
    ) : (
        <p>{props.headerType.valueOf()}</p>
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