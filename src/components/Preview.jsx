import React from "react";
import "../../src/preview.css"
import Clock from "./count_down_page_components/Clock";

export default function Preview (props){
   
    let BgType = props.type;
    let bgPic = "url(" + props.pic + ")"

    const bg = ()=>{
        if (BgType === "color") {
          return{ backgroundColor: props.color}
        } else if(BgType === "image"){
           return {backgroundImage: bgPic}
        }
    }
    // const imageURL = props.image
    return (
        <div className="flex flex-col items-center w-4/5">
            <h1 className="text-3xl font-bold pb-6">Page Preview</h1>
        <div style={bg()} id="preview" className="w-full border">
        <img src="https://firebasestorage.googleapis.com/v0/b/countdown-page-c3e5f.appspot.com/o/bgimages%2Flogoipsum-297.svg?alt=media&token=d64ef49c-2029-4374-814c-dbf74396e22dgs://countdown-page-c3e5f.appspot.com/bgimages/logoipsum-297.svg"/>
        <h1 className="text-4xl py-5 font-bold">Coming Soon</h1>
        <p className="pb-4 text-2xl max-w-md text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu sit amet consectetur adipisicing</p>
            <Clock/>
        </div>
        </div>
    )
}