document.addEventListener("DOMContentLoaded", function () {
    const tiempo = document.getElementById("tiempo");
    const cantidad = document.getElementById("cantidad");
    const fecha = document.getElementById("fecha");
    const total = document.getElementById("total");

    if (tiempo && cantidad && fecha && total) {
        function calcularTotal() {
            let horas = parseInt(tiempo.value) || 0;
            let numVehiculos = parseInt(cantidad.value) || 0;
            let precioHoras = horas * 100;
            let precioVehiculos = numVehiculos * 50;
            let suplementoFinSemana = 0;

            if (fecha.value) {
                let dia = new Date(fecha.value).getDay();
                if (dia === 0 || dia === 6) suplementoFinSemana = 100;
            }

            let precioTotal = precioHoras + precioVehiculos + suplementoFinSemana;
            total.innerHTML = `Total: ${precioTotal} €`;
        }

        tiempo.addEventListener("change", calcularTotal);
        cantidad.addEventListener("change", calcularTotal);
        fecha.addEventListener("change", calcularTotal);
        calcularTotal();
    }
});
