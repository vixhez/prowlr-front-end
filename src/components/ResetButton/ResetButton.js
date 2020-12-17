const ResetButton = ({ resetApp }) => (

    <button
        type="button"
        className="reset btn btn-success btn-circle btn-xl"
        onClick={ resetApp }
    >
        Wanna swipe again?
    </button>


);

export default ResetButton;