import rhino from '../../assets/rhino.jpg';

const Profile = ({name, age, bio, species}) => (
    <div className="card w-50">
        <img className="card-img-top" src={ rhino } alt="Big Frank"/>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{species}</p>
            <p className="card-text">{age}</p>
            <p className="card-text">{bio}</p>
        </div>
    </div>
);

export default Profile;