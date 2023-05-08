import {getData, API} from "./utiles/utills.js";


// const API = 'https://jsonplaceholder.typicode.com/';
// fetch (`${API}/posts`)
// .then(Response => Response.json())
// .then(posts => {
//     posts.forEach(post => document.body.appendChild(getBlogPosts(post)));
// })


// const getData = (url) => {
//     return fetch(url)
//     .then((res) => res.json())
//     .then((posts) => posts);
// }
// posts.forEach(post => document.body.appendChild(getBlogPosts(post)))

const getPosts = async () => {
    const posts = await getData(API +'posts');
    console.log(posts)
    posts.forEach(post => {
        document.body.appendChild(getBlogPosts(post)) 
    })
}
getPosts();


function getBlogPosts(post) {
   
    const blogPost = document.createElement('div');
    blogPost.classList.add('card-body');
    const title = document.createElement('h5');
    title.classList.add('card-title');

    const description = document.createElement('p');
    description.classList.add('card-text');
    const link = document.createElement('a');
link.href = './post.html?id=' + post.id;  
link.classList.add('btn', 'btn-primary');

  
   link.textContent = 'Go ahead'

    
    title.innerText = post.title;
    description.innerText = post.body;
    blogPost.appendChild(title);
    blogPost.appendChild(description);
    blogPost.appendChild(document.createElement('hr'));
    blogPost.appendChild(link); 
    return blogPost;

}





// const API = 'https://swapi.dev/api/planets/';
// const getData = (url) => {
//     return fetch(API)
//     .then((res) => res.json())
//     .then((data) => data);
// }
//     const dispayPlanets = async () => {
//         let planets =  [];
//         let url = API;
//         while (url) {
//             const data = awaite getData(url);
//             url = data.next;
//             console.log(data)
//             planets = [...planets, ...data.results];

            
//         }console.log(planets);
//     }; 
//     dispayPlanets();

// const API = 'https://jsonplaceholder.typicode.com/posts';
// const getData = (url) => {
//     return fetch(API)
//       .then(response => response.json())
//       .then(data => console.log(data));
// }

// const API = 'https://jsonplaceholder.typicode.com/posts';
// const getData = (url) => {
//     return fetch(API)
//     .then((res) => res.json())
//     .then((json) => console.log (json));
// }



// const getPage = displayPosts();
// getPage.next();
// const createElements = (post) => {
//  const link = document.createElement('a');
// link.href = './post.html?id=' + post.id;  
// link.classList.add('card');
// link.classList.add('w-25');
// const div = document.createElement('div');
// div.classList.add('card-body');
// const h5 = document.createElement('h5');
// h5.classList.add('card-title');
// h5.innerText = post.title;
// const p = document.createElement('p');
// p.classList.add('card-text');
// p.innerText = post.body;
// div.appendChild(h5);
// div.appendChild(p);
// link.appendChild(div);
// return link;


// } 


// const getPosts = async () => {
//     const posts = await getData(API +'posts');
//     console.log(posts)
//     posts.forEach(Element => {
//         blogPost.appendChild(createElement(Element)) 
//     })
// }
// getPosts();
// async function displayPosts () {
//     let url =  API;
//     while (url) {
//         const data = await getData(url);
//         url = data.next;
//         console.log(data)
//         renderPosts(data.results);
//         if (url) {
//             const button = document.querySelectorall('..btn-primary');
//             button.onclick = () => getPage.next();

//         }
//         yield

//     }
// };
// const getPage = displayPosts();
// getPage.next();

