let tipoVehiculo;
let precioKm;
let kmRecorridos;
let litrosCon;
let costoTotal;

tipoVehiculo= prompt("¿Cual es tu tipo de vehiculo?");
if(tipoVehiculo.toLowerCase()=="coche"){
    precioKm= 0.2

}
else if(tipoVehiculo.toLowerCase()=="moto"){
    precioKm= 0.1
    
}
else if(tipoVehiculo.toLowerCase()=="autobus"){
    precioKm= 0.5
    
}
kmRecorridos= prompt("Cuantos kilometros ha recorrido?");
costoTotal= precioKm*kmRecorridos;
litros= prompt("Cuantos litros ha consumido?");

if (litrosCon>=0 && litrosCon<=100){
    costoTotal= costoTotal+5;
}
else{
    costoTotal= costoTotal+10;
}
alert("El costo total es "+ costoTotal);