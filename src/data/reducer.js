const setAnimalState = (state, action) => ({
  ...state,
  animals: action.data,
  loaded: true,
});

const incrementAnimal = (state) => ({
  ...state,
  currentAnimal: state.currentAnimal += 1
});

const reducer = (state, action) => {
    switch (action.type) {
      case "STORE_ANIMALS": return setAnimalState(state, action);

      case "INCREMENT_ANIMAL": return incrementAnimal(state);
      //case "UPDATESTATE": return updateState(state, action)
      default: return state;
    }
  };

  export default reducer