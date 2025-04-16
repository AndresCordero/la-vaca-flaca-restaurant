import React from 'react'
import { NavLink } from 'react-router-dom'


const categories = [
    { name: 'Todos los productos', path: '/category/All' },
    { name: 'Desayunos', path: '/category/Desayunos' },
    { name: 'Entradas', path: '/category/Entradas' },
    { name: 'Bebidas', path: '/category/Bebidas' },
    { name: 'Sopas', path: '/category/Sopas' },
    { name: 'Arroces', path: '/category/Arroces' },
    { name: 'Comidas rápidas', path: '/category/Comidas rapidas' },
    { name: 'Platos fuertes', path: '/category/Platos fuertes' },
    { name: 'Especialidades', path: '/category/Especialidades' }
]

const CategorySelector = () => {
    return (
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4 bg-dark py-4 rounded shadow">
            {categories.map((cat) => (
                <NavLink
                    key={cat.name}
                    to={cat.path}
                    className={({ isActive }) =>
                        `btn btn-outline-light ${isActive ? 'active fw-bold' : ''}`
                    }
                >
                    {cat.name}
                </NavLink>
            ))}
        </div>
    )
}

export default CategorySelector
