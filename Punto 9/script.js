//Sin topping = $50
//Topping Oreo = $10
//Topping KitKat= $15
//Topping brownie= $20

let topping = prompt("Escribe el topping que deseas agregar (usa solamente minúscula)");
let helado = 50;
let precio = helado;

if (topping == "oreo"){
    precio = precio + 10
    alert("paga por tu helado: " + precio);
}

else if (topping == "kitkat"){
    precio = precio + 15
    alert("paga por tu helado: " + precio);
}

else if (topping == "brownie"){
    precio = precio + 20
    alert("paga por tu helado: " + precio); }

else if (topping == "ninguno"){
    alert("paga por tu helado: " + precio); }

else{
    alert("no tenemos este topping, lo sentimos");
    alert("paga por tu helado: " + precio);
}

