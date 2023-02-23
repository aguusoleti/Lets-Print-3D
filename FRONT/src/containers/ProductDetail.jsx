import React from "react";
import '../styles/Styles.scss';
import icon from '@icons/icon_close.png'
import bob from '@products/bob.jpeg'
import iconShopping from '@icons/icon_shopping_cart.svg'

const ProductDetail = () => {
  return (
    <aside className="product-detail">
      <div className="product-detail-close">
        <img src={icon} alt="close" />
      </div>
      <img src={bob} alt="bob" />
      <div className="info-producto">
        <p>$2.000</p>
        <p>Tazon Bob Esponja</p>
        <p>
          Tazon de ceramica apto para microondas, disponible en tamaño pequeño,
          grande y extra grande jdhfiurghjgfkwrhrgkljhterughertk agu te amo
        </p>
        <button type="button" className="primary-button add-to-cart-buttom">
          Agregar al carrito
          <img src={iconShopping} alt="carrito" />
        </button>
      </div>
    </aside>
  );
};

export default ProductDetail;
