// Import connect React-Redux
import { connect } from "react-redux";
// Import state action
import { nextProfile } from '../../data/actions/state';
// Import wrapped file 
import DislikeButton from './DislikeButton';

// Map dispatch method to prop
const mapDispatchToProps = dispatch => {
    return {
        nextProfile: () => dispatch(nextProfile())
    }
}

export default connect(null, mapDispatchToProps)(DislikeButton);