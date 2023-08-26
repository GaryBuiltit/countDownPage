import React, {useState} from "react";
import "../main.css";
import Preview from "../components/Preview";
import BgSection from "../components/BgSection";



const Create = ()=>{
    const [BgState, setBgState] = useState("color")
    const [bgColor, setBgColor] = useState("")
    const [bgPic, setPic] = useState("")
    
    const bgTypeHandler = (bgType)=>{
        setBgState(bgType);
    }

    const bgColorHandler = (bgColor)=>{
      setBgColor(bgColor);
    }

    const bgPicHandler = (bgPic)=>{
        setPic(bgPic);
    }

    const previewHandler = ()=>{
        if (BgState === "color") {
            return <Preview type={BgState} color={bgColor}/>
        } else if(BgState === "image"){
            return <Preview type={BgState} pic= {bgPic}/>
        }
    }
    

    return (
        <div className="flex flex-row items-center justify-evenly h-full space-x-3">
        <div className="flex items-center">
        <form id="new-page-form" className="flex flex-col border-solid border-2 py-6 px-16 rounded-md space-y-4 bg-white shadow-lg">
            <div id="deadline-section" className="flex flex-col">
            <label htmlFor="date-time" className="font-bold pb-2">Deadline:</label>
                <input id="date-time" name="date-time" type="datetime-local" className=""/>
            </div>
            <BgSection bgTypeHandler={bgTypeHandler} bgColorHandler={bgColorHandler} bgPicHandler={bgPicHandler}/>
            </form>
        </div>
            {previewHandler()}

        </div>
    )
}

export default Create;