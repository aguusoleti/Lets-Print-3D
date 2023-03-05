import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  footerNav: {
    position: "absolute",
    bottom: "0",
    width: "100%",
  },
  divisores:{
   contain :"center"
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer>
      <Container maxWidth="lg" className={classes.footerNav}>
        <Box py={6} display="flex" flexWrap="wrap" alignItems="center">
          <Link href="#" color="inherit" underline="none"></Link>
          <Box component="nav" className={classes.divisores}>
            <Link href="#" variant="body1" color="textPrimary">
              Hola
            </Link>
            <Link href="#" variant="body1" color="textPrimary">
              Como
            </Link>
            <Link href="#" variant="body1" color="textPrimary">
              Estas
            </Link>
            <Link href="#" variant="body1" color="textPrimary">
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
  );
}
