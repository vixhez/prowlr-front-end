import { connect } from 'react-redux';
import LikeButton from './LikeButton';
import { patchGame } from "../../data/actions/api";

const mapStateToProps = ({ currentAnimal }) => ({
        currentAnimal,
});

const mapDispatchToProps = dispatch  => {
        return {
    
            patchGame: () => dispatch(patchGame(true))
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);