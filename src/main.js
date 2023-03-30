import { muro } from './muro.js';
import {} from "./rourtes.js";

const rootHtml = document.getElementById('root')
rootHtml.appendChild(muro());
// muro();

export const example = () => {
 
  fetch('https://www.omdbapi.com/?t=batman&apikey=99f90dcf')
    .then((response) => console.log(response.json()))
    .then(data => console.log(data));
    
  return 'example';
};
 console.log(example());

