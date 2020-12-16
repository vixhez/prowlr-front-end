import { connect } from 'react-redux';
import LeaderboardButton from './LeaderboardButton';
import { accessLeaderboard } from "../../data/actions/state";

const mapStateToProps = ({ finished }) => ({
        finished,
});

const mapDispatchToProps = dispatch  => {
        return {
            accessLeaderboard: () => dispatch(accessLeaderboard())
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(LeaderboardButton);