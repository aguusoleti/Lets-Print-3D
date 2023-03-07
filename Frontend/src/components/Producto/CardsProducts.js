// import "../styles/Styles.scss";
import AppContext from "../../context/AppContext.js";
import { CgShoppingCart } from "react-icons/cg";
import { margin } from "@mui/system";
import Button from "@mui/material/Button";
import { Box, Modal, Typography } from "@mui/material";
import React, { useContext, useState } from "react";

const CardsProducts = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleCart = (item) => {
    addToCart(item);
  };

  const [showComponent, setShowComponent] = React.useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "16px",
  };
  return (
    <div>
      <Button
        key={"hola"}
        onClick={() => {
          setShowComponent(true);
          handleOpen();
        }}
        sx={{ color: "black", padding: "0px", width: "240px", height: "400px","&:hover": {
          backgroundColor: "transparent",
        },}}
        disableElevation
        disableTouchRipple
      >
        <div
          className="product-container"
          style={{
            backgroundColor: " rgba(186, 178, 178, 0.353)",
            marginTop: "20px",
            borderRadius: "40px 40px 10px 10px",
          }}
        >
          <img src={product.imageUrls} alt={product.imageUrls} />
          <div className="product-info">
            <div style={{ padding: "10px", fontFamily: "Roboto" }}>
              <p>${product.price}</p>
              <p >{product.name}</p>
            </div>
            <figure
              onClick={() => handleCart(product)}
              style={{
                width: "40px",
                borderRadius: "80%",
                height: "40px",
                borderRadius: "80%",
                marginRight: "10px",
              }}
            >
              {" "}
              <CgShoppingCart
                style={{ width: "28px", height: "30px", marginRight: "px" }}
              />
            </figure>
          </div>
        </div>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            style={{
              backgroundColor: " rgba(186, 178, 178, 0.353)",
              marginTop: "20px",
              borderRadius: "40px 10px 10px 40px",
              width: "800px",
            }}
          >
            <div>
              <div style={{ display: "flex", width: "800px", height: "400px" }}>
                <img
                  src={product.imageUrls}
                  alt={product.imageUrls}
                  style={{
                    borderRadius: "40px 0px 0px 40px",
                    width: "400px",
                    height: "400px",
                  }}
                />
                <div style={{ padding: "10px", fontFamily: "Roboto" }}>
                  <Box sx={{}}>
                    <Typography style={{ fontSize: "40px",textAlign:"center" }}>
                      {product.name}
                    </Typography>
                    <Typography style={{ fontSize: "20px", marginTop: "30px" }}>
                      {product.description}
                    </Typography>
                    <Typography style={{ fontSize: "20px", marginTop: "30px" }}>
                      Stock: {product.stock}
                    </Typography>
                    <Typography>${product.price}</Typography>
                  </Box>

                  <Button style={{ fontSize: "20px", marginTop: "30px",textAlign:"center" }}>
                    Agrergar Al Carrito
                  </Button>
                </div>
              </div>{" "}
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default CardsProducts;
