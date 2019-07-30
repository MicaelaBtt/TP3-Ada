// Api
const apiKey = '4a2105f3e20ac44007a953c6a7dab7d0';

//pagina actual
let paginaActual = 1;

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
const iconSearch = document.getElementById('iconSearch');


//cantidad de pelis
const numberResults = document.getElementsByClassName('number-results');


// load more
const loadMore = document.getElementsByClassName('load-more');
const loadMoreMore = document.getElementById('button-2');



// MODAL!!!!!!!!!!!!!!!!!
const modalBody = document.getElementById('body');
const modalVisible = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');
const modalTitle = document.getElementById('modal-movie-title');
const modalTagline = document.getElementById('modal-tagline');
const modalPlot = document.getElementById('modal-movie-plot');
const modalGenres = document.getElementById('modal-genres');
const modalDate = document.getElementById('modal-date');
const modalBackground = document.getElementById('modal-background')
const modalPoster = document.getElementById('modal-movie-poster');


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

//ocultar search
const ocultarSearch = () => {
searchContainer.style.display = 'none';
searchInfo.style.display = 'none';
}

//popular
const verPopular = () => {
    fetch
        (`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
        .then(result => result.json())
        .then(data => {

            popularSection.innerHTML = '';

            for (let movie of data.results.slice(0,5)) {
                //titulo y poster
                const popularMovie = movieNode.cloneNode(true);
                popularMovie.children[0].src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                popularMovie.children[1].innerText = movie.title;
                popularSection.appendChild(popularMovie);
                popularMovie.onclick = () => {
                    getMovie(movie.id);
                }
                
            }
            loadMore[0].style.display = 'none';
            loadMoreMore.style.display = 'none';
        
        })
}
verPopular();

//popular 20
const verPopularSolo = () => {
    loadMoreMore.style.display = 'none';
    ocultarSearch();
    ocultarPelis();
    ocultarBanner();
    popular.style.display = 'flex';
    fetch
        (`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${paginaActual}`)
        .then(result => result.json())
        .then(data => {

            popularSection.innerHTML = '';

            for (let movie of data.results) {
                //titulo y poster
                const popularMovie = movieNode.cloneNode(true);
                popularMovie.children[0].src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                popularMovie.children[1].innerText = movie.title;
                popularSection.appendChild(popularMovie);
                popularMovie.onclick = () => {
                    getMovie(movie.id);
                }
                
            }
            viewAll[0].style.display = 'none';
            obtenerCantidadPeliculas(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${paginaActual}`);
            loadMore[0].style.display = 'flex';

           
            const cargarMasPelis = (url) => {
                
                fetch(url) 
                .then(result => result.json())
                    .then(data => {
                
                    for (let movie of data.results) {
                        
                        
                        //titulo y poster
                        const popularMovie = movieNode.cloneNode(true);
                        popularMovie.children[0].src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                        popularMovie.children[1].innerText = movie.title;
                        popularSection.appendChild(popularMovie);
                        popularMovie.onclick = () => {
                            getMovie(movie.id);
                        }
                        
                    }
                        }
                    )
            
            }

            loadMore[0].onclick = () => {
                paginaActual++;
                cargarMasPelis(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${paginaActual}`);
            }
            
        })
}

navPopular.onclick = () => {
    paginaActual = 1; 
    verPopularSolo()
};
viewAll[0].onclick = verPopularSolo;





//topRated
const verTopRated = () => { 
    fetch
        (`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
        .then(result => result.json())
        .then(data => {

            topRatedSection.innerHTML = '';

            for (let movie of data.results.slice(0,5)) {
                //titulo y poster
                const topRatedMovie = movieNode.cloneNode(true);
                topRatedMovie.children[0].src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                topRatedMovie.children[1].innerText = movie.title;
                topRatedSection.appendChild(topRatedMovie);
                topRatedMovie.onclick = () => {
                    getMovie(movie.id);
                }
            }
            loadMore[1].style.display = 'none';
            loadMoreMore.style.display = 'none';
        })
}
verTopRated();


//top-rated 20
const verTopRatedSolo = () => { 
    loadMoreMore.style.display = 'none';
    ocultarSearch();
    ocultarPelis();
    ocultarBanner();
    topRated.style.display = 'flex';
    fetch
        (`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${paginaActual}}`)
        .then(result => result.json())
        .then(data => {

            topRatedSection.innerHTML = '';
            
            for (let movie of data.results) {
                //titulo y poster
                const topRatedMovie = movieNode.cloneNode(true);
                topRatedMovie.children[0].src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                topRatedMovie.children[1].innerText = movie.title;
                topRatedSection.appendChild(topRatedMovie);
                topRatedMovie.onclick = () => {
                    getMovie(movie.id);
                }
            }
            viewAll[1].style.display = 'none';
            obtenerCantidadPeliculas(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${paginaActual}`);
            loadMore[1].style.display = 'flex';
            
            
        
            
            const cargarMasPelis = (url) => {
                fetch(url) 
                .then(result => result.json())
                    .then(data => {
                    for (let movie of data.results) {
                        
                        //titulo y poster
                        const topRatedMovie = movieNode.cloneNode(true);
                        topRatedMovie.children[0].src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                        topRatedMovie.children[1].innerText = movie.title;
                        topRatedSection.appendChild(topRatedMovie);
                        topRatedMovie.onclick = () => {
                            getMovie(movie.id);
                        }
                        
                    }
                        }
                    )
            
            }

            loadMore[1].onclick = () => {
                paginaActual++;
                cargarMasPelis(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${paginaActual}`);
            }
        })
}
navTopRated.onclick = () => {
    paginaActual = 1; 
    verTopRatedSolo()
};
viewAll[1].onclick = verTopRatedSolo;





//verUpComing
const verUpComing = () => {
    fetch
        (`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`)
        .then(result => result.json())
        .then(data => {

            upComingSection.innerHTML = '';

            for (let movie of data.results.slice(0,5)) {
                //titulo y poster
                const upComingMovie = movieNode.cloneNode(true);
                upComingMovie.children[0].src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                upComingMovie.children[1].innerText = movie.title;
                upComingSection.appendChild(upComingMovie);
                upComingMovie.onclick = () => {
                    getMovie(movie.id);
                }
            }
            loadMore[2].style.display = 'none';
            loadMoreMore.style.display = 'none';
        })
}
verUpComing();


//upComing 20
const verUpComingSolo = () => {
    loadMoreMore.style.display = 'none';
    ocultarSearch();
    ocultarPelis();
    ocultarBanner();
    upComing.style.display = 'flex';
    fetch
        (`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=${paginaActual}`)
        .then(result => result.json())
        .then(data => {

            upComingSection.innerHTML = '';

            for (let movie of data.results) {
                
                const upComingMovie = movieNode.cloneNode(true);
                upComingMovie.children[0].src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                upComingMovie.children[1].innerText = movie.title;
                upComingSection.appendChild(upComingMovie);
                upComingMovie.onclick = () => {
                    getMovie(movie.id);
                }
            }
            viewAll[2].style.display = 'none';
            obtenerCantidadPeliculas(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=${paginaActual}`);
            loadMore[2].style.display = 'flex';
            
            
            const cargarMasPelis = (url) => {
                fetch(url) 
                .then(result => result.json())
                    .then(data => {
                  
                    for (let movie of data.results) {
    
                        const upComingMovie = movieNode.cloneNode(true);
                        upComingMovie.children[0].src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                        upComingMovie.children[1].innerText = movie.title;
                        upComingSection.appendChild(upComingMovie);
                        upComingMovie.onclick = () => {
                            getMovie(movie.id);
                        }
                        
                    }
                        }
                    )
            
            }

            loadMore[2].onclick = () => {
                paginaActual++;
                cargarMasPelis(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=${paginaActual}`);
            }
        })
}
navUpComing.onclick = () => {
    paginaActual = 1; 
    verUpComingSolo()
};

viewAll[2].onclick = verUpComingSolo;






//verNowPlaying
const verNowPlaying = () => {
    fetch
        (`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
        .then(result => result.json())
        .then(data => {

            nowPlayingSection.innerHTML = '';

            for (let movie of data.results.slice(0,5)) {
                //titulo y poster
                const nowPlayingMovie = movieNode.cloneNode(true);
                nowPlayingMovie.children[0].src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                nowPlayingMovie.children[1].innerText = movie.title;
                nowPlayingSection.appendChild(nowPlayingMovie);
                nowPlayingMovie.onclick = () => {
    
                    getMovie(movie.id);
                }
            }
            loadMore[3].style.display = 'none';
            loadMoreMore.style.display = 'none';
        })
}
verNowPlaying();


//nowPlaying 20
const verNowPlayingSolo = () => {
    loadMoreMore.style.display = 'none';
    ocultarPelis();
    ocultarBanner();
    nowPlaying.style.display = 'flex';
    fetch
        (`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${paginaActual}`)
        .then(result => result.json())
        .then(data => {

            nowPlayingSection.innerHTML = '';
           
            for (let movie of data.results) {
                //titulo y poster
                const nowPlayingMovie = movieNode.cloneNode(true);
                nowPlayingMovie.children[0].src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                nowPlayingMovie.children[1].innerText = movie.title;
                nowPlayingSection.appendChild(nowPlayingMovie);
                nowPlayingMovie.onclick = () => {
                    getMovie(movie.id);
                }
            }
            viewAll[3].style.display = 'none';
            obtenerCantidadPeliculas(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${paginaActual}`);
            loadMore[3].style.display = 'flex';
         
    
            const cargarMasPelis = (url) => {
                fetch(url) 
                .then(result => result.json())
                    .then(data => {
                    console.log(data);
                    for (let movie of data.results) {
                        
                        //titulo y poster
                        const nowPlayingMovie = movieNode.cloneNode(true);
                        nowPlayingMovie.children[0].src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                        nowPlayingMovie.children[1].innerText = movie.title;
                        nowPlayingSection.appendChild(nowPlayingMovie);
                        nowPlayingMovie.onclick = () => {
                            getMovie(movie.id);
                        }
                        
                    }
                        }
                    )
            
            }

            loadMore[3].onclick = () => {
                paginaActual++;
                cargarMasPelis(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${paginaActual}`);
            }
        })
     
}
navNowPlaying.onclick = () => {
    paginaActual = 1; 
    verNowPlayingSolo()
};
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
                for (let movie of data.results) {
                    //titulo y poster
                    const peliculaBuscada = movieNode.cloneNode(true);
                    if(movie.poster_path) {
                        peliculaBuscada.children[0].src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                    }

                    searchContainer.style.display = 'flex';

                    peliculaBuscada.children[1].innerText = movie.title;
                    peliculaBuscada.onclick = () => {
                        getMovie(movie.id);
                    }
                    searchContainer.appendChild(peliculaBuscada);

                    searchInfo.style.display = 'flex';
                    searchInfo.style.justifyContent = 'space-between';
                    searchContainer.style.flexWrap = 'wrap';
                    searchContainer.style.flexDirection = 'row';
                    peliculaBuscada.style.marginLeft = '20px';
                    searchContainer.style.marginTop = '20px';
                    
                    obtenerCantidadPeliculas(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${textoBusqueda}&page=${paginaActual}`);
                    
                }
                loadMoreMore.style.display = 'flex';

                const cargarMasPelis = (url) => {
                    fetch(url) 
                    .then(result => result.json())
                        .then(data => {
                        console.log(data);
                        for (let movie of data.results) {
                            
                            //titulo y poster
                            const peliculaBuscada = movieNode.cloneNode(true);
                            peliculaBuscada.children[0].src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                            peliculaBuscada.children[1].innerText = movie.title;
                            searchContainer.appendChild(peliculaBuscada);
                            peliculaBuscada.onclick = () => {
                                getMovie(movie.id);
                            }
                            
                        }
                            }
                        )
                
                }
    
                loadMoreMore.onclick = () => {
                    paginaActual++;
                    cargarMasPelis(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${textoBusqueda}&page=${paginaActual}`);
                }
               
            } 
            
        })
}

iconSearch.onclick = () => {
    if (search.value)
    buscarPelicula(search.value);
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





//MODALLLLLLLLLLLLLLLLLLLLLLLL

const getMovie = movieId => {
    modalVisible.style.visibility = 'visible';
    modalBody.classList.add('stop-scrolling');
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => {

            const updateGenres = genresList => {
                modalGenres.innerHTML = genresList.map(genre => genre.name).join(', ');
            }
            updateGenres(data.genres);

            modalTitle.innerHTML = data.title;
            modalTagline.innerHTML = data.tagline;
            modalPlot.innerHTML = data.overview;
            modalDate.innerText = data.release_date;
            modalBackground.style.backgroundImage = `url('https://image.tmdb.org/t/p/w1280/${data.backdrop_path}')`;
            modalPoster.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500/${data.poster_path}')`;
           
        })
}
closeModal.onclick = () => {
    modalVisible.style.visibility = 'hidden';
    modalBody.classList.remove('stop-scrolling');
}

