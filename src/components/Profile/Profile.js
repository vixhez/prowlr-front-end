const Profile = ({ name, age, bio, species, image_url }) => {
    return (
        <div className="card">
            <img className="card-img-top" src={image_url} alt={`${name} is a ${species}`} />
            <div className="card-body">
                <h5 className="name card-title">{name}</h5>
                <div className="species_and_age">
                    <p className="species card-text">{species}</p>
                    <p className="age card-text">{age}</p>
                </div>
                <p className="bio card-text">{bio}</p>
            </div>
        </div>
    );
}
export default Profile;