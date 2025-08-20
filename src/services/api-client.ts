import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key : '2f2a113bf942449da0a56a45c32e3de1'
    }
})