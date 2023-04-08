import axios from "axios";

// Since SWAPI is completely open API, we don`t need any key
const instance = axios.create({
    baseURL: 'https://swapi.dev/api'
})

export const entitiesAPI = {
    getAllEntities(path, page = 1, config) {
        return instance
            .get(`${path}/?page=${page}`,config)
            .then(response => response)
    }
}

export const profileAPI = {
    getProfile(path) {
        return instance
            .get(`${path}`)
            .then(response => response)
    }
}
