import axios from "axios";


const instance = axios.create({
    baseURL: 'https://server-site-project-q1s7vyni8-riads-projects-d9eea291.vercel.app/FeaturedFoods',
    // withCredentials: true,

});

const useAxios = () => {
    return instance;
};

export default useAxios;