// import the library version of axios
import axios from "axios";

// create a version of axios with useful defaults
export default axios.create({
    baseURL: "http://ec2-3-9-13-137.eu-west-2.compute.amazonaws.com/",
    headers: {
        // make sure we get JSON back
        Accept: "application/json",
    },
});