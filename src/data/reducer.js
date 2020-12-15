// MAIN REDUCER
const setAnimalState = (state, action) => ({
  ...state,
  animals: action.data,
  loaded: true,
});

const reducer = (state, action) => {
    switch (action.type) {
      case "STORE_ANIMALS": return setAnimalState(state, action);
      //case "UPDATESTATE": return updateState(state, action)
      default: return state;
    }
  };

  export default reducer