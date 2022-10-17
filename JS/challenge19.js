let product = ['agua','vino','cerveza','cachaza','gin','vodka', 'wisky', 'licor', 'coca', 'soda']

let trolley = []

const addProduct = () => {
    const productToAdd = prompt('Qúe producto quieres agregar?').toLowerCase();
    if(product.includes (productToAdd)){
    trolley.push(productToAdd)
    }else{
        alert ('El producto que quiere agregar no está en la lista');
    }

}

const getTrolley = () => {
    alert('Los productos de su carrito son: \n- ' + trolley.join ('\n- '));

}

function getProductFromTrolley () {
    const productToFind = prompt ('Qué productos deseas ver del carrito?').toLowerCase();
    if (trolley.includes(productToFind)){
        const product = trolley.find (drink => drink == productToFind)
        alert(product)
    }else{
        alert ('No tienes ese producto en el carrito')
    }

}

const findProducts = function () {
    const search = prompt('Buscar bebidas...').toLowerCase();
    const results= product.filter(product=>product.includes(search));
    alert(results)


}

const removeProductsFromTrolley = () => {

    const productToRemove = prompt('Qué bebida deseas eliminar de tu carrito?').toLowerCase();
    if (trolley.includes(productToRemove)){
        trolley = trolley.filter(product=>product!=productToRemove);
        alert ('Producto Eliminado')
    }else{
        alert ('No tienes ese producto en el carrito')
    }
}
