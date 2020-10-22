document.getElementById("prueba").addEventListener("click", function (event) { // Ejemplo
    // presentar la cuenta de clicks realizados sobre el elemento con id "prueba" Ejemplo
    event.target.innerHTML = "Conteo de Clicks: " + event.detail; // Ejemplo
}, false); // Ejemplo

var button = document.getElementById('prueba');
var input = document.getElementById('input');
var submit = document.getElementById('submit');
var form = document.getElementById('form');
var exampleInputEmail1 = document.getElementById('exampleInputEmail1');
var exampleInputPassword1 = document.getElementById('exampleInputPassword1');
var exampleCheck1 = document.getElementById('exampleCheck1');

/* button.addEventListener('click', function(){
    console.log("estoy dando click");
}); */

/* button.addEventListener('dblclick', function(){ // esto es para cuando se le da doble click
    console.log("estoy dando doble click");
}); */

/* button.addEventListener('mouseenter', function(){ // este es para ver cuando entra el mouse sobre la sona donde se ponga el evento 
    console.log("estoy sobre la zona");
}); */

/* button.addEventListener('mouseleave', function(){ // Este es para cuando el mouse deja el lugar cambia de color
    button.classList.replace('red', 'green');
}); */

/* button.addEventListener('mouseenter', function(){
    button.classList.replace('green', 'red');
}); */

/* input.addEventListener('keydown', function(){ // Sirve para saber cuando se esta tecleando
    console.log("estoy tecleando");
}); */

/* window.addEventListener('click', function(){ // Window es para decir cuando hablamos de ventana
    console.log("estoy teclando donde sea");
}); */

/* input.addEventListener('keydown', function(event){
    console.log(event.key);
    // console.log("estoy tecleando");
}); */

submit.addEventListener('click', function(event){
    event.preventDefault();
    var input = exampleInputEmail1.value;
    var password = exampleInputPassword1.value;
    var check = exampleCheck1.checked;
    if(check === false){ // Otra manera es !check
        alert("tienes que aceptar los terminos y condiciones");
    }
    if(password === "12345678"){
        console.log("no puede ser tan sencillo");
    }
});