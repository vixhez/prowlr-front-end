import { connect } from "react-redux";
import Profile from './Profile';

const mapStateToProps = (state) => {
    const animal = state.animals[state.currentAnimal]

    return {
        ...animal
    };
};

export default connect(mapStateToProps)(Profile);