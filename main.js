function generarRFC() {
    var nombre = document.getElementById("txtnom").value.toUpperCase().trim();
    var apellidoPaterno = document.getElementById("txtapp").value.toUpperCase().trim();
    var apellidoMaterno = document.getElementById("txtapm").value.toUpperCase().trim();
    var fechaNacimiento = document.getElementById("dtfn").value;

    var rfc = calcularRFC(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento);
    var rfcUnico = generarRFCUnico(rfc);

    document.getElementById("txtres").value = rfcUnico;
}

function calcularRFC(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento) {
    var fecha = new Date(fechaNacimiento);
    var anio = fecha.getFullYear().toString().substr(-2);
    var mes = ('0' + (fecha.getMonth() + 1)).slice(-2);
    var dia = ('0' + fecha.getDate()).slice(-2);
    var fechaFormatoRFC = anio + mes + dia;

    var apellidoPaternoRFC = apellidoPaterno.substring(0, 2);
    var apellidoMaternoRFC = apellidoMaterno.substring(0, 1);
    var nombreRFC = nombre.substring(0, 1);

    return apellidoPaternoRFC + apellidoMaternoRFC + nombreRFC + fechaFormatoRFC;
}

function generarRFCUnico(rfc) {
    // Generar hasta 4 letras aleatorias
    var caracteresUnicos = '';
    var letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (var i = 0; i < 4; i++) {
        caracteresUnicos += letras.charAt(Math.floor(Math.random() * letras.length));
    }
    return rfc + caracteresUnicos;
}

function consultarAPI() {
    var id = $('#txtid').val(); // Obtener el valor del input de ID
    var apiUrl = "https://jsonplaceholder.typicode.com/users" + id; // Debes agregar la URL de tu API aquí

    $.get(apiUrl, function(data, textStatus){
        $('#txtnom1').val(data.nombre); // Suponiendo que la API devuelve un objeto con un campo "nombre"
        $('#txtemail').val(data.email); // Suponiendo que la API devuelve un objeto con un campo "email"
    });
}