import { useContext } from 'react';
import "./UploadPicture.css";
import DND from "../../atoms/DND/DND";
import AppContext from "../../../context/AppContext";

const UploadPicture = () => {
    
    const {
        files,
        uploadCat
    } = useContext(AppContext);

    return(
        <section className="uploadPicture">
            <h2 className="uploadTitle">Upload your cat's picture</h2>
            <div className="dropContainer">
                <DND />
                <p id="fileName">{/* {isPicture ? "Your Picture was Uploaded!" : null} */}</p>
                <button
                    type="button"
                    id="buttonUpload"
                    className="secondary-btn"
                    onClick={() => uploadCat(files[0])}
                >
                    Upload
                </button>
            </div>
        </section>
    );
}

export default UploadPicture;