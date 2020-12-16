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

const update = (state, action)=> {
  return{
    ...state,
    ...action.data,
    liked: state.liked,
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE": return update (state, action);

    case "STORE_ANIMALS": return setAnimalState(state, action);

    case "INCREMENT_ANIMAL": return incrementAnimal(state);

    default: return state;
  }
};

export default reducer
