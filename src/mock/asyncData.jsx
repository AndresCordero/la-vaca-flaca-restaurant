const productos = [
    {
        id: '01',
        name: 'Camarones',
        price: 4000,
        description: 'lorem lorem lorem',
        stock: 10,
        category: 'restaurante',
        img: '../Camarones.jpg'
    },
    {
        id: '02',
        name: 'Cocacola',
        price: 5000,
        description: 'lorem lorem lorem',
        stock: 3,
        category: 'bebidas',
        img: '../Cocacola.png'
    },
    {
        id: '03',
        name: 'Pollo barbacoa',
        price: 4000,
        description: 'lorem lorem lorem',
        stock: 10,
        category: 'pollo',
        img: '../Barbacoa.jpg'
    },
    {
        id: '04',
        name: 'Casado',
        price: 15000,
        description: 'lorem lorem lorem',
        stock: 10,
        category: 'ejecutivo',
        img: '../casado.png'
    },
    {
        id: '05',
        name: 'Café',
        price: 5000,
        description: 'lorem lorem lorem',
        stock: 10,
        category: 'bebidas',
        img: '../cafe.JPG'
    },
    {
        id: '06',
        name: 'Pollo Parmesano',
        price: 15000,
        description: 'lorem lorem lorem',
        stock: 10,
        category: 'pollo',
        img: '../Parmesano.jpg'
    },
    {
        id: '07',
        name: 'Hamburguesa',
        price: 5000,
        description: 'lorem lorem lorem',
        stock: 10,
        category: 'comidasrapidas',
        img: '../hamburguesa.jpg'
    }

]

//crear y exportar promesa

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        let error = false
        setTimeout(() => {
            error ? reject("No hay data") : resolve(productos)
        }, 1000)
    })
}



/* Buscar Producto */

export const getOneProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let product = productos.find(prod => prod.id === id)
            resolve(product)
        }, 1000)
    })
}






//promesa de productos (EJEMPLO SENCILLO)

/*    let error = false
   let promiseExample = new Promise((resolve, reject) => {
       setTimeout(() => {
           error ? reject('No existen los productos') : resolve('Hay productos')
       }, 3000)
   })
 
   console.log(promiseExample)
   useEffect(() => {
       promiseExample
           .then((res) => setData(res))
   }, []) */



