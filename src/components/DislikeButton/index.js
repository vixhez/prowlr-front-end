// Import connect React-Redux
import { connect } from "react-redux";
import { patchGame } from "../../data/actions/api";
// Import state action
// Import wrapped file 
import DislikeButton from './DislikeButton';

const mapStateToProps = ({ currentAnimal }) => ({
    currentAnimal,
});

// Map dispatch method to prop
const mapDispatchToProps = dispatch => {
    return {

        patchGame: () => dispatch(patchGame(false))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DislikeButton);