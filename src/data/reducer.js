import initial from './initial';

// Setting animals to state
const setAnimalState = (state, action) => ({
  ...state,
  animals: action.data,
  loaded: true,
});


//Increment Current Animal
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

const leaderboardReducer = (state) => ({
    ...state,
    finished: true,
})

const reducer = (state, action) => {
  switch (action.type) {
    case "STORE_ANIMALS": return setAnimalState(state, action);

    case "INCREMENT_ANIMAL": return finishedProfiles(incrementAnimal(state));

    case "ACCESS_LEADERBOARD": return leaderboardReducer(state);

    case "RESET_APP": return {
      ...state,
      finished: false,
      currentAnimal: 0,
    }

      //case "UPDATESTATE": return updateState(state, action)
      default: return state;
    }

};

export default reducer;