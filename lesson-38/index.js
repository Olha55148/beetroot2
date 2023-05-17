// const API = 'https://api.themoviedb.org/3/movie/popular/?api_key=3161d86f8003576fbd22dc8afa80834b';
// const getData = (url) => {
//     return fetch(url)
//     .then((res) => res.json())
//     .then((data) => data);

// };

// const getData = (url) => {
//     return fetch(url)
//     .then((res) => res.json())
//     .then((posts) => posts);
// }



// const displayMovies = async () => {

// const data = await fetch(API) 
//    .then((res) => res.json())
//     .then((data) => data)
// console.log(data) 
// }
// displayMovies()


// fetch (API)
// .then(Response => Response.json())
// .then(data => {
//     data.forEach(movies => document.body.appendChild(getBlogPosts(movies)));

// });
// function getBlogPosts(movies) {
//     const blogPost = document.createElement('div');
// const title = document.createElement('h5');
// const description = document.createElement('p');
// title.innerText = movies.title;
// description.innerText = movies.body;
// blogPost.appendChild(title);
// blogPost.appendChild(description);
// return blogPost;
// };

// const getPosts = async () => {
//     const data = await getData(API + 'movies');
//     console.log(data)
//     data.forEach(movies => {
//         document.body.appendChild(getBlogPosts(movies)) 
//     });
// };
// getPosts();

// function getBlogPosts(movies) {
   
//     const blogPost = document.createElement('div');
//     blogPost.classList.add('card-body');
//     const title = document.createElement('h5');
//     title.classList.add('card-title');

//     const description = document.createElement('p');
//     description.classList.add('card-text');
//     const link = document.createElement('a');
// link.href = './post.html?id=' + movies.id;  
// link.classList.add('btn', 'btn-primary');

  
//    link.textContent = 'Go ahead'

    
//     title.innerText = movies.title;
//     description.innerText = movies.body;
//     blogPost.appendChild(title);
//     blogPost.appendChild(description);
//     blogPost.appendChild(document.createElement('hr'));
//     blogPost.appendChild(link); 
//     return blogPost;

// }

// function getBlogPosts(movies)
// const blogPost = document.createElement('div');
// const title = document.createElement('h5');
// const description = document.createElement('p');
// fetch(API)
// .then((res) => res.json())
// .then((data) => console.log(data))

// const getData = (url) => {
//     return fetch(url)
//     .then((res) => res.json())
//     .then((posts) => console.log(posts));
// }
// posts.forEach(post => document.body.appendChild(getBlogPosts(post)))


// const displMovies = async () => {
//     const movies = await fetch(API)
//     .then((res) => res.json())
//     .then((data) => data.results);
//     console.log(movies)



// import {getData, API} from "./utiles/utiles.js";

// const getPosts = async () => {
//     const posts = await getData(API);
//     console.log(posts)
//     posts.forEach(post => {
//         document.body.appendChild(getBlogPosts(post)) 
//     })
// }
// getPosts();


// function getBlogPosts(post) {
   
//     const blogPost = document.createElement('div');
//     blogPost.classList.add('card-body');
//     const title = document.createElement('h5');
//     title.classList.add('card-title');

//     const description = document.createElement('p');
//     description.classList.add('card-text');
//     const link = document.createElement('a');
// link.href = './post.html?id=' + post.id;  
// link.classList.add('btn', 'btn-primary');

  
//    link.textContent = 'Go ahead'

    
//     title.innerText = post.title;
//     description.innerText = post.body;
//     blogPost.appendChild(title);
//     blogPost.appendChild(description);
//     blogPost.appendChild(document.createElement('hr'));
//     blogPost.appendChild(link); 
//     return blogPost;

// }
// const API_KEY = 'api_key= 3161d86f8003576fbd22dc8afa80834b';
// const BASE_URL = 'https://api.themoviedb.org/3';
// const API_URL = BASE_URL + '/discover/movie?' + API_KEY;
// const searchURL = BASE_URL + '/search/movie?' + API_KEY;
// const API_search = 'https://api.themoviedb.org/3/search/movie?api_key=3161d86f8003576fbd22dc8afa80834b';
// const API_movies = 'https://api.themoviedb.org/3/discover/movie?api_key=3161d86f8003576fbd22dc8afa80834b';
// const API_popular = 'https://api.themoviedb.org/3/popular/movie?api_key=3161d86f8003576fbd22dc8afa80834b';
// const getData = (url) => {
//    return fetch(url)
// .then((res) => res.json())
// .then((data) => data); 
//  }
//  const renderMovies = (movies) => {
//     movies.forEach(element => {
//         const div = document.createElement('div');
//         div.innerText = element.original_title;
//         document.body.appendChild(div)
//     });
//  }
 

// async function getMovies () {
//     let movies = [];
//     let url = API_movies;
//     while(url){
//          const data = await getData (url);
//    url = data.next;
//    console.log(data)
//    movies = [...movies, ...data.results]
//     }
//     .then((res) => res.json())
//     .then((data) => data.results);
//     console.log(movies)
//     movies.map((item) => {
//  console.log(item)
//     });
//    renderMovies(movies);
// };
// getMovies();








// document.addEventListener("DOMContentLoaded", () => {
//     document.querySelector("#searchForm").addEventListener("submit", (e) => {
//       e.preventDefault();
//       let searchText = document.querySelector("#searchText").value;
//       getMovies(searchText);
//     });
//   });
//   // Get function
//   function get(url) {
//     return fetch(url)
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         return data;
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
  
//   function getMovies(searchText) {
//     //make request to api using axios
//     // Make a request for a user with a given ID
//     get(
//       "https://api.themoviedb.org/3/search/movie?api_key=98325a9d3ed3ec225e41ccc4d360c817&language=en-US&query=" +
//         searchText
//     )
//       .then(function (response) {
//         let movies = response.results;
//         console.log(movies);
//         let output = "";
//         movies.forEach((movie) => {
//           output += `
//             <div class="col-md-3">
//               <div class="well text-center">
//                 <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
//                 <h5>${movie.title}</h5>
//                 <a onclick="movieSelected('${movie.id}')" class="btn btn-primary" href="#">Movie Details</a>
//               </div>
//             </div>
//           `;
//         });
//         document.querySelector("#movies").innerHTML = output;
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
  
//   function movieSelected(id) {
//     window.location = "movie.html?movieId=" + id;
//     return false;
//   }
  
//   function getMovie() {
//     const queryString = window.location.search;
//     const urlParams = new URLSearchParams(queryString);
  
//     let movieId = urlParams.get("movieId");
  
//     // Make a request for a user with a given ID
//     get(
//       "https://api.themoviedb.org/3/movie/" +
//         movieId +
//         "?api_key=98325a9d3ed3ec225e41ccc4d360c817"
//     )
//       .then(function (response) {
//         let movie = response;
//         console.log(movie);
  
//         let output = `
//           <div class="row">
//             <div class="col-md-4">
//               <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="thumbnail">
//             </div>
//             <div class="col-md-8">
//               <h2>${movie.title}</h2>
//               <ul class="list-group">
//                 <li class="list-group-item"><strong>Genre:</strong> ${movie.genres[0].name}, ${movie.genres[1].name}</li>
//                 <li class="list-group-item"><strong>Released:</strong> ${movie.release_date}</li>
//                 <li class="list-group-item"><strong>Rated:</strong> ${movie.vote_average}</li>
//                 <li class="list-group-item"><strong>Runtime:</strong> ${movie.runtime} min.</li>
//                 <li class="list-group-item"><strong>Production Companies:</strong> ${movie.production_companies[0].name} min.</li>
//               </ul>
//             </div>
//           </div>
//           <div class="row">
//             <div class="well">
//               <h3>Plot</h3>
//               ${movie.overview}
//               <hr>
//               <a href="http://imdb.com/title/${movie.imdb_id}" target="_blank" class="btn btn-primary">View IMDB</a>
//               <a href="index.html" class="btn btn-default">Go Back To Search</a>
//             </div>
//           </div>
//       `;
  
//         document.querySelector("#movie").innerHTML = output;
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
// const getData = (url) => {
//     return fetch(API_URL)
//     .then((res) => res.json())
//     .then((data) => data);
// }
//     const dispayPlanets = async () => {
//         let planets =  [];
//         let url = API_URL;
//         while (url) {
//             const data = awaite getData(url);
//             url = data.next;
//             console.log(data)
//             planets = [...planets, ...data.results];

            
//         }console.log(planets);
//     }; 
//     dispayPlanets();



// getMovies(API_URL);

// function getMovies(url) {

//     lastUrl = url;
//     fetch(url).then(res => res.json()).then(data => {
//         if (data.results.length !== 0) {
//             showMovies(data.results);
//             currentPage = data.page;
//             nextPage = currentPage + 1;
//             prevPage = currentPage - 1;
//             totalPages = data.total_pages;

//             current.innerText = currentPage;

//             if (currentPage <= 1) {
//                 prev.classList.add('disabled');
//                 next.classList.remove('disabled')
//             } else if (currentPage >= totalPages) {
//                 prev.classList.remove('disabled');
//                 next.classList.add('disabled')
//             } else {
//                 prev.classList.remove('disabled');
//                 next.classList.remove('disabled')
//             }

//             tagsEl.scrollIntoView({ behavior: 'smooth' })

//         } else {
//             main.innerHTML = `<h1 class="no-results">No Results Found</h1>`
//         }

//     })

// }

// function showMovies(data) {
//     main.innerHTML = '';

//     data.forEach(movie => {
//         const { title, poster_path, overview, id } = movie;
//         const movieEl = document.createElement('div');
//         movieEl.classList.add('movie');
//         movieEl.innerHTML = `
//              <img src="${poster_path ? IMG_URL + poster_path : "http://via.placeholder.com/1080x1580"}" alt="${title}">
//             <div class="movie-info">
//                 <h3>${title}</h3>
//             </div>
//             <div class="overview">
//                 <h3>Overview</h3>
//                 ${overview}
//                 <br/> 
//                 <button class="know-more" id="${id}">Know More</button
//             </div>
        
//         `

//         main.appendChild(movieEl);

//         document.getElementById(id).addEventListener('click', () => {
//             console.log(id)
//             openNav(movie)
//         })
//     })
// }

// Actor Form


// const displayMovies = async () => {

//     const data = await fetch(API_movies) 
//        .then((res) => res.json())
//         .then((data) => data)
//     console.log(data) 
//     }
//     displayMovies()



// const API_KEY = "3161d86f8003576fbd22dc8afa80834b";
// const API_popular = 'https://api.themoviedb.org/3/discover/movie?api_key=3161d86f8003576fbd22dc8afa80834b';


// const API_KEY = "api_key=3161d86f8003576fbd22dc8afa80834b";
// const API_URL_POPULAR =
// 'https://api.themoviedb.org/3/discover/movie?api_key=3161d86f8003576fbd22dc8afa80834b';
// const API_URL_SEARCH =
// 'https://api.themoviedb.org/3/keyword/%D0%B1%D0%BE%D0%B5%D0%B2%D0%B8%D0%BA/movies?include_adult=false&language=en-US&page=1';
// getMovies(API_URL_POPULAR);

// async function getMovies(url) {
//   const resp = await fetch(url, {
//     headers: {
//         'Authorization': API_KEY,
//         'accept': 'application/json',
//     }   
//   });
//   const respData = await resp.json();
//   console.log(respData)
//   showMovies(respData);
// }; 

// function getClassByRate(vote_average) {
//   if (vote_average >= 7) {
//     return "green";
//   } else if (vote_average > 5) {
//     return "orange";
//   } else {
//     return "red";
//   }
// }

// function showMovies(data) {
//   const moviesEl = document.querySelector(".movies");

//   // Очищаем предыдущие фильмы
//   document.querySelector(".movies").innerHTML = "";

//   data.results.forEach((movie) => {
//     const movieEl = document.createElement("div");
//     movieEl.classList.add("movie");
//     movieEl.innerHTML = `
//         <div class="movie__cover-inner">
//         <img
//           src="${movie.poster_path}"
//           class="movie__cover"
//           alt="${movie.title}"
//         />
//         <div class="movie__cover--darkened"></div>
//       </div>
//       <div class="movie__info">
//         <div class="movie__title">${movie.title}</div>
//         <div class="movie__category">${movie.genre_ids.map(
//           (genre) => ` ${genre.genre_ids}`
//         )}</div>
//         ${
//           movie.vote_average &&
//           `
//         <div class="movie__average movie__average--${getClassByRate(
//           movie.vote_average
//         )}">${movie.vote_average}</div>
//         `
//         }
//       </div>
//         `;
//     moviesEl.appendChild(movieEl);
//   });
// }

// const form = document.querySelector("form");
// const search = document.querySelector(".header__search");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const apiSearchUrl = `${API_URL_SEARCH}${search.value}`;
//   if (search.value) {
//     getMovies(apiSearchUrl);

//     search.value = "";
//   }
// });


const API_KEY = "8c8e1a50-6322-4135-8875-5d40a5420d86";
const API_URL_POPULAR =
  "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";
const API_URL_SEARCH =
  "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";

getMovies(API_URL_POPULAR);

async function getMovies(url) {
  const resp = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": API_KEY,
    },
  });
  const respData = await resp.json();
  showMovies(respData);
}

function getClassByRate(vote) {
  if (vote >= 7) {
    return "green";
  } else if (vote > 5) {
    return "orange";
  } else {
    return "red";
  }
}

function showMovies(data) {
  const moviesEl = document.querySelector(".movies");

  // Очищаем предыдущие фильмы
  document.querySelector(".movies").innerHTML = "";

  data.films.forEach((movie) => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
        <div class="movie__cover-inner">
        <img
          src="${movie.posterUrlPreview}"
          class="movie__cover"
          alt="${movie.nameRu}"
        />
        <div class="movie__cover--darkened"></div>
      </div>
      <div class="movie__info">
        <div class="movie__title">${movie.nameRu}</div>
        <div class="movie__category">${movie.genres.map(
          (genre) => ` ${genre.genre}`
        )}</div>
        ${
          movie.rating &&
          `
        <div class="movie__average movie__average--${getClassByRate(
          movie.rating
        )}">${movie.rating}</div>
        `
        }
      </div>
        `;
    moviesEl.appendChild(movieEl);
  });
}

const form = document.querySelector("form");
const search = document.querySelector(".header__search");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const apiSearchUrl = `${API_URL_SEARCH}${search.value}`;
  if (search.value) {
    getMovies(apiSearchUrl);

    search.value = "";
   
  } else if(search.value === undefined) {
    moviesEl.innerHTML ='yscddd'
  }
});





