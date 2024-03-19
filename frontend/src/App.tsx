import React from 'react';
import Header from "./component/Header";
import {HeaderModel} from "./model/header-model";

export default function App() {
    return (
        <div>
            <Header headerType={HeaderModel.TICKET}/>
        </div>
    );
}
