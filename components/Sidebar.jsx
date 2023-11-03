import React from "react";
import { Link } from "react-router-dom";
import "../main.css"


export default function Sidebar (){
const logo = "https://firebasestorage.googleapis.com/v0/b/countdown-page-c3e5f.appspot.com/o/bgimages%2Flogoipsum-297.svg?alt=media&token=d64ef49c-2029-4374-814c-dbf74396e22d"

    return (
        <aside className="h-screen w-1/6 border-r shadow-md">
        <nav className="flex-col bg-white md:w-full h-screen items-center text-center">
        <div className="flex px-4 py-6">
            <img src={logo} alt="logo"/>
        </div>
        <ul className="space-y-4">
            <li className="font-bold"><Link to={"create/"}>Create Page</Link></li>
            <li className="font-bold"><Link to={"pages/"}>My Pages</Link></li>
        </ul>
        </nav>
    </aside>
    )
}