import React, {useState} from "react";
import Popup from "reactjs-popup";
import { SketchPicker } from "react-color";
import storage from "../firebase";
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"



const BgSection = ({bgTypeHandler, bgColorHandler, bgPicHandler}) =>{
    const [bgType, setBgType] = useState("color");
    const [bgColor, setBgColor] = useState("#FFFFFF");
    const [percent, setPercent] = useState(0);
    const [file, setFile] = useState("");

    function handleFileChange(event) {
        setFile(event.target.files[0]);
    }

   const fileUploader = ()=>{
        if (!file) {
            alert("Please choose a file first")
        }

        const storageRef = ref(storage, `/bgimages/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
     
                // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                   bgPicHandler(url);
                });
                alert("Upload Complete");
            }
        );

   }

    
    const updateBgChoice = (e)=>{
        const choice = e.target.value;
        choice === "image" ? setBgType("image") : setBgType("color")
        bgTypeHandler(bgType);
    }


return (

    <div id="bg-section" className="flex flex-col">
                <h1 className="font-bold">Background:</h1>
                <div className="flex flex-row">
                <div className="flex flex-row">
                <input onChange={(choice)=>{
                    setBgType(choice.target.value);
                    bgTypeHandler(choice.target.value);
                }} id="image" type="radio" value="image" name="background"/>
                <label htmlFor="image" className="pl-2">Image</label>
                </div>
               <div className="pl-6">
               <input onChange={(choice)=>{
                    setBgType(choice.target.value);
                    bgTypeHandler(choice.target.value);
                }} id="color" type="radio" value="color" name="background" defaultChecked/>
                <label htmlFor="color" className="pl-2">Color</label>
               </div>
                </div>
                {bgType === "color" ? <Popup trigger={<button className="bg-blue-500 mt-3 rounded-md" type="button">Pick Color</button>}>
                <SketchPicker color={bgColor} onChange={pickerColor => {
            setBgColor(pickerColor)
            bgColorHandler(pickerColor.hex)
          }} />
                </Popup> :<Popup modal trigger={ <button type="button" className="bg-blue-500 mt-3 rounded-md">Upload Image</button>}><div className="bg-white border flex flex-col items-center justify-center">
                <input className="p-8" type="file" onChange={handleFileChange}/>
                <div>
                <button className="py-1 px-4 mb-2 bg-blue-500 rounded" onClick={fileUploader}>Upload</button>
                </div>
                </div></Popup>}
               </div>
)
}

export default BgSection;

