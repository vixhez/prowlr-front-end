// MAIN REDUCER
const nextProfile = (state) => ({
    ...state,
    currentAnimal: state.currentAnimal + 1,
})

const setAnimalState = (state, action) => ({
    ...state,
    animals: action.data,
    loaded: true,
});

const reducer = (state, action) => {
    switch (action.type) {
        case "STORE_ANIMALS": return setAnimalState(state, action);
        case "INCREMENT": return nextProfile(state, action)
        default: return state;
    }
};

export default reducer