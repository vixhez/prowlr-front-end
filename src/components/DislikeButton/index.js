// Import connect React-Redux
import { connect } from "react-redux";
// Import state action
import { nextAnimal } from '../../data/actions/state';
// Import wrapped file 
import DislikeButton from './DislikeButton';

const mapStateToProps = ({ currentAnimal }) => ({
    currentAnimal,
});

// Map dispatch method to prop
const mapDispatchToProps = dispatch => {
    return {
        nextAnimal: () => dispatch(nextAnimal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DislikeButton);