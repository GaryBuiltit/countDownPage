import React from "react";
import "../../src/preview.css"
import Clock from "./count_down_page_components/Clock";

export default function Preview (props){
   
    let BgType = props.type;
    let bgPic = "url(" + props.pic + ")";
    // let logo = "url(" + props.logo + ")";

    const bg = ()=>{
        if (BgType === "color") {
          return{ backgroundColor: props.color}
        } else if(BgType === "image"){
           return {backgroundImage: bgPic}
        }
    }

    return (
        <div className="flex flex-col items-center w-4/5">
            <h1 className="text-3xl font-bold pb-6">Page Preview</h1>
        <div style={bg()} id="preview" className="w-full border">
        <img src={props.logo}/>
        <h1 className="text-4xl py-5 font-bold">{props.headline}</h1>
        <p className="pb-4 text-2xl max-w-md text-center">{props.tagline}</p>
            <Clock/>
        </div>
        </div>
    )
}