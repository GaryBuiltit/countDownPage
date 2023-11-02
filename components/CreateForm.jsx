import React from "react";
import BgSection from "./BgSection";
import LogoUpload from "./logoUpload";

const CreatePageForm = ({bgColorHandler, bgPicHandler, bgTypeHandler, logoHandler, headlineHandler, taglineHandler})=>{

    return (
        <form id="new-page-form" className="flex flex-col border-solid border-2 py-6 px-16 rounded-md space-y-4 bg-white shadow-lg">
           
            <LogoUpload logoHandler={logoHandler}/>
            <div id="headline-section" className="space-y-2 flex flex-col">
            <label htmlFor="headline" className="font-bold pb-2">Headline:</label>
                <input type="text" id="headline" name="headline" onChange={hl=>{
                    headlineHandler(hl.target.value)
                }} className="border rounded"/>
            </div>
            <div id="tagline-section" className="space-y-2 flex flex-col">
            <label htmlFor="tagline" className="font-bold pb-2">Tagline:</label>
                <textarea id="tagline" name="tagline" onChange={tl=>{
                    taglineHandler(tl.target.value);
                }} className="border rounded"/>
            </div>
            <BgSection bgTypeHandler={bgTypeHandler} bgColorHandler={bgColorHandler} bgPicHandler={bgPicHandler}/>
            <div id="deadline-section" className="flex flex-col">
            <label htmlFor="date-time" className="font-bold pb-2">Deadline:</label>
                <input id="date-time" name="date-time" type="datetime-local"/>
            </div>
            </form>
    )
}

export default CreatePageForm;