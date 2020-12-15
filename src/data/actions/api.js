import axios from '../axios-config';
//import animals from '../dummy-data/animals.json';

export const getAnimals = () => {
    return (dispatch) => {
        axios.get('/api/animals').then(({ data }) => {
            dispatch({ type: "STORE_ANIMALS", data: data.data });
        });
        //dispatch({ type: "STORE_ANIMALS", data: animals.data });
    }
}