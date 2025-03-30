
function sum(a,b){
    return a + b;
}

function checkTotal(total,iva){
    console.log(total * iva)
    return total * iva
}

function sumProduct(productos,precio){
    return productos * precio;
}

function deleteProduct(producto, precio){

    if(precio > 50){
        return producto / precio;
    }

    return "No funciona bien";
}

module.exports = checkTotal;
