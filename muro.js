//  import { } from "./rourtes.js";
export const muro = () => {
  //para que se muestren los poster con su imagen y nombre (creando portada)
  const root = document.createElement('div');
  root.classList.add("root"); 

  const titulo = document.createElement('h1');
  titulo.classList.add('titulo');
  titulo.textContent = 'Top 10 mejores';
  // const fondo = document.createElement('div');
  // fondo.innerHTML = ''
  // fondo.id = 'fondo';
  // const boton = document.createElement('button');
  // boton.id = 'boton';
  // boton.innerText = 'Buscar';
   


  // document.onclick = function () {
  //   alert('has hecho click');
  // }
  
  //contener los datos dentro de la caja
  root.append (titulo);

  
 
  return root;
};


// aqui deberia pasar el enlace para entrar a mi api
// peliculasPoster(api.pelis);
// console.log(api.pelis);
 
  
// no puedo avanzar aqui funciones por que me falta saber exactamente de donde llamare mi data.


  
