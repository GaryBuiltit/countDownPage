import React from "react";
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"


const LogoUpload = ({logoHandler})=>{

    // const [file, setFile] = useState("");

    // function handleFileChange(event) {
    //     setFile(event.target.files[0]);
    // }

   const fileUploader = (file)=>{
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
                   logoHandler(url);
                });
                alert("Upload Complete");
            }
        );

   }

 return (
    <div id="logo-section" className="space-y-2">
            <label htmlFor="logo-input" className="font-bold pb-2">Logo:</label>
                <input type="file" id="logo-input" name="logo-input" onChange={upload =>{
                    fileUploader(upload.target.files[0])

                }}/>
            </div>
 )
}

export default LogoUpload;