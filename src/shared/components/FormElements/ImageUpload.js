import React, { useRef, useState, useEffect } from 'react';
import './ImageUpload.css';
import Button from './Button';
const ImageUpload = props => {

    const [file, setFile] = useState();
    const [previewUrl, setPreviewUrl] = useState();
    const [isValid, setIsValid] = useState();
    const filePickerRef = useRef();


    useEffect(()=>{
        if(!file){
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () =>{
            setPreviewUrl(fileReader.result);
        }
        fileReader.readAsDataURL(file);
    }, [file])

    const pickImageHandler = ()=>{
        filePickerRef.current.click();
    }
    const pickedHandler = event =>{
        let fileIsValid;
        let pickedFile;
        if(event.target.files && event.target.files.length===1){
            pickedFile = event.target.files[0];
            setFile(pickedFile);
            setIsValid(true);
            fileIsValid=true;
        }else{
            setIsValid(false);
            fileIsValid=false;
        }
        props.onInput(props.id, pickedFile, fileIsValid);
        console.log(event.target);
    }

    return (
        <div className="form-control">
            <input ref={filePickerRef} id={props.id} style={{ display: "none" }} type="file" accept=".jpg,.png,.jpeg" onChange={pickedHandler} />
            <div className={`image-upload ${props.center && 'center'}`}>
                <div className="image-upload__preview">
                   {previewUrl&& <img src={previewUrl} altl="Preview" />}
                   {!previewUrl&& <p>Please pick and image.</p>}
                </div>
                <Button type="button" onClick={pickImageHandler}>Pick Image</Button>
            </div>
            {!isValid&&<p>{props.errorText}</p>}
        </div>
    )

}

export default ImageUpload;