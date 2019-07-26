// Api
const apiKey = '4a2105f3e20ac44007a953c6a7dab7d0';


//Apis
//apiPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
//apiPelisPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${paginaActual}`
//apiTopRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
//apiPelisTopRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${paginaActual}`
//apiUpcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`
//apiPelisUpcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=${paginaActual}`
//apiNowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`
//apiPelisNowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${paginaActual}`
//apiSearchResult = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${textoBusqueda}&page=${paginaActual}`
//apiinfoPelicula = `https://api.themoviedb.org/3/movie/${peliculaId}?api_key=${apiKey}`


const paginaActual = 1;

// traer elementos a ocultarse
const homeContainer = document.getElementsByClassName('home1'); 
//secciones 5 pelis
const popularSection = document.getElementById('popular-section');
const topRatedSection = document.getElementById('top-rated-section');
const upComingSection = document.getElementById('upcoming-section');
const nowPlayingSection = document.getElementById('now-playing-section');

// elementos miniatura peliculas
const movieNode = document.getElementById('movie-node');
const movieTitle = document.getElementById('movie-title');
const moviePoster = document.getElementById('movie-poster');

// 20 pelis
const popular = document.getElementById('popular');
const topRated = document.getElementById('top-rated');
const upComing = document.getElementById('upcoming');
const nowPlaying = document.getElementById('now-playing');

//botones menu
const navPopular = document.getElementById('popular-nav');
const navTopRated = document.getElementById('top-rated-nav');
const navUpComing = document.getElementById('upcoming-nav');
const navNowPlaying = document.getElementById('now-playing-nav');

//ocultar banner 
const banner = document.getElementById('banner');

// view all
const viewAll = document.getElementsByClassName('view-all');

//search
const search = document.getElementById('search');
const searchContainer = document.getElementById('search-container');
const searchInfo = document.getElementById('search-info');
const searchImgSection = document.getElementById('search-img-section');

//cantidad de pelis
const numberResults = document.getElementsByClassName('number-results');

//ocultar banner
const ocultarBanner = () => {
    banner.style.display = 'none';
}

//ocultar otras pelis
const ocultarPelis = () => {

    popular.style.display = 'none';
    topRated.style.display = 'none';
    upComing.style.display = 'none';
    nowPlaying.style.display = 'none';
}



//popular
const verPopular = () => {
    fetch
        (`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
        .then(result => result.json())
        .then(data => {

            popularSection.innerHTML = '';

            for (i = 0; i < 5; i++) {
                //titulo y poster
                const popularMovie = movieNode.cloneNode(true);
                popularMovie.children[0].src = `https://image.tmdb.org/t/p/w500${data.results[i].poster_path}`;
                popularMovie.children[1].innerText = data.results[i].title;
                popularSection.appendChild(popularMovie);
                
            }
        })
}
verPopular();

//popular 20
const verPopularSolo = () => {
    ocultarPelis();
    ocultarBanner();
    popular.style.display = 'flex';
    fetch
        (`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${paginaActual}`)
        .then(result => result.json())
        .then(data => {

            popularSection.innerHTML = '';

            for (i = 0; i < 20; i++) {
                //titulo y poster
                const popularMovie = movieNode.cloneNode(true);
                popularMovie.children[0].src = `https://image.tmdb.org/t/p/w500${data.results[i].poster_path}`;
                popularMovie.children[1].innerText = data.results[i].title;
                popularSection.appendChild(popularMovie);
                
            }
            viewAll[0].style.display = 'none';
            obtenerCantidadPeliculas(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${paginaActual}`);
        })
}
navPopular.onclick = verPopularSolo;
viewAll[0].onclick = verPopularSolo;


//topRated
const verTopRated = () => { 
    fetch
        (`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
        .then(result => result.json())
        .then(data => {

            topRatedSection.innerHTML = '';

            for (i = 0; i < 5; i++) {
                //titulo y poster
                const topRatedMovie = movieNode.cloneNode(true);
                topRatedMovie.children[0].src = `https://image.tmdb.org/t/p/w500${data.results[i].poster_path}`;
                topRatedMovie.children[1].innerText = data.results[i].title;
                topRatedSection.appendChild(topRatedMovie);
            }
        })
}
verTopRated();


//top-rated 20
const verTopRatedSolo = () => { 
    ocultarPelis();
    ocultarBanner();
    topRated.style.display = 'flex';
    fetch
        (`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${paginaActual}}`)
        .then(result => result.json())
        .then(data => {

            topRatedSection.innerHTML = '';
            
            for (i = 0; i < 20; i++) {
                //titulo y poster
                const topRatedMovie = movieNode.cloneNode(true);
                topRatedMovie.children[0].src = `https://image.tmdb.org/t/p/w500${data.results[i].poster_path}`;
                topRatedMovie.children[1].innerText = data.results[i].title;
                topRatedSection.appendChild(topRatedMovie);
            }
            viewAll[1].style.display = 'none';
            obtenerCantidadPeliculas(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${paginaActual}}`);
        })
}
navTopRated.onclick = verTopRatedSolo;
viewAll[1].onclick = verTopRatedSolo;


//verUpComing
const verUpComing = () => {
    fetch
        (`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`)
        .then(result => result.json())
        .then(data => {

            upComingSection.innerHTML = '';

            for (i = 0; i < 5; i++) {
                //titulo y poster
                const upComingMovie = movieNode.cloneNode(true);
                upComingMovie.children[0].src = `https://image.tmdb.org/t/p/w500${data.results[i].poster_path}`;
                upComingMovie.children[1].innerText = data.results[i].title;
                upComingSection.appendChild(upComingMovie);
            }
        })
}
verUpComing();


//upComing 20
const verUpComingSolo = () => {
    ocultarPelis();
    ocultarBanner();
    upComing.style.display = 'flex';
    fetch
        (`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=${paginaActual}`)
        .then(result => result.json())
        .then(data => {

            upComingSection.innerHTML = '';

            for (i = 0; i < 20; i++) {
                //titulo y poster
                const upComingMovie = movieNode.cloneNode(true);
                upComingMovie.children[0].src = `https://image.tmdb.org/t/p/w500${data.results[i].poster_path}`;
                upComingMovie.children[1].innerText = data.results[i].title;
                upComingSection.appendChild(upComingMovie);
            }
            viewAll[2].style.display = 'none';
            obtenerCantidadPeliculas(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=${paginaActual}`);
        })
}
navUpComing.onclick = verUpComingSolo;
viewAll[2].onclick = verUpComingSolo;


//verNowPlaying
const verNowPlaying = () => {
    fetch
        (`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
        .then(result => result.json())
        .then(data => {

            nowPlayingSection.innerHTML = '';

            for (i = 0; i < 5; i++) {
                //titulo y poster
                const nowPlayingMovie = movieNode.cloneNode(true);
                nowPlayingMovie.children[0].src = `https://image.tmdb.org/t/p/w500${data.results[i].poster_path}`;
                nowPlayingMovie.children[1].innerText = data.results[i].title;
                nowPlayingSection.appendChild(nowPlayingMovie);
            }
        })
}
verNowPlaying();


//nowPlaying 20
const verNowPlayingSolo = () => {
    ocultarPelis();
    ocultarBanner();
    nowPlaying.style.display = 'flex';
    fetch
        (`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${paginaActual}`)
        .then(result => result.json())
        .then(data => {

            nowPlayingSection.innerHTML = '';

            for (i = 0; i < 20; i++) {
                //titulo y poster
                const nowPlayingMovie = movieNode.cloneNode(true);
                nowPlayingMovie.children[0].src = `https://image.tmdb.org/t/p/w500${data.results[i].poster_path}`;
                nowPlayingMovie.children[1].innerText = data.results[i].title;
                nowPlayingSection.appendChild(nowPlayingMovie);
            }
            viewAll[3].style.display = 'none';
            obtenerCantidadPeliculas(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${paginaActual}`);
        })
}
navNowPlaying.onclick = verNowPlayingSolo;
viewAll[3].onclick = verNowPlayingSolo;


//search
const buscarPelicula = textoBusqueda => {
    searchContainer.innerHTML = '';
    ocultarPelis();
    ocultarBanner();
    fetch
        (`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${textoBusqueda}&page=${paginaActual}`)
        .then(result => result.json())
        .then(data => {
    
            if (data.results.length >= 1) {
                for (i = 0; i < 20; i++) {
                    //titulo y poster
                    const peliculaBuscada = movieNode.cloneNode(true);
                    if(data.results[i].poster_path) {
                        peliculaBuscada.children[0].src = `https://image.tmdb.org/t/p/w500${data.results[i].poster_path}`;
                    }

                    searchContainer.style.display = 'flex';

                    peliculaBuscada.children[1].innerText = data.results[i].title;
                    searchContainer.appendChild(peliculaBuscada);

                    searchInfo.style.display = 'flex';
                    searchInfo.style.justifyContent = 'space-between';
                    searchContainer.style.flexWrap = 'wrap';
                    searchContainer.style.flexDirection = 'row';
                    peliculaBuscada.style.marginLeft = '20px';
                    searchContainer.style.marginTop = '20px';

                    obtenerCantidadPeliculas(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${textoBusqueda}&page=${paginaActual}`);
                }
            } 
            
        })
}

search.onkeypress = (event) => {
    if (event.keyCode === 13) {
        if (search.value)
        buscarPelicula(search.value);
    }
}



// cantidad de pelis
const obtenerCantidadPeliculas = (url) => {
    fetch(url)
    .then(result => result.json())
        .then(data => {
            for (i=0; i<5; i++){
                numberResults[i].style.display = 'flex';
                numberResults[i].innerText = `${data.total_results} results`;
            }
        })
}


