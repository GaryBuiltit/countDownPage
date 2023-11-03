import React from "react";
import Sidebar from "../components/Sidebar";
import "../main.css";
import { Outlet } from "react-router-dom";



const DashBoard = ()=>{

    return (
        <div className="flex flex-row h-screen">
            <Sidebar/>        
        <div className="flex-1 bg-defaultGray">
            <Outlet/>
        </div>
        </div>
    )
}

export default DashBoard;