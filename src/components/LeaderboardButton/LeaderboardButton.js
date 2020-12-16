const LeaderboardButton = ({ accessLeaderboard }) => (

    <button
        type="button"
        className="btn btn-success btn-circle btn-xl"
        onClick={ accessLeaderboard }
    >
        All swiped out?
    </button>


);

export default LeaderboardButton;