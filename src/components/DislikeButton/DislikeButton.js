const DislikeButton = ({ patchGame }) => (// pass in dispatch method

    <button
        type="button"
        className="dislike btn btn-danger btn-circle btn-xl"
        onClick={ patchGame }>
  
        <i className="fas fa-times-circle"></i>
    </button>

);

export default DislikeButton;