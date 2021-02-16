import data from './data/rickandmorty/rickandmorty.js';
import {orderAZ, orderZA, genderMale, genderFemale, genderUnknown, speciesHuman, speciesAlien, statusAlive, statusDead, tierraOrigin} from './data.js';

function uniqueTemplate (datos){
  const items = document.getElementById('items');
  const templateCard = document.getElementById('template_card').content;
  const fragment = document.createDocumentFragment();
  
  
  const pintarCards = datos => {
    datos.forEach(personaje => {
          templateCard.querySelector('img').setAttribute('src', personaje.image)
          templateCard.querySelector('p3').textContent = 'Nombre: ' + personaje.name
          templateCard.querySelector('p4').textContent = 'Estado: ' +personaje.status
          templateCard.querySelector('p5').textContent = 'Especie: ' +personaje.species
          templateCard.querySelector('p6').textContent = 'Género: ' +personaje.gender
          templateCard.querySelector('p7').textContent = 'Origen: ' +personaje.origin.name
  
          const clone = templateCard.cloneNode(true)
          fragment.appendChild(clone)
      })
      items.appendChild(fragment)
  }
  return pintarCards(datos)
  }


//orderAZ

document.querySelector(".submenu0").onclick = function() {
  document.getElementById("titulo").innerHTML = 'Personajes ordenamos de A-Z'
  let datos = data.results;
  datos = orderAZ(datos);
  document.getElementById("card").innerHTML = uniqueTemplate(datos);
  
}
  
//orderZA

document.querySelector(".submenu1").onclick = function() {
  document.getElementById("titulo").innerHTML = 'Personajes ordenamos de Z-A'
  let datos = data.results;
  datos = orderZA(datos);
  document.getElementById("card").innerHTML = uniqueTemplate(datos);
 
}

//species

document.querySelector("#human").onclick = function() {
  document.getElementById("titulo").innerHTML = 'Personajes ordenamos por su especie'
}

document.querySelector("#alien").onclick = function() {
  document.getElementById("titulo").innerHTML = 'Personajes ordenamos por su especie'
}

  document.getElementById("human").addEventListener(
    "click", function () {

      let datos = data.results;
      datos = speciesHuman(datos);
      document.getElementById("card").innerHTML = uniqueTemplate(datos);
    }) 

  document.getElementById("alien").addEventListener(
    "click" , function () {
      let datos = data.results;
      datos= speciesAlien(datos);
      document.getElementById("card").innerHTML = uniqueTemplate(datos);
    })


//gender

document.querySelector("#male").onclick = function() {
  document.getElementById("titulo").innerHTML = 'Personajes masculinos'
}

document.querySelector("#female").onclick = function() {
  document.getElementById("titulo").innerHTML = 'Personajes femeninos'
}
document.querySelector("#undknown").onclick = function() {
  document.getElementById("titulo").innerHTML = 'Personajes con genero desconocido'
}

  document.getElementById("male").addEventListener(
    "click" , function () {
      let datos = data.results;
      datos= genderMale(datos);
      document.getElementById("card").innerHTML = uniqueTemplate(datos);
  })
  document.getElementById("female").addEventListener(
    "click" , function () {
      let datos = data.results;
      datos= genderFemale(datos);
      document.getElementById("card").innerHTML = uniqueTemplate(datos);
   })
  document.getElementById("undknown").addEventListener(
    "click" , function () {
      let datos = data.results;
      datos= genderUnknown(datos);
      document.getElementById("card").innerHTML = uniqueTemplate(datos);
    })


//status

document.querySelector("#alive").onclick = function() {
  document.getElementById("titulo").innerHTML = 'Personajes vivos'
}

document.querySelector("#dead").onclick = function() {
  document.getElementById("titulo").innerHTML = 'Personajes muertos'
}


  document.getElementById("alive").addEventListener(
    "click" , function () {
      let datos = data.results;
      datos= statusAlive(datos);
      document.getElementById("card").innerHTML = uniqueTemplate(datos);
    })  
    document.getElementById("dead").addEventListener(
      "click" , function () {
        let datos = data.results;
        datos= statusDead(datos);
        document.getElementById("card").innerHTML = uniqueTemplate(datos);
      })


//Personajes de la Tierra

document.querySelector(".submenu5").onclick = function() {
  document.getElementById("titulo").innerHTML = 'Personajes de la Tierra C-137'
  let datos = data.results;
  datos = tierraOrigin(datos);
  document.getElementById("card").innerHTML = uniqueTemplate(datos);
}

document.querySelectorAll('.submenu0').forEach(item => {
    item.addEventListener('click', event => {
        document.getElementById('segundapagina').style.display = 'block';
        document.getElementById('paginaprincipal').style.display = 'none';
        //document.getElementById('items').style.display = 'none';

    //Write your code hear
    console.log(event);
    })
    }) 

    document.querySelectorAll('.submenu1').forEach(item => {
      item.addEventListener('click', event => {
          document.getElementById('segundapagina').style.display = 'block';
          document.getElementById('paginaprincipal').style.display = 'none';
          //document.getElementById('items').style.display = 'none';
  
      //Write your code hear
      console.log(event);
      })
      })

      document.querySelectorAll('#alien').forEach(item => {
        item.addEventListener('click', event => {
            document.getElementById('segundapagina').style.display = 'block';
            document.getElementById('paginaprincipal').style.display = 'none';
            //document.getElementById('items').style.display = 'none';
    
        //Write your code hear
        console.log(event);
        })
        }) 

        document.querySelectorAll('#human').forEach(item => {
          item.addEventListener('click', event => {
              document.getElementById('segundapagina').style.display = 'block';
              document.getElementById('paginaprincipal').style.display = 'none';
              
              //document.getElementById('items').style.display = 'none';
      
          //Write your code hear
          console.log(event);
          })
          })

          document.querySelectorAll('#male').forEach(item => {
            item.addEventListener('click', event => {
                document.getElementById('segundapagina').style.display = 'block';
                document.getElementById('paginaprincipal').style.display = 'none';
                
                //document.getElementById('items').style.display = 'none';
        
            //Write your code hear
            console.log(event);
            })
            })

            document.querySelectorAll('#female').forEach(item => {
              item.addEventListener('click', event => {
                  document.getElementById('segundapagina').style.display = 'block';
                  document.getElementById('paginaprincipal').style.display = 'none';
                  
                  //document.getElementById('items').style.display = 'none';
          
              //Write your code hear
              console.log(event);
              })
              })

              document.querySelectorAll('#undknown').forEach(item => {
                item.addEventListener('click', event => {
                    document.getElementById('segundapagina').style.display = 'block';
                    document.getElementById('paginaprincipal').style.display = 'none';
                    
                    //document.getElementById('items').style.display = 'none';
            
                //Write your code hear
                console.log(event);
                })
                })
                document.querySelectorAll('#alive').forEach(item => {
                  item.addEventListener('click', event => {
                      document.getElementById('segundapagina').style.display = 'block';
                      document.getElementById('paginaprincipal').style.display = 'none';
                      
                      //document.getElementById('items').style.display = 'none';
              
                  //Write your code hear
                  console.log(event);
                  })
                  })

                  document.querySelectorAll('#dead').forEach(item => {
                    item.addEventListener('click', event => {
                        document.getElementById('segundapagina').style.display = 'block';
                        document.getElementById('paginaprincipal').style.display = 'none';
                        
                        //document.getElementById('items').style.display = 'none';
                
                    //Write your code hear
                    console.log(event);
                    })
                    })
          
          document.querySelectorAll('.submenu5').forEach(item => {
            item.addEventListener('click', event => {
                document.getElementById('segundapagina').style.display = 'block';
                document.getElementById('paginaprincipal').style.display = 'none';
                //document.getElementById('items').style.display = 'none';
        
            //Write your code hear
            console.log(event);
            })
            }) 

      document.querySelectorAll('.home').forEach(item => {
        item.addEventListener('click', event => {
            document.getElementById('segundapagina').style.display = 'none';
            document.getElementById('paginaprincipal').style.display = 'block';
            //document.getElementById('items').style.display = 'none';
            location.reload();
    
        //Write your code hear
        console.log(event);
        })
        }) 

document.querySelector('.boton2').addEventListener(
  'click', event =>{
    document.getElementById('tercerapagina').style.display = 'block';
    document.getElementById('paginaprincipal').style.display = 'none';
    console.log(event);

  }
)

