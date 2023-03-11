import axios from "axios";

// Since SWAPI is completely open API, we don`t need any key
const instance = axios.create({
    baseURL: 'https://swapi.dev/api/'
})

export const charactersAPI = {
    getCharacters(page = 1) {
        return instance
            .get(`people/?page=${page}`) // If status code 200, we will get characters
            .then(response => response)
    },
    getCharacterById(id) {
        return instance
            .get(`people/${id}`)
            .then(response => response)
    }
}