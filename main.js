import {muro} from './muro.js';
// import {} from "./rourtes.js";


const rootHtml = document.getElementById('contenedor')
rootHtml.appendChild(muro());

const arrGuarda = []



function creeContainer (data){

  const container = document.createElement('div');
  container.classList.add('containerTarjeta');

  const actores = document.createElement('p');
  actores.textContent = JSON.stringify(data.Actors); 
  actores.classList.add('datos');

  const directores = document.createElement('p');
  directores.textContent = JSON.stringify(data.Director); 
  directores.classList.add('datos');

  const genero = document.createElement('p');
  genero.textContent = JSON.stringify(data.Genre); 
  genero.classList.add('datos');

  const poster = document.createElement('img');
  poster.setAttribute('src', data.Poster);
  poster.classList.add('datos');

  
  container.append(poster, actores, directores, genero);
  rootHtml.append(container);


}

const movieUser = 'http://www.omdbapi.com/?i=tt3896198&apikey=9a39bb87'; // guardianes de la galaxia
const arr = ['http://www.omdbapi.com/?i=tt0258159&apikey=9a39bb87', // siniestro
  'http://www.omdbapi.com/?i=tt0158088&apikey=9a39bb87', // el pianista
  'http://www.omdbapi.com/?i=tt7945050&apikey=9a39bb87',//rancheras
  'http://www.omdbapi.com/?i=tt0235936&apikey=9a39bb87',//merlina
  'http://www.omdbapi.com/?i=tt0117008&apikey=9a39bb87',//matilda
  'http://www.omdbapi.com/?i=tt1245526&apikey=9a39bb87',//red
  'http://www.omdbapi.com/?i=tt11003868&apikey=9a39bb87',//valiente
  'http://www.omdbapi.com/?i=tt0081175&apikey=9a39bb87',// la momia nacional
  'http://www.omdbapi.com/?i=tt0101272&apikey=9a39bb87',//la familia addams 
  'http://www.omdbapi.com/?i=tt8140216&apikey=9a39bb87']// rapido y furioso
console.log(arr);
export const example = (movie) => {


  // eslint-disable-next-line no-undef
  return new Promise ((resolve, reject) => {
    fetch (movie)

      .then(response => {
        return response.json();
      
      })
      .then((data) => {
       
        arrGuarda.push(data);
        console.log(arrGuarda);
        // rootHtml.innerHTML = JSON.stringify(data);
        //const peliculas = document.createElement('li');
      
        creeContainer(data)                  
    
        // const content = data.Actors + data.Poster;
        //peliculas.appendChild(content);
        console.log(data);
        resolve(data)                    
      })
      .catch(error => reject (error))
  }
  )
}


function mostrarArray (array) {
  const promises = array.map(pelicula => {
    example(pelicula) 
  });
  // eslint-disable-next-line no-undef
  return Promise.all(promises);
}


mostrarArray(arr)
example(movieUser);
// .then(()=> example(arr));

