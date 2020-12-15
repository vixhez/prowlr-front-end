import { connect } from "react-redux";
import Profile from './Profile';
//import { patchGame } from '../../data/actions/API';

const mapStateToProps = (state) => {
    const animal = state.animals[state.currentAnimal]

    return {
        name: animal.name,
        age: animal.age,
        bio: animal.bio,
        species: animal.species,
    };
};

export default connect(mapStateToProps)(Profile);