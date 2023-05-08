export const getData = (url) => {
    return fetch(url)
    .then((res) => res.json())
    .then((posts) => posts);
}
export const API = 'https://jsonplaceholder.typicode.com/';