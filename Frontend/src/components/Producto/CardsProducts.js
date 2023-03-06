import * as React from 'react';
// import AspectRatio from '@mui/joy/AspectRatio';
// import Card from '@mui/joy/Card';
// import CardOverflow from '@mui/joy/CardOverflow';
// import Divider from '@mui/joy/Divider';
// import Typography from '@mui/joy/Typography';
// import IconButton from '@mui/joy/IconButton';
// import Link from '@mui/joy/Link';
// import Favorite from '@mui/icons-material/Favorite';
// import AppContext from '../../context/AppContext.js'
import  { useContext } from "react";
import "../../styles/Styles.scss";
import AppContext from "../../context/AppContext";
import carrito from "../../assets/icons/icon_shopping_cart.svg";

const ProductsStock = ({ product }) => {
  const { addToCart } = useContext(AppContext);
  
  const handleCart = (item) => {
    addToCart(item);
  };
 function CardsProducts({product}) {
  return (
    // <Card variant="outlined" sx={{ width: 320 }}>
    //   <CardOverflow>
    //     <AspectRatio ratio="2">
    //       <img
    //         src={product.imageUrls}
    //         alt=""
    //       />
    //     </AspectRatio>
    //     <IconButton
    //       aria-label="Like minimal photography"
    //       size="md"
    //       variant="solid"
    //       color="danger"
    //       sx={{
    //         position: 'absolute',
    //         zIndex: 2,
    //         borderRadius: '50%',
    //         right: '1rem',
    //         bottom: 0,
    //         transform: 'translateY(50%)',
    //       }}
    //     >
    //       <Favorite />
    //     </IconButton>
    //   </CardOverflow>
    //   <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
    //  {product.name}
    //   </Typography>
     
    //   <Divider inset="context" />
    //   <CardOverflow
    //     variant="soft"
    //     sx={{
    //       display: 'flex',
    //       gap: 1.5,
    //       py: 1.5,
    //       px: 'var(--Card-padding)',
    //       bgcolor: 'background.level1',
    //     }}
    //   >
    //     <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
    //       ${product.price}
    //     </Typography>
    //     <Divider orientation="vertical" />
        
    //   </CardOverflow>
    // </Card>
    <div className="product-container">
      <img src={product.imageUrls} alt={product.imageUrls} />
      <div className="product-info">
        <div>
          <p>{product.name }</p>
          <p>${product.price}</p>
        </div>
        <figure onClick={() => handleCart(product)}>
          <img src={carrito} alt="" />
        </figure> 
      </div>
    </div>
  );
}
}

export default CardsProducts