import { useState, useEffect, useContext } from "react";
import {useDropzone} from 'react-dropzone';
import "./DND.css";
import AppContext from "../../../context/AppContext";

const DND = () => {
    const [isFile, setIsFile] = useState(false);

    const {
        files,
        setFiles,
    } = useContext(AppContext);

    const {getRootProps, getInputProps} = useDropzone({
        maxFiles:1,
        accept: {
        'image/*': []
        },
        onDrop: acceptedFiles => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })));
        setIsFile(true);
        }
    });
    
    useEffect(() => {
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, []);

    return (
        <section className="container">
            {
                isFile ?
                <div {...getRootProps({className: 'dropzone'})} id="previewImgContainer" key={files[0].name}>
                    <input {...getInputProps()} />
                    <img
                        className="previewImg"
                        src={files[0].preview}
                        onLoad={() => { URL.revokeObjectURL(files[0].preview) }}
                        alt="Cat's Preview"
                    />
                </div>
                :
                <div {...getRootProps({className: 'dropzone'})}>
                    <input {...getInputProps()} />
                    <label className="dropLabel">
                        <p className="dropIcon">+</p>
                        <p className="dropText"> Drag & Drop or Click here to select an image</p>
                        <img
                            style={{display: isFile ? "block" : "none"}}
                            className="previewImage"
                            src=""
                            alt="Cat's Preview"
                        />
                    </label>
                </div>
            }
        </section>
    );
}

export default DND;