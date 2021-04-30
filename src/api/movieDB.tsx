import axios from 'axios';

const movieDB=axios.create({
    baseURL:'https://api.themoviedb.org/3/movie',
    params:{
        api_key:'84d2e43bc0e0f6a5fb8455b40b02284e',
        language:'es-ES',
    }
})

export default movieDB;