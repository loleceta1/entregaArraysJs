const agregarAlCarrito = (producto) => {
    agregarAlCarrito.push(producto)
};

const carrito = [];
const productos = [
    {
        id: "1",
        nombre: "producto1",
        precio: 1100 
    },
    {
        id: "2",
        nombre: "producto2",
        precio: 1500
    },
    {
        id: "3",
        nombre: "producto3",
        precio: 1150
    },
    {
        id: "4",
        nombre: "producto4",
        precio: 900
    }
];
  
let seleccionar;
let total = 0;

do {
    const promoSeleccionada = prompt(`
Seleccione la promo que desea: 
1. Producto 1 
2. Producto 2
3. Producto 3
4. Producto 4
`);
    switch (promoSeleccionada) {
        case "1":
            alert(`El producto 1  fue seleccionado`);
            carrito.push(productos[0]);
            total += 1100;
            break;
        case "2":
            alert(`El producto 2 fue seleccionado`);
            carrito.push(productos[1]);
            total += 1500;
            break;
        case "3":
            alert(`El producto 3 fue seleccionado`);
            carrito.push(productos[2]);
            total += 1150;
            break;
        case "4":
            alert(`El producto 4 fue seleccionado`);
            carrito.push(productos[3]);
            total += 900;
            break;
        default:
            alert("no existe esa opción");
            break;
    }
    seleccionar = prompt(`Desea seguir seleccionando s/n ?`);
} while (seleccionar !== "n");
alert(`El total seleccionado es de $: ` + total);

carrito.forEach(producto => {
    console.log(producto)
});

const totalAgregado = carrito.map(i => i.precio++);
console.log(totalAgregado);

const totalFinal = totalAgregado.reduce((a, b) => a + b);
console.log("Total agreggado al carrito: " + totalFinal);




