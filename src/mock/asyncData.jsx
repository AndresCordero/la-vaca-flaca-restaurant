const productos = [
    {
        id: '01',
        name: 'Camarones',
        price: 4000,
        description: 'lorem lorem lorem',
        stock: 10,
        categoty: 'restaurante',
        img: '../Camarones.jpg'
    },
    {
        id: '02',
        name: 'Parmesano',
        price: 5000,
        description: 'lorem lorem lorem',
        stock: 3,
        categoty: 'alojamiento',
        img: '../Parmesano.jpg'
    },
    {
        id: '03',
        name: 'Barbacoa',
        price: 4000,
        description: 'lorem lorem lorem',
        stock: 10,
        categoty: 'restaurante',
        img: '../Barbacoa.jpg'
    }
]

//crear y exportar promesa

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        let error = false
        setTimeout(() => {
            error ? reject("No hay data") : resolve(productos)
        },2000)
    })
}
