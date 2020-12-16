import axios from '../axios-config';
import {nextAnimal} from './state';
//import animals from '../dummy-data/animals.json';

export const getAnimals = () => {
    return (dispatch) => {
        axios.get('animals').then(({ data }) => {
            dispatch({ type: "STORE_ANIMALS", data: data.data });
        });
        //dispatch({ type: "STORE_ANIMALS", data: animals.data });
    }
}

export const patchGame = liked => {
    return (dispatch, getState) => {
        let {currentAnimal, animals} = getState();
        let id =  animals[currentAnimal].id
        axios.patch(`animals/${id}/likes`, {
            liked: liked
        }).then(({ data }) => {
            dispatch(nextAnimal());
        });
    }
}