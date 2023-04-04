import axios from "axios";

// Since SWAPI is completely open API, we don`t need any key
const instance = axios.create({
    baseURL: 'https://swapi.dev/api/'
})

export const charactersAPI = {
    getCharacters(page = 1, config) {
        return instance
            .get(`people/?page=${page}`, config) // If status code 200, we will get characters
            .then(response => response)
    },
}

export const profileAPI = {
    getProfile(id, section) {
        return instance
            .get(`${section}/${id}`)
            .then(response => response)
    }
}

export const planetsApi = {
    getPlanets(page = 1, config) {
        return instance
            .get(`planets/?page=${page}`, config)
            .then(response => response)
    },
}

export const speciesApi = {
    getSpecies(page = 1, config) {
        return instance
            .get(`species/?page=${page}`, config)
            .then(response => response)
    },
}