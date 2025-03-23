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
        name: 'Parmesano',
        price: 5000,
        description: 'lorem lorem lorem',
        stock: 3,
        category: 'alojamiento',
        img: '../Parmesano.jpg'
    },
    {
        id: '03',
        name: 'Barbacoa',
        price: 4000,
        description: 'lorem lorem lorem',
        stock: 10,
        category: 'restaurante',
        img: '../Barbacoa.jpg'
    }
]

//crear y exportar promesa

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        let error = false
        setTimeout(() => {
            error ? reject("No hay data") : resolve(productos)
        }, 2000)
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



