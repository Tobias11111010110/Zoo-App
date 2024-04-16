import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./component/Home";
import TicketSelection from "./component/TicketSelection";
import DataProtection from "./component/DataProtection";
import Imprint from "./component/Imprint";
import Map from "./component/Map";
import Login from "./component/Login";

const Routing = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<Home/>}/>
            <Route path="/tickets" element={<TicketSelection/>}/>
            <Route path="/data-protection" element={<DataProtection/>}/>
            <Route path="/imprint" element={<Imprint/>}/>
            <Route path="/map" element={<Map/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    </BrowserRouter>
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Routing/>
    </React.StrictMode>
);
