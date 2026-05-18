const ingresos = [
    new Ingreso ('salario', 500),
    new Ingreso('Venta de auto', 500)
];

const egresos = [
    new Egreso ('Alquiler', 250),
    new Egreso ('Comida', 100)
];

let cargarApp = ()=>{
    cargarCabecero();
}

let totalIngresos = () =>{
    let totalIngreso = 0;
    for(let ingreso of ingresos){
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

let totalEgresos = () =>{
    let totalEgreso = 0;
    for(egreso of egresos){
        totalEgreso += egreso.valor;
    }
    return totalEgreso
}

let cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();

    document.getElementById('presupuesto').innerHTML = presupuesto;
    document.getElementById('porcentaje').innerHTML = porcentajeEgreso;
    document.getElementById('ingresos').innerHTML = totalIngresos();
    document.getElementById('egresos').innerHTML = totalEgresos();
} 