// import { changeView  } from "./rourtes.js";
export const muro = () => {
  //para que se muestren los poster con su imagen y nombre (creando portada)
  const menuPelis = document.createElement('div');
  menuPelis.classList.add("menu"); 
  const titulo = document.createElement('p');
  titulo.classList.add('p');
  titulo.textContent = 'Top 10 mejores';
  const boton = document.createElement('button');
  boton.classList.add('boton');
  boton.textContent = 'siguiente';

  //contener los datos dentro de la caja
  menuPelis.appendChild(titulo);

  menuPelis.appendChild(boton);
   
  //cajaPrincipal.appendChild(tipo)//
  //agregarlo al root
;
      
 
  return menuPelis;
};
// aqui deberia pasar el enlace para entrar a mi api
// peliculasPoster(api.pelis);
// console.log(api.pelis);
 
  
// no puedo avanzar aqui funciones por que me falta saber exactamente de donde llamare mi data.


  
