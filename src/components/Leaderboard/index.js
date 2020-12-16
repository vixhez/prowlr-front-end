import { connect } from 'react-redux';
import Leaderboard from './Leaderboard';
import { getLeaderBoard } from '../../data/actions/api';

const mapStateToProps = (state) => {
    const animals = state.animals

    return {
        animals
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getLeaderBoard: () => dispatch(getLeaderBoard()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);