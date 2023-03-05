import { useState } from "react";

const initialState = {
    cart: [],
}

const useInitialState = () => { //este es para que cuando tomemos la accion de agregar al carrito, esta se muestre y pueda darle diferentes ussos al agregar al carrito


    const [state, setState] = useState (initialState);  //tiene un estado inicial y lo inicializo con el initial state

    const addToCart = (payload) => { 
        setState({ 
            ...state, //le digo que me mantenga el estado inicial, porque puede que hayn otros productos o infomacion del comprador
            cart: [...state.cart, payload] // creame la cart con la informacion nueva y la que ya tenia, no la borres
        });
    } // ahora vamos al CardsProduct y al App.jsx para incorporarlo en AppContext.Provider
    
    
    const removeFromCart= (payload) => {
        setState({
            ...state, //traigo el estado inicial
            cart: state.cart.filter(items => items !== payload) // ahora filtro y busco el item y elimino este item
        })
    }

    return {
        state,
        addToCart,
        removeFromCart, // este lo voy a usar en el order item con la imagen de close
    }
}


export default useInitialState