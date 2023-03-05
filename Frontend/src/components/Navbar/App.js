import React from "react";
import { Navbar, Button, Link, Text, Card, Spacer, Radio, useTheme } from "@nextui-org/react";
import { Layout } from "./Layout.js";
import { VariantsSelectorWrapper } from "./VariantsSelectorWrapper.js";
import login from '../login'

export default function App() {
  const [variant, setVariant] = React.useState("default");
  const [activeColor, setActiveColor] = React.useState("primary");

  const {isDark} = useTheme();

  const variants = [
    "default",
    "highlight",
    "highlight-solid",
    "underline",
    "highlight-rounded",
    "highlight-solid-rounded",
    "underline-rounded",
  ];

  const colors = ["primary", "secondary", "success", "warning", "error"];
  
  return (
    <Layout>
      <Navbar isBordered={isDark} variant="sticky">
        <Navbar.Brand>
        <Card.Image src='logo.jpg' css={{height:"55px"}}></Card.Image>

         
        </Navbar.Brand>
        <Navbar.Content activeColor={"error"}  hideIn="xs" variant={"highlight-solid"}  css={{ fontSize: "20px", fontFamily: "Roboto", }}>
          <Navbar.Link href="/ceramica">Cerámica</Navbar.Link>
          <Navbar.Link isActive href="Impresion3d">Impresión 3D</Navbar.Link>
          <Navbar.Link href="/Sublimacion">Sublimación</Navbar.Link>
          <Navbar.Link href="/Madera">Madera</Navbar.Link>
          <Navbar.Link href="/Insumos">Insumos</Navbar.Link>
          <Navbar.Link href="/Novedades">Novedades</Navbar.Link>
          <Navbar.Link href="/Mas">Más</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Iniciar
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} color={activeColor} href="#" >
              Soy nuevo
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
   
    </Layout>
  )
}
