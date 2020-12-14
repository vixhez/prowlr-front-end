import rhino from '../../assets/rhino.jpg';


const Profile = () => (
    <div className="card w-50">
        <img className="card-img-top" src={ rhino } alt= "Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">Frank</h5>
            <p className="card-text">Beaverhino</p>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
);

export default Profile;