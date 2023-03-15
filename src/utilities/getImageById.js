export const getId = (url, section) => {
    return url.replace(`https://swapi.dev/api/${section}`, '').replace(/\//g, '')
}
// Thus, in simple words, we remove the main path, namely https://swapi.dev/api/'name of section',
// and get something like /1/, and because of the extra slashes /id/,
// we use another replace, where we already remove this slashes,
// after which we get a pure number like '1'