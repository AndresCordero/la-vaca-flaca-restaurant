import React, { useRef, useEffect, useState } from 'react';
import { Routes, Route, useLocation, matchPath } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './styles/Animaciones.css';

import CartContainer from './CartContainer.';
import Home from './Home';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import ZonaBikerContainer from './ZonaBikerContainer';
import Galeria from './Galeria';
import Contacto from './Contacto';
import Checkout from './Checkout';
import ErrorPage from './ErrorPage';

const AnimatedRoutes = () => {
    const location = useLocation();
    const nodeRef = useRef(null);
    const [prevPath, setPrevPath] = useState(location.pathname);

    useEffect(() => {
        setPrevPath(location.pathname);
    }, [location]);

    const isCategoryRoute = (path) => matchPath('/category/:categoryId', path);
    const wasCategoryRoute = isCategoryRoute(prevPath);
    const isNowCategoryRoute = isCategoryRoute(location.pathname);
    
    // Desactivar transición SOLO si es cambio entre categorías
    const disableTransition = wasCategoryRoute && isNowCategoryRoute;

    return (
        <SwitchTransition mode="out-in">
            <CSSTransition
                key={location.pathname}
                classNames={disableTransition ? 'fade' : 'fade'}
                timeout={disableTransition ? 0 : 300}
                nodeRef={nodeRef}
                unmountOnExit
            >
                <div ref={nodeRef} className="route-wrapper">
                    <Routes location={location}>
                        <Route path="/" element={<Home />} />
                        <Route path="/category/all" element={<ItemListContainer greeting="Todos los productos" />} />
                        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Estas viendo la categoria: " />} />
                        <Route path="/item/:id" element={<ItemDetailContainer />} />
                        <Route path="/zonabiker" element={<ZonaBikerContainer />} />
                        <Route path="/cart" element={<CartContainer />} />
                        <Route path="/galeria" element={<Galeria />} />
                        <Route path="/contacto" element={<Contacto />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </div>
            </CSSTransition>
        </SwitchTransition>
    );
};

export default AnimatedRoutes;
