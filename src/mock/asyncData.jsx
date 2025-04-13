const productos = [
    {
        name: 'Pinto de la Casa',
        price: 2500,
        description: 'Huevo, maduro natilla y queso',
        stock: 10,
        category: 'desayunos',
        img: '../pinto.jpg'
    },
    {
        name: 'Homelet',
        price: 2200,
        description: 'Carne, pollo, jamon y queso, hongos',
        stock: 10,
        category: 'desayunos',
        img: '../homelete.jpg'
    },
    {
        name: 'Huevos rancheros',
        price: 2200,
        description: 'Salsa de la casa, 2 huevos y tortilla',
        stock: 10,
        category: 'desayunos',
        img: '../huevosrancheros.webp'
    },
    {
        name: 'Desayuno Campesino',
        price: 2500,
        description: 'Totilla con queso, torta de huevo, frijoles arreglados y natilla',
        stock: 10,
        category: 'desayunos',
        img: '../desayunocampesino.webp'
    },
    {
        name: 'Totilla con queso',
        price: 2000,
        description: 'Con natilla',
        stock: 10,
        category: 'desayunos',
        img: '../torillaqueso.jpg'
    },

    {
        name: 'Empanadas',
        price: 1600,
        description: 'Carne, pollo, queso y frijol. Sencilla o arreglada',
        stock: 10,
        category: 'desayunos',
        img: '../empanadas.jpg'
    },

    {
        name: 'Orden de patacones',
        price: 2700,
        description: 'Frijoles molidos, pico de gallo y carne',
        stock: 10,
        category: 'entradas',
        img: '../patacones.webp'
    },
    {
        name: 'Orden de yuca frita',
        price: 2500,
        description: 'Salsa de tomate y mayones de la casa',
        stock: 10,
        category: 'entradas',
        img: '../ordenyuca.jpg'
    },
    {
        name: 'Orden de papas',
        price: 2500,
        description: 'Salsa de tomate y mayones de la casa',
        stock: 10,
        category: 'entradas',
        img: '../papasfritas.jpg'
    },
    {
        name: 'Doraditas',
        price: 2500,
        description: 'Salsa de tomate y mayones de la casa',
        stock: 10,
        category: 'entradas',
        img: '../doraditas.jpg'
    },
    {
        name: 'Orden de papas',
        price: 2500,
        description: 'Salsa de tomate y mayones de la casa',
        stock: 10,
        category: 'entradas',
        img: '../papasfritas.jpg'
    },
    {
        name: 'Cafe negro',
        price: 800,
        description: 'Cafe de especialidad',
        stock: 10,
        category: 'bebidas',
        img: '../cafe.JPG'
    },
    {
        name: 'Cafe con leche',
        price: 1000,
        description: 'Café de espécialidad',
        stock: 10,
        category: 'bebidas',
        img: '../cafeconleche.jpg'
    },
    {
        name: 'Aguadulce',
        price: 1000,
        description: 'Tradicional',
        stock: 10,
        category: 'bebidas',
        img: '../aguadulce.jpg'
    },
    {
        name: 'Chocolate',
        price: 1000,
        description: 'Tradicional',
        stock: 10,
        category: 'bebidas',
        img: '../chocolate.jpg'
    },
    {
        name: 'Te',
        price: 1000,
        description: 'Verde, negro o manzanilla',
        stock: 10,
        category: 'bebidas',
        img: '../papasfritas.jpg'
    },
    {
        name: 'Batidos en agua',
        price: 1000,
        description: 'Papaya, piña, cas',
        stock: 10,
        category: 'bebidas',
        img: '../batidosagua.jpg'
    },
    {
        name: 'Batidos en leche',
        price: 1300,
        description: 'Papaya, piña, melon',
        stock: 10,
        category: 'bebidas',
        img: '../batidosleche.jpg'
    },
    {
        name: 'Tropical',
        price: 1200,
        description: 'Frutas, te frio, te blanco, te limon',
        stock: 10,
        category: 'bebidas',
        img: '../tropical.jpg'
    },
    {
        name: 'Gaseosa',
        price: 1300,
        description: 'CocaCola, Gin, Everesst',
        stock: 10,
        category: 'bebidas',
        img: '../gaseosa.jpg'
    },
    {
        name: 'Coctel',
        price: 3000,
        description: 'lorem lorem lorem',
        stock: 8,
        category: 'bebidas',
        img: '../coctel.jpg'
    },
    {
        name: 'Olla de carne',
        price: 4500,
        description: 'Disponible los domingos**',
        stock: 10,
        category: 'sopas',
        img: '../olladecarne.webp'
    },
    {
        name: 'Sopa Azteca',
        price: 3700,
        description: 'Tradicional',
        stock: 10,
        category: 'sopas',
        img: '../sopaazteca.jpeg'
    },
    {
        name: 'Sopa negra',
        price: 2500,
        description: 'Tradicional',
        stock: 10,
        category: 'sopas',
        img: '../sopanegra.jpg'
    },
    {
        name: 'Sustancia de pollo',
        price: 2500,
        description: 'Tradicional',
        stock: 10,
        category: 'sopas',
        img: '../sustanciapollo.jpg'
    },
    {
        name: 'Sopa de mariscos',
        price: 4500,
        description: 'En agua o en leche',
        stock: 10,
        category: 'sopas',
        img: '../sopamariscos.jpg'
    },
    {
        name: 'Arros de la casa (cantones)',
        price: 3700,
        description: 'Arroz cantones al estilo Vaca Flaca',
        stock: 10,
        category: 'arroces',
        img: '../cantones.jpg'
    },
    {
        name: 'Arroz con pollo o cerdo',
        price: 3700,
        description: 'Acopañado de papas y ensalada verde',
        stock: 10,
        category: 'arroces',
        img: '../arrozconpollo.jpg'
    },
    {
        name: 'Arroz con mariscos',
        price: 5000,
        description: 'Acopañado de papas y ensalada verde',
        stock: 10,
        category: 'arroces',
        img: '../arrozmariscos.jpg'
    },
    {
        name: 'Arroz con camarones',
        price: 4500,
        description: 'Acopañado de papas y ensalada verde',
        stock: 10,
        category: 'arroces',
        img: '../arrozcamarones.jpg'
    },
    {
        name: 'Camarones con arroz',
        price: 5000,
        description: 'Acopañado de papas y ensalada verde',
        stock: 10,
        category: 'arroces',
        img: '../camarones.jpg'
    },
    {
        name: 'Nachos',
        price: 3800,
        description: 'Carne de res, pollo o mixto',
        stock: 10,
        category: 'comidasrapidas',
        img: '../nachos.jpg'
    },
    {
        name: 'Hamburguesa con papas',
        price: 3800,
        description: 'Carne de res o pollo',
        stock: 10,
        category: 'comidasrapidas',
        img: '../hamburguesa.jpg'
    },
    {
        name: 'Papas supremas',
        price: 3500,
        description: 'Carne de res, pollo o mixto',
        stock: 10,
        category: 'comidasrapidas',
        img: '../papassupremas.jpg'
    },
    {
        name: 'Fajitas de pollo empanizado',
        price: 3800,
        description: 'Con maypnesa de la casa',
        stock: 10,
        category: 'comidasrapidas',
        img: '../fajitasdepollo.jpg'
    },
    {
        name: 'Dedos de pezcado',
        price: 4000,
        description: 'Con mayonesa de la casa',
        stock: 10,
        category: 'comidasrapidas',
        img: '../dedosdepezcado.jpg'
    },
    {
        name: 'Chicharrones',
        price: 4800,
        description: 'Patacones, yuca frita, frijoles molidos, ensalada verde',
        stock: 10,
        category: 'platosfuertes',
        img: '../chicharrones.jpg'
    },
    {
        name: 'Chifrijo',
        price: 3600,
        description: 'Tradicional',
        stock: 10,
        category: 'platosfutertes',
        img: '../chifrijo.jpg'
    },
    {
        name: 'Chifrijo',
        price: 3600,
        description: 'Tradicional',
        stock: 10,
        category: 'platosfutertes',
        img: '../chifrijo.jpg'
    },
    {
        name: 'Casado',
        price: 3500,
        description: 'Tradicional',
        stock: 10,
        category: 'platosfutertes',
        img: '../casado.png'
    },
    {
        name: 'Cordon Blue',
        price: 3600,
        description: '2 acompañamientos',
        stock: 10,
        category: 'platosfutertes',
        img: '../cordonblue.jpg'
    },
    {
        name: 'Pollo parmesano',
        price: 4800,
        description: 'Sobre pasta conpapas y arroz',
        stock: 10,
        category: 'platosfuertes',
        img: '../Parmesano.jpg'
    },
    {
        name: 'Filet de pezcado empanizado',
        price: 5000,
        description: 'Arroz, papas y ensalada verde',
        stock: 10,
        category: 'platosfutertes',
        img: '../filetpezcado.jpg'
    },
    {
        name: 'Filet de pollo en salsa blanca',
        price: 4800,
        description: '2 acompañamientos',
        stock: 10,
        category: 'platosfuetes',
        img: '../pollosalsablanca.jpg'
    },
    {
        name: 'Camarones Empanizados',
        price: 5000,
        description: 'Papas y aderezo',
        stock: 10,
        category: 'platosfuetes',
        img: '../camaronesempanizados.jpg'
    },
    {
        name: 'Mariscada',
        price: 5000,
        description: '2 acompañamientos',
        stock: 10,
        category: 'platosfuetes',
        img: '../mariscada.jpg'
    },
    {
        name: 'Fajitas miztas',
        price: 4000,
        description: 'Papas y ensalada',
        stock: 10,
        category: 'platosfuetes',
        img: '../fajitasmixtas.jpg'
    },
    {
        name: 'Costilla al horno',
        price: 5000,
        description: '3 acompañamientos',
        stock: 10,
        category: 'especialidades',
        img: '../costilla.jpg'
    },
    {
        name: 'Filet de pezcado con salsa de camarones',
        price: 4800,
        description: '3 acompañamientos',
        stock: 10,
        category: 'especialidades',
        img: '../filetpezcadosalsa.jpg'
    },
    {
        name: 'Fajitas Jalapeñas',
        price: 5000,
        description: '3 acompañamientos',
        stock: 10,
        category: 'especialidades',
        img: '../fajitasjalapenas.jpg'
    },
    {
        name: 'Mar y Tierra',
        price: 10000,
        description: 'Corte de carne a elección, camarones, salsa de la casa t 2 acompañamientos',
        stock: 10,
        category: 'especialidades',
        img: '../marytierra.jpg'
    },
    {
        name: 'Pasta con jamon y pollo en salsa blanca',
        price: 5000,
        description: 'Acompañamientos disponibles',
        stock: 10,
        category: 'especialidades',
        img: '../pastajamon.jpg'
    },
    {
        name: 'Pasta con camarones en salsa roja o blanca',
        price: 5000,
        description: 'Papas y aderezo',
        stock: 10,
        category: 'especialidades',
        img: '../pastacamarones.jpg'
    },
    {
        name: 'Pasta con camarones en salsa roja o blanca',
        price: 5000,
        description: 'Papas y aderezo',
        stock: 10,
        category: 'especialidades',
        img: '../pastamariscos.jpg'
    },
    {
        name: 'Pasta tres quesos',
        price: 5000,
        description: 'Papas y aderezo',
        stock: 10,
        category: 'especialidades',
        img: '../pastatresquesos.jpg'
    }
];

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



