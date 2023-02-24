//rsc 
import React from 'react';
import Comprar from '../components/Comprar';
import Header from '../components/Header';
import MisCarritos from '../components/MisCarritos';
import Products from '../containers/product';
import ProductDetail from '../containers/ProductDetail.jsx';
import MiCarrito from './MiCarrito';
import Mobile from '../components/Mobile';
import ProductsStock from '../components/ProductsStock';
import EditMyAccount from '../components/EditMyAccount';
import ResetPasword from '../components/ResetPasword';
import ResetPasword1 from '../components/ResetPasword1';
import Login from '../components/login';

const Home = () => {
    return (
        <>
        <Header/>
        <Login/>
        <EditMyAccount/>
        <Products/>
        <ProductDetail/>
        <MiCarrito/>
        <MisCarritos/>
        <Comprar/>
        <Mobile/>
        <ProductsStock/>
        <ResetPasword1/>
        <ResetPasword/>
        </>
    );
};

export default Home;