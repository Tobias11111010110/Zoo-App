import React from 'react';
import {TransformWrapper, TransformComponent} from "react-zoom-pan-pinch";
import {Button} from "react-bootstrap";

export default function Map() {
    return (
        <TransformWrapper>
            {({zoomIn, zoomOut, resetTransform, ...rest}) => (
                <React.Fragment>
                    <div className="tools">
                        <Button onClick={() => zoomIn()}>+</Button>
                        <Button onClick={() => zoomOut()}>-</Button>
                        <Button onClick={() => resetTransform()}>Zurücksetzen</Button>
                    </div>
                    <TransformComponent>
                        <img src="/map-zoo.png" alt="Zoo Map" className="max-w-full h-auto"/>
                    </TransformComponent>
                </React.Fragment>
            )}
        </TransformWrapper>
    );
}
