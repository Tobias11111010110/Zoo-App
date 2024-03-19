import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TicketSelection from "./component/TicketSelection";

const Routing = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<TicketSelection/>}/>
            <Route path="*" element={<TicketSelection/>}/>
        </Routes>
    </BrowserRouter>
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Routing />
    </React.StrictMode>
);
