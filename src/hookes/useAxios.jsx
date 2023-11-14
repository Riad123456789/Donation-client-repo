import axios from "axios";


const instance = axios.create({
    baseURL: 'https://y-roan-one.vercel.app/FeaturedFoods',
    // withCredentials: true,

});

const useAxios = () => {
    return instance;
};

export default useAxios;