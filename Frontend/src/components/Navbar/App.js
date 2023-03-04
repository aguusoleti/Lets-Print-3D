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
        <Navbar.Content activeColor={"error"} hover="errror" hideIn="xs" variant={"highlight-solid"} css={{ fontSize: "20px", fontFamily: "Roboto"}}>
          <Navbar.Link href="#">Cerámica</Navbar.Link>
          <Navbar.Link isActive href="#">Impresión 3D</Navbar.Link>
          <Navbar.Link href="#">Sublimación</Navbar.Link>
          <Navbar.Link href="#">Madera</Navbar.Link>
          <Navbar.Link href="#">Insumos</Navbar.Link>
          <Navbar.Link href="#">Novedades</Navbar.Link>
          <Navbar.Link href="#">Más</Navbar.Link>
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
      {/* <VariantsSelectorWrapper>
        <Card css={{px: "$6", maxW: "90%"}}>
          <Card.Body>
            <Radio.Group
              defaultValue="default"
              label="Select active variant"
              orientation="horizontal"
              size="sm"
              value={variant}
              onChange={setVariant}
            >
              {variants.map((variant) => (
                <Radio key={variant} color={activeColor} value={variant}>
                  {variant}
                </Radio>
              ))}
            </Radio.Group>
            <Spacer y={0.5} />
            <Radio.Group
              defaultValue="default"
              label="Select active color"
              orientation="horizontal"
              size="sm"
              value={activeColor}
              onChange={setActiveColor}
            >
              {colors.map((color) => (
                <Radio key={color} color={activeColor} value={color}>
                  {color === "primary" ? "primary (default)" : color}
                </Radio>
              ))}
            </Radio.Group>
          </Card.Body>
        </Card>
      </VariantsSelectorWrapper>       */}
    </Layout>
  )
}
