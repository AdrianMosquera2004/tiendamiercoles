//creando un arreglo de objetos

let productosBD=[


    {foto:'img/tienda1.jpg',nombre:"camiseta",precio:50000,descripcion:"camiseta original 2pac"},
    {foto:'img/tienda2.jpg',nombre:"pantalon",precio:145000,descripcion:"pantalon original 2pac"},
    {foto:'img/tienda3.jpg',nombre:"buzo",precio:100000,descripcion:"buzo original 2pac"},
    {foto:'img/tienda4.jpg',nombre:"pantaloneta",precio:50000,descripcion:"pantaloneta original 2pac"},
    {foto:'img/tienda5.jpg',nombre:"gorra",precio:50000,descripcion:"gorra original 2pac"},
    {foto:'img/tienda6.jpg',nombre:"bolso",precio:80000,descripcion:"bolso original 2pac"},
    {foto:'img/tienda7.jpg',nombre:"figura_2pac",precio:500000,descripcion:"figura_2pac original 2pac"},
    {foto:'img/tienda8.jpg',nombre:"cadena",precio:1000000,descripcion:"cadena original 2pac"},
    {foto:'img/tienda 9.jpg',nombre:"zapato",precio:750000,descripcion:"zapato original 2pac"},
    {foto:'img/tienda 10.jpg',nombre:"cuadro",precio:600000,descripcion:"cuadro original 2pac"}

]

//Necesito recorrer un arrego en JS

//1.Creo una variable para almacenar la base sobre la cual voy a pintar
let fila=document.getElementById("fila")
productosBD.forEach(function(producto){
    console.log(producto.nombre)
    console.log(producto.precio)
    console.log(producto.foto)

    //2.Pintando etiquetas

    //div con la clase col
    let columna=document.createElement("div")
    columna.classList.add("col")

    //div con las clases card h-100
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    //img con la clase card-img-top
    let foto=document.createElement("img")
    foto.classList.add("car-img-top")
    foto.src=producto.foto

    //h4 con la clase text-center
    let titulo=document.createElement("h4")
    titulo.classList.add("text-center")
    titulo.textContent=producto.nombre
    

    //3. Padres E Hijos
    tarjeta.appendChild(foto)
    tarjeta.appendChild(titulo)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

})