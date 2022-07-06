import "./Profile.css";
import CatsFavorites from "../organisms/CatsFavorites/CatsFavorites";
import UploadPicture from "../molecules/UploadPicture/UploadPicture";

const Profile = () => {
    return(
        <section className="profileContainer">
            <CatsFavorites />
            <UploadPicture />
        </section>
    );
}

export default Profile;