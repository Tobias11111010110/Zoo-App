import React from 'react';
import {TransformComponent, TransformWrapper} from "react-zoom-pan-pinch";
import {Button} from "react-bootstrap";
import Header from "./Header";
import {HeaderModel} from "../model/HeaderModel";
import BackButton from "./BackButton";

export default function Map() {
    return (
        <>
            <Header headerModel={HeaderModel.MAP}/>
            <TransformWrapper>
                {({zoomIn, zoomOut}) => (
                    <React.Fragment>
                        <div className={"flex justify-center"}>
                            <TransformComponent>
                                <img src="/map-zoo.png" alt="Zoo Map" className="max-w-full h-auto"/>
                            </TransformComponent>
                        </div>
                        <div className="tools flex justify-center space-x-2 mt-3">
                            <Button onClick={() => zoomIn()}>+</Button>
                            <Button onClick={() => zoomOut()}>-</Button>
                        </div>
                    </React.Fragment>
                )}
            </TransformWrapper>
            <div className={"position-absolute bottom-0 left-0 w-full"}>
                <BackButton/>
            </div>
        </>
    );
}
