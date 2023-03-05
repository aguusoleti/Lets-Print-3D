import React from "react";
import { Navbar, Button, Link, Text, Card, Spacer, Radio, useTheme } from "@nextui-org/react";
import { Layout } from "./Layout.js";

export default function App() {
  const [variant, setVariant] = React.useState("default");
  const [activeColor, setActiveColor] = React.useState("primary");
  const [isActive, setIsActive] = React.useState(false);
  const {isDark} = useTheme();

  const variants = "highlight-solid";

  const colors = "error";
  const setColor = () => {
    setIsActive(!isActive);
  };
  
  return (
    <Layout>
      <Navbar isBordered={isDark} variant="sticky">
        <Navbar.Brand>
        <Card.Image src='logo.png' css={{height:"100px"}}></Card.Image>

         
        </Navbar.Brand>
        <Navbar.Content activeColor={activeColor} hideIn="xs" variant={variant}  css={{ fontSize: "20px", fontFamily: "Roboto", }}>
          <Navbar.Link  onClick={setColor} isActive={isActive} href="/">Cerámica</Navbar.Link>
          <Navbar.Link  onClick={setColor} isActive={isActive} href="/">Impresión 3D</Navbar.Link>
          <Navbar.Link onClick={setColor} isActive={isActive} href="/">Sublimación</Navbar.Link>
          <Navbar.Link onClick={setColor} isActive={isActive} href="/Madera">Madera</Navbar.Link>
          <Navbar.Link onClick={setColor} isActive={isActive} href="/Insumos">Insumos</Navbar.Link>
          <Navbar.Link onClick={setColor} isActive={isActive} href="/Novedades">Novedades</Navbar.Link>
          <Navbar.Link onClick={setColor} isActive={isActive} href="/Mas">Más</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Iniciar
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} onClick={activeColor}  href="#" >
              Soy nuevo
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
   
    </Layout>
  )
}
