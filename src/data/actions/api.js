// import axios from '../axios';
import animal from '../dummy-data/animal.json';

const getAnimal = (id) => {
    return (dispatch) => {
        // axios.get(`/animals/${id}`).then(({ data }) => {
        //     dispatch({ type: "STORE_ANIMAL", data: data });
        // })
        dispatch({ type: "STORE_ANIMAL", data: animal });
    }
}