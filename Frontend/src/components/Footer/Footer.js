import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  footerNav: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer style={{ position: 'fixed', bottom: 0, width: '100%',backgroundColor: 'rgba(186, 178, 178, 0.353)',size:"20px" }}>
      <Container maxWidth="lg">
        <Box py={6} display="flex" flexWrap="wrap" alignItems="center">
          <Link href="#" color="inherit" underline="none"></Link>
          <Box component="nav" className={classes.footerNav}>
            <Link href="#" color="textPrimary">
              Hola
            </Link>
            <Link href="#" color="textPrimary">
              Como
            </Link>
            <Link href="#" color="textPrimary">
              Estas
            </Link>
            <Link href="#" color="textPrimary">
              Tu
            </Link>
          </Box>
          <Typography
            color="textSecondary"
            component="p"
            variant="caption"
            gutterBottom={false}
          ></Typography>
        </Box>
      </Container>
    </footer>
 
  )}