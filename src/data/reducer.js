const setAnimalState = (state, action) => ({
    ...state,
    animals: action.data,
    loaded: true,
});

const incrementAnimal = (state) => ({
  ...state,
  currentAnimal: state.currentAnimal += 1
});

const finishedProfiles = (state) => {
    if (state.currentAnimal === state.animals.length) {
    return {
      ...state,
      finished: true,
      currentAnimal: 0 
    };
  }
    return state; 
}

// this is working in terms of changing state of finished to true, but is then throwing an error instead of showing leaderboard

const reducer = (state, action) => {
    switch (action.type) {
      case "STORE_ANIMALS": return setAnimalState(state, action);

      case "INCREMENT_ANIMAL": return finishedProfiles(incrementAnimal(state));
      //case "UPDATESTATE": return updateState(state, action)
      default: return state;
    }
};

export default reducer;