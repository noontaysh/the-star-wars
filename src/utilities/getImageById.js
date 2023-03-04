export const getId = (url) => {
    return url.replace('https://swapi.dev/api/people', '').replace(/\//g, '')
}
// Thus, in simple words, we remove the main path, namely https://swapi.dev/api/people,
// and get something like /1/, and because of the extra slashes /id/,
// we use another replace, where we already remove this slashes,
// after which we get a pure number like '1'