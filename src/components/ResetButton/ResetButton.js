const ResetButton = ({ resetApp }) => (

    <div className="resetWrapper">
        <button
            type="button"
            className="reset btn"
            onClick={resetApp}
        >
            Keep Prowling
        </button>
    </div>

);

export default ResetButton;