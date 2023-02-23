//rsc 
import React from 'react';
import DesktopMenu from '../components/DesktopMenu';
import Header from '../components/Header';
import Products from '../containers/product';
import ProductDetail from '../containers/ProductDetail.jsx';
import MiCarrito from './MiCarrito';

const Home = () => {
    return (
        <>
        <Header/>,
        <Products/>
        <ProductDetail/>
        <MiCarrito/>
        <DesktopMenu/>
        </>
    );
};

export default Home;