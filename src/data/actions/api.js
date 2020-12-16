import axios from '../axios-config';
//import animals from '../dummy-data/animals.json';

export const getAnimals = () => {
    return (dispatch) => {
        axios.get('animals').then(({ data }) => {
            dispatch({ type: "STORE_ANIMALS", data: data.data });
        });
        //dispatch({ type: "STORE_ANIMALS", data: animals.data });
    }
}

export const patchGame = animal => {
    return (dispatch, getState) => {
        let id = getState().id;
        axios.patch(`animals/${id}/likes`, {
            animal: animal
        }).then(({ data }) => {
            dispatch({ type: "UPDATE", data: data.data });
        });
    }
}