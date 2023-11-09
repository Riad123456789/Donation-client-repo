import axios from "axios";


const instance = axios.create({
    baseURL: 'https://y-hxh52ul9g-riads-projects-d9eea291.vercel.app/FeaturedFoods',
    // withCredentials: true,

});

const useAxios = () => {
    return instance;
};

export default useAxios;