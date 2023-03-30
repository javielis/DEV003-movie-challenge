export default () => {
  const div = document.createElement('div');
  div.className = ('div');
  const buttonContinuar = document.createElement('button');
  buttonContinuar.className = 'continuar';
  const imagenFondo = document.createElement('img');
  imagenFondo.className = 'imagenFondo';
  
  // de esta forma especifico o agrego texto o imagen a mis botones o pantalla.
  imagenFondo.src = 'imagenes/fondo.jpg';
  buttonContinuar.textContent = 'CONTINUAR';

  
  //  aqui estamos agregando todo a nuestro div en nuestro html de forma dinamica.
  div.appendChild(imagenFondo);
  div.appendChild(buttonContinuar);
 
  
  buttonContinuar.addEventListener('click', () => {
    console.log( buttonContinuar);
  });
  
  return div;
};
