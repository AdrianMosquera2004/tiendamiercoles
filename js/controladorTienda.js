//controlando etiquetas

//1. crear  una variable para guardar una etiqueta
let etiquetaTitulo = document.getElementById("titulo")
console.log(etiquetaTitulo)

//2. como modificar el texto de una etiqueta
etiquetaTitulo.textContent="la buena mi so"
let etiquetamenu = document.getElementById("menu")
etiquetamenu.textContent="Tupac Shakur"

//controlando una foto
let etiquetaFoto=document.getElementById("foto12")
console.log(etiquetaFoto)
etiquetaFoto.src="img/3.jpg"

//cambiar estilo de la etiqueta
etiquetaTitulo.classList.add("text-center")
etiquetaTitulo.classList.add("text-danger")