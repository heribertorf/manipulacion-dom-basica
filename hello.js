const h1 = document.querySelector('h1'); //selecciona por el nombre
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid'); //con gato pones el id
const input = document.querySelector('input');
console.log ({
   h1,
    p,
    parrafito,
    pid,
    input
});

h1.innerHTML = 'Cambio esto <br>Fet'; //nos permite modificar el DOM
h1.innerText = 'txto <br>';
console.log(h1.getAttribute('pantalla')
);
h1.setAttribute('class','rojo'); //modifico la clase aunque no este existente
console.log(h1.getAttribute('class') 
);

h1.classList.add('churro'); //agrega classes  a la que y a tenia
console.log(h1.getAttribute('class') 
);
//h1.classList.toggle('churro');
//h1.classList.contains('churro'); nos dice si contiene esa clase

input.value = "456";

console.log(document.createElement('img'));

const img = document.createElement('img');
img.setAttribute('src','https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif');
console.log(img);
pid.append(img);//insarta la imagen dentro del pid class