import axios from "axios";

// Since SWAPI is completely open API, we don`t need any key
const instance = axios.create({
    baseURL: 'https://swapi.dev/api/'
})

export const charactersAPI = {
    getCharacters() {
        return instance
            .get(`people/`) // If status code 200, we will get characters
            .then(response => response)
    }
}