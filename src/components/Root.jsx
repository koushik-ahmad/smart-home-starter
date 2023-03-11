import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export const ProductContext = createContext([]);

const Root = () => {
    const products = useLoaderData();
    console.log(products);

    return (
        <ProductContext.Provider value={products}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </ProductContext.Provider>
    );
};

export default Root;