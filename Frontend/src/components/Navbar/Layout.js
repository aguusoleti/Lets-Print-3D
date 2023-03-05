import { Content } from "./Content.js"
import { Box } from "./Box.js";
import { Backdrop } from "@nextui-org/react";

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100%",
    }}
  >
    {children}
    <Content />
  </Box>
);
