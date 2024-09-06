const datos = {
  talla: "",
  cantidad: ""
};

const boton = document.querySelector(".formulario__boton");
const cantidad = document.querySelector("#cantidad");
const talla = document.querySelector("#talla");
const form = document.querySelector(".formulario");
const producto = document.querySelectorAll(".producto");

/*function leerDato(e) {
  if(e.target.id == 'cantidad')
    {
    datos.cantidad = e.target.value;
    }
  if(e.target.id == 'talla')
  {
    datos.talla = e.target.value
  }

  console.log(datos)

} linea de codigo propia*/

producto.forEach((producto) => {
  producto.addEventListener("click", (evento) => {
    window.location.href = "productos.html";
  });
});
//optimizada
function leerDato(e) { 
  datos[e.target.id] = e.target.value;
  console.log(datos);
}

function mostrarAlerta(mensaje){
  const alerta = document.createElement('P')
  alerta.textContent = mensaje
}

function mostrarError(mensaje){
  const error = document.createElement('P')
  error.classList.add('error')
  form.appendChild(error)

  setTimeout(()=>{
    error.remove()
  },3000)
}

function mostrarMensaje(mensaje){
  const enviado = document.createElement('P')
  enviado.classList.add('enviado')
  form.appendChild(enviado)

  setTimeout(()=>{
    error.remove()
  },3000)
}



form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const{talla, cantidad} = datos
  
  //au2

  if(talla === '' || cantidad === '')
  {
    mostrarError('todos los campos son obligatorios')
    return;
  }

  mostrarMensaje("Enviado correctamente");
});

cantidad.addEventListener("input", leerDato);

talla.addEventListener("input", leerDato);
