const LikeButton = ({ patchGame }) => (

    <button
        type="button"
        className="like btn"
        onClick={patchGame}
    >
        <i className="bone fas fa-bone"></i>
    </button>


);

export default LikeButton;

// btn-success btn-circle btn-xl