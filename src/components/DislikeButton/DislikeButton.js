const DislikeButton = ({ nextAnimal }) => (// pass in dispatch method

    <button
        type="button"
        className="btn btn-danger btn-circle btn-xl"
        onClick={nextAnimal}
    >
        <i className="fas fa-times-circle"></i>
    </button>

);

export default DislikeButton;