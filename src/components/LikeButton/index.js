import { connect } from 'react-redux';
import LikeButton from './LikeButton';
import { nextAnimal } from "../../data/actions/state";

const mapStateToProps = ({ currentAnimal }) => ({
        currentAnimal,
});

const mapDispatchToProps = ( dispatch ) => ({
        nextAnimal: () => dispatch(nextAnimal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);