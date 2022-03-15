var datos = [0,1,2,3];

function agregarNum() {
    let numero = parseInt(num1.value)
    if (numero <= 0 || numero > 0) {
        datos.push(numero)
        campo2.value = datos
    }
}

function eliminarNum() {
    let numero = Math.floor(Math.random() * datos.length);
    let rs = datos.splice(numero,1);
    campo3.value = rs;
    campo3.value = datos
}

function mostrarArray() {
    campo2.value = datos
}