const DislikeButton = ({ patchGame }) => (// pass in dispatch method

    <button
        type="button"
        className="dislike btn "
        onClick={ patchGame }>
  
        <i className="circle fas fa-times-circle"></i>
    </button>

);

export default DislikeButton;

// btn-danger btn-circle btn-xl