let dia = prompt("Ingresa un día de la semana en mayuscula y sin tildes:").toUpperCase();
if(dia === "LUNES"){
    alert("Feliz inicio de semana, organiza tus metas");
} else if (dia === "VIERNES"){
    alert("Te felicito ¡Hiciste un gran trabajo durante la semana!");
} else if (dia === "SABADO"){
    alert("¡Disfruta el fin de semana y recarga baterias!");
} else if (dia === "DOMINGO"){
    alert("¡Un bonito día para tomarlo todo con más tranquilidad!");
}else{
    alert("¡No te rindas!")
}
