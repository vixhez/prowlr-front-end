const LikeButton = ({ patchGame }) => (

    <button
        type="button"
        className="like vote"
        onClick={patchGame}
    >
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-bone fa-w-20 fa-3x"><path fill="white" d="M598.88 244.56c25.2-12.6 41.12-38.36 41.12-66.53v-7.64C640 129.3 606.7 96 565.61 96c-32.02 0-60.44 20.49-70.57 50.86-7.68 23.03-11.6 45.14-38.11 45.14H183.06c-27.38 0-31.58-25.54-38.11-45.14C134.83 116.49 106.4 96 74.39 96 33.3 96 0 129.3 0 170.39v7.64c0 28.17 15.92 53.93 41.12 66.53 9.43 4.71 9.43 18.17 0 22.88C15.92 280.04 0 305.8 0 333.97v7.64C0 382.7 33.3 416 74.38 416c32.02 0 60.44-20.49 70.57-50.86 7.68-23.03 11.6-45.14 38.11-45.14h273.87c27.38 0 31.58 25.54 38.11 45.14C505.17 395.51 533.6 416 565.61 416c41.08 0 74.38-33.3 74.38-74.39v-7.64c0-28.18-15.92-53.93-41.12-66.53-9.42-4.71-9.42-18.17.01-22.88z" class=""></path></svg>
        {/* <i className="bone fas fa-bone"></i> */}
    </button>


);

export default LikeButton;

// btn-success btn-circle btn-xl