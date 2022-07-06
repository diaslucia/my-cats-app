import "./UploadPicture.css";

const UploadPicture = () => {
    
    return(
        <section className="uploadPicture">
            <h2 className="uploadTitle">Upload your cat's picture</h2>
            <div className="dropContainer">
                <div id="drop">
                    <label id="dropLabel" htmlFor="inputFile">
                        <p id="dropIcon">
                            +
                        </p>
                        <p id="dropText">
                            Drag & Drop an image here
                        </p>
                        <img id="previewImage" src="" alt="preview img" />
                    </label>
                    <input type="file" name="file" id="inputFile"/>
                </div>
                <p id="fileName"></p>
                <button type="button" id="buttonUpload" className="secondary-btn">
                    Upload
                </button>
            </div>
        </section>
    );
}

export default UploadPicture;