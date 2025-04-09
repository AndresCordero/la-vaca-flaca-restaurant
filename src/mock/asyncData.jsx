const productos = [
    {
        id: '01',
        name: 'Camarones',
        price: 4800,
        description: 'lorem lorem lorem',
        stock: 10,
        category: 'ejecutivo',
        img: '../Camarones.jpg'
    },
    {
        id: '02',
        name: 'Coca-Cola 350ml',
        price: 1200,
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
        price: 3500,
        description: 'lorem lorem lorem',
        stock: 10,
        category: 'ejecutivo',
        img: '../casado.png'
    },
    {
        id: '05',
        name: 'Café',
        price: 1000,
        description: 'lorem lorem lorem',
        stock: 10,
        category: 'bebidas',
        img: '../cafe.JPG'
    },
    {
        id: '06',
        name: 'Pollo parmesano',
        price: 6000,
        description: 'lorem lorem lorem',
        stock: 10,
        category: 'pollo',
        img: '../Parmesano.jpg'
    },
    {
        id: '07',
        name: 'Hamburguesa',
        price: 4000,
        description: 'lorem lorem lorem',
        stock: 10,
        category: 'comidasrapidas',
        img: '../hamburguesa.jpg'
    },
    {
        id: '08',
        name: 'Nachos',
        price: 4000,
        description: 'lorem lorem lorem',
        stock: 10,
        category: 'comidasrapidas',
        img: '../nachos.jpg'
    },
    {
        id: '09',
        name: 'Papas Fritas',
        price: 2000,
        description: 'lorem lorem lorem',
        stock: 10,
        category: 'acompañamientos',
        img: '../papasfritas.jpg'
    },
    {
        id: '10',
        name: 'Patacones',
        price: 2500,
        description: 'lorem lorem lorem',
        stock: 10,
        category: 'acompañamientos',
        img: '../patacones.webp'
    },
    {
        id: '11',
        name: 'Chifrijo',
        price: 4000,
        description: 'lorem lorem lorem',
        stock: 8,
        category: 'ejecutivo',
        img: '../chifrijo.jpg'
    },
    {
        id: '12',
        name: 'Coctel',
        price: 3000,
        description: 'lorem lorem lorem',
        stock: 8,
        category: 'bebidas',
        img: '../coctel.jpg'
    },
    {
        id: '13',
        name: 'Alitas',
        price: 4000,
        description: 'lorem lorem lorem',
        stock: 8,
        category: 'pollo',
        img: '../alitas.avif'
    },
    {
        id: '14',
        name: 'Pasta Alfredo',
        price: 4500,
        description: 'lorem lorem lorem',
        stock: 8,
        category: 'pastas',
        img: '../alfredo.jpg'
    },
    {
        id: '15',
        name: 'Pasta Pollo',
        price: 4000,
        description: 'lorem lorem lorem',
        stock: 8,
        category: 'pastas',
        img: '../pastapollo.jpeg'
    },
    {
        id: '16',
        name: 'Ceviche',
        price: 5000,
        description: 'lorem lorem lorem',
        stock: 8,
        category: 'acompañamientos',
        img: '../ceviche.webp'
    },
    {
        id: '17',
        name: 'Olla de carne',
        price: 5000,
        description: 'lorem lorem lorem',
        stock: 8,
        category: 'sopas',
        img: '../olladecarne.webp'
    },
    {
        id: '18',
        name: 'Sopa azteca',
        price: 5000,
        description: 'lorem lorem lorem',
        stock: 8,
        category: 'sopas',
        img: '../sopaazteca.jpeg'
    },
    {
        id: '19',
        name: 'Rib Eye',
        price: 8000,
        description: 'lorem lorem lorem',
        stock: 8,
        category: 'especiales',
        img: '../ribaye.webp'
    },
    {
        id: '20',
        name: 'Costilla',
        price: 8000,
        description: 'lorem lorem lorem',
        stock: 8,
        category: 'especiales',
        img: '../costilladeres.jpg'
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



