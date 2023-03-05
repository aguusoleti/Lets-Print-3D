import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import '@styles/Styles.scss';
import close from '@icons/icon_close.png'
import removeFromCart from '../hooks/useInitialState'

const OrderItem = ({ product }) => {
	const { removeFromCart } = React.useContext(AppContext)

	const handleRemove = item => {
		removeFromCart(item)
	}
    
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.nombre}</p>
			<p>${product.precio}</p>
			<img src={close} alt="close" onClick={()=>handleRemove(product)}/>
		</div>
	);
}

export default OrderItem;