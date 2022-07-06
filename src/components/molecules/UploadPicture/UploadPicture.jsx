import "./UploadPicture.css";
import DND from "../../atoms/DND/DND";

const UploadPicture = () => {
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
                    onClick={null}
                >
                    Upload
                </button>
            </div>
        </section>
    );
}

export default UploadPicture;