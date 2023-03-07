import * as React from 'react';
// import { Carousel, CarouselItem } from '@mui/lab';
import { Paper, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel'


function Banner() {
  return (
    <Carousel>
    <Paper
      elevation={3}
      sx={{ backgroundColor: 'rgba(150, 178, 178, 0.353)', color: 'white', padding: '20px', marginTop:'100px' }}
    >
      <Typography variant="h5">Bienvenido al sitio web</Typography>
      <Typography variant="body1">
        Aquí encontrarás todo lo que necesitas saber sobre nuestro producto.
      </Typography>
    </Paper>

    </Carousel>
  );
}

export default Banner;