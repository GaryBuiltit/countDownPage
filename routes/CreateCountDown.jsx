import React, {useState, createContext } from "react";
import "../main.css";
import Preview from "../components/Preview";
import CreatePageForm from "../components/CreateForm"


const Create = ()=>{
    const [BgState, setBgState] = useState("color");
    const [bgColor, setBgColor] = useState("");
    const [bgPic, setPic] = useState("");
    const [logo, setLogo] = useState("https://firebasestorage.googleapis.com/v0/b/countdown-page-c3e5f.appspot.com/o/bgimages%2Flogoipsum-297.svg?alt=media&token=d64ef49c-2029-4374-814c-dbf74396e22dgs://countdown-page-c3e5f.appspot.com/bgimages/logoipsum-297.svg");
    const [headline, setHeadline] = useState("HeadLine Text Hear");
    const [tagline, setTagline] = useState("This is where you tagline goes! Use this section to add whatever text you want to talk more about what you have going on.");
    
    const bgTypeHandler = (bgType)=>{
        setBgState(bgType);
    }

    const bgColorHandler = (bgColor)=>{
      setBgColor(bgColor);
    }

    const bgPicHandler = (bgPic)=>{
        setPic(bgPic);
    }

    const logoHandler = (logo)=>{
        setLogo(logo);
    }

    const headlineHandler = (headline)=>{
        setHeadline(headline);
    }

    const taglineHandler = (tagline)=>{
        setTagline(tagline);
    }


    const previewHandler = ()=>{
        if (BgState === "color") {
            return <Preview type={BgState} color={bgColor} logo={logo} headline={headline} tagline={tagline}/>
        } else if(BgState === "image"){
            return <Preview type={BgState} pic= {bgPic} logo={logo}  headline={headline} tagline={tagline}/>
        }
    }

    return (
        <div className="flex flex-row items-center justify-evenly h-full space-x-3">
            <CreatePageForm  bgTypeHandler={bgTypeHandler} bgColorHandler={bgColorHandler} bgPicHandler={bgPicHandler} logoHandler={logoHandler} taglineHandler={taglineHandler} headlineHandler={headlineHandler}/>
            {previewHandler()}
        </div>
    )
}

export default Create;