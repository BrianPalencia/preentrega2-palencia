class Vehiculo {
    constructor(marca, modelo, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }
}

let vehiculo1 = new Vehiculo("toyota", "yaris", 50000);
let vehiculo2 = new Vehiculo("toyota", "tacoma", 95000);
let vehiculo3 = new Vehiculo("honda", "civic", 35000);
let vehiculo4 = new Vehiculo("chevrolet", "camaro", 65000);
let vehiculo5 = new Vehiculo("honda", "crv", 55000);
let vehiculo6 = new Vehiculo("toyota", "rav4", 75000);
let vehiculo7 = new Vehiculo("subaru", "impreza", 155000);

let Vehiculos = [vehiculo1, vehiculo2, vehiculo3, vehiculo4, vehiculo5, vehiculo6, vehiculo7];

let vehiculoBuscado = prompt("Ingresa el vehiculo que quieres encontrar");
let resultado = buscarVehiculo(Vehiculos);

if (resultado.length > 0) {
    console.table(resultado);
} else {
    alert("No hay ningún vehiculo que coincida con: " + vehiculoBuscado);
}

function buscarVehiculo(vehiculos) {
    return vehiculos.filter((Vehiculo) => Vehiculo.marca.includes(vehiculoBuscado));
}

function calcularPagoMensual(precioVehiculo, meses) {
    if (meses <= 0) {
    return "El número de meses debe ser mayor que 0.";
    }

    const impuesto = 0.12; 
    const precioTotalConImpuesto = precioVehiculo * (1 + impuesto);
    const pagoMensual = precioTotalConImpuesto / meses;
    return pagoMensual.toFixed(2); 
}

function mostrarOpcionesVehiculos() {
    console.log("Vehículos disponibles:");
    for (let i = 0; i < Vehiculos.length; i++) {
        const vehiculo = Vehiculos[i];
        console.log((i + 1) + '. ' + vehiculo.marca + ' ' + vehiculo.nombre + " - Precio: Q. " + vehiculo.precio);
    }
}

mostrarOpcionesVehiculos();

let opcionElegida = parseInt(prompt("Ingresa el número de la lista del vehículo que quieres calcular:"));

if (opcionElegida >= 1 && opcionElegida <= Vehiculos.length) {
    let vehiculoElegido = Vehiculos[opcionElegida - 1];

    let mesesParaPagar = parseInt(prompt("Ingresa la cantidad de meses para pagar el vehículo:"));

    if (mesesParaPagar > 0) {
    let pagoMensual = calcularPagoMensual(vehiculoElegido.precio, mesesParaPagar);
    alert("El pago mensual para comprar el vehículo en " + mesesParaPagar + "meses será de: Q. " + pagoMensual);
    } else {
    alert("El número de meses debe ser mayor que 0.");
    }
} else {
    alert("Opción inválida. Por favor, elige un numero de vehículo existente.");
}

function agregarVehiculo(){
    let marca = prompt("Ingresa la marca del nuevo vehículo:");
    let modelo = prompt("Ingresa el modelo del nuevo vehículo:");
    let precio = prompt("Ingresa el precio del nuevo vehículo:");

    if (isNaN(precio) || marca === "" || modelo === "") {
        alert("Por favor, ingresa datos válidos");
        return;
    }

    let vehiculo = new Vehiculo(marca, modelo, precio);
    Vehiculos.push(vehiculo); 
    console.table(Vehiculos);
}
