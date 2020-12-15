// import axios from '../axios';
import animals from '../dummy-data/animals.json';

export const getAnimals = (id) => {
    return (dispatch) => {
        // axios.get(`/animals/${id}`).then(({ data }) => {
        //     dispatch({ type: "STORE_ANIMAL", data: data });
        // })
        dispatch({ type: "STORE_ANIMALS", data: animals.data });
    }
}

// api - data.data