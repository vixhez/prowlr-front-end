const Profile = ({ name, age, bio, species, image_url }) => {
    return (
        <div className="card w-50">
            <img className="card-img-top" src={image_url} alt={`${name} is a ${species}`} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{species}</p>
                <p className="card-text">{age}</p>
                <p className="card-text">{bio}</p>
            </div>
        </div>
    );
}
export default Profile;