// Buenas noto que cuando es la primera vez que abris el archivo no se cargan las opciones desde la consola establecidos con los
// console.log osea cuando es la primera vez que lo abris te va a pedir que indiques una opcion pero la consola esta vacia
// se que es algo poco significativo por que cuando lo volves a cargar la pag se soluciona y se que en el dia de mañana
// no nos vamos a manejar con la consola (viendo como usuario de la pag)
//
//---------------------saludo
//------------------------------------------------------------------------------------
function saludar() {
  console.log("Bienvenido " + nombreUsuario + " a RopaUrbana.com.ar ");
}

//---------------------funcion constructora productos
//------------------------------------------------------------------------------------
function Producto(nombre, precio, cantidad) {
  this.nombre = nombre;
  this.precio = precio;
  this.cantidad = cantidad;
}
//---------------------array del carrito
//------------------------------------------------------------------------------------
const carrito = [];

//    funcion para agregar productos
function agregarProducto(nombre, precio, cantidad) {
  const nuevoProducto = new Producto(nombre, precio, cantidad);
  carrito.push(nuevoProducto);
}

//---------------------funcion para mostrar el carrito
//------------------------------------------------------------------------------------
function mostarCarrito() {
  console.log("Tu carrito");
  if (carrito.length == 0) {
    console.log("Tu carrito esta vacio.");
  } else {
    for (let produ = 0; produ < carrito.length; produ++) {
      console.log(carrito[produ].nombre + "- Precio unitario: $" + carrito[produ].precio + " -Cantidad: " + carrito[produ].cantidad);
    }
  }
}

//---------------------calcular total
//------------------------------------------------------------------------------------
function calcularTotal() {
  let totalCompra = 0;
  for (let todo = 0; todo < carrito.length; todo++) {
    totalCompra += carrito[todo].precio * carrito[todo].cantidad;
  }
  console.log("El total de la compra es: $" + totalCompra);
}

//---------------------flujo
//------------------------------------------------------------------------------------
//
//     Bienvenida
//
let nombreUsuario = prompt("Hola primero que nada nos gustaria saber tu nombre");
while (nombreUsuario == "") {
  alert("Este no es un nombre valido");
  nombreUsuario = prompt("Ingrese un nombre valido");
}
saludar();
//
//
while (true) {
  console.log("*Menu de opciones RopaUrbana");
  console.log("1- Agregar producto al carrito");
  console.log("2- Mostar carrito");
  console.log("3- Mostrar total de tu compra");
  console.log("4- Salir de RopaUrbana");
  const opcion = parseInt(prompt("Elige una opcion:"));
  if (opcion == 1) {
    const nombre = prompt("Que producto del catalogo deseas agregar, (ej remera, pantalon): ");
    const precio = parseInt(prompt("Cuanto cuesta dicho producto"));
    const cantidad = parseInt(prompt("Cuantos desea agregar al carrito"));
    agregarProducto(nombre, precio, cantidad);
    console.log("--Producto agregado al carrito con exito");
    console.log("");
    console.log("");
  } else if (opcion == 2) {
    mostarCarrito();
    console.log("");
    console.log("");
  } else if (opcion == 3) {
    calcularTotal();
    console.log("");
    console.log("");
  } else if (opcion == 4) {
    console.log("Muchas gracias por visitar RopaUrbana.com.ar esperamos volverte a ver.");
    break;
  } else {
    console.log("Opcion no valida, por favor indique una opcion valida");
    console.log("");
    console.log("");
  }
}
