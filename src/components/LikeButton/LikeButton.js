const LikeButton = ({ nextAnimal }) => (
  
    <div>
        <button
            type="button"
            className="btn btn-success btn-circle btn-xl"
            onClick={ nextAnimal }> 
            <i className="fas fa-bone"></i>
        </button>
    </div>
    
);

export default LikeButton;

