function GoTickets() {
    location.href = "ComprarTickets.html";
}

const Ticket = 200;

function CalcularTotal() {
    var cantidad = document.getElementById("cantidad").value;
    var categoria = document.getElementById("categoria").value;
    if (cantidad == '') {
        alert ('Por favor ingrese cantidad');
        return;
    }
    let multiplicacion = cantidad * Ticket;
    
     

    if (categoria == 1) {
        var totalCalculo = multiplicacion - (multiplicacion * 0.8)
    } else if (categoria == 2) {
        var totalCalculo = multiplicacion - (multiplicacion * 0.5)
    } else if (categoria == 3) {
        var totalCalculo = multiplicacion - (multiplicacion * 0.15)
    }
    
    document.getElementById("total").innerHTML = "Total a Pagar: $" + totalCalculo;
}

function Limpiar() {
    document.getElementById("cantidad").value = "";
    document.getElementById("Nombre").value = "";
    document.getElementById("Apellido").value = "";
    document.getElementById("Correo").value = "";
    document.getElementById("categoria").value = 1;
    document.getElementById("total").innerHTML = "Total a Pagar: $";
}

