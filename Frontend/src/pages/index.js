import * as React from 'react';
// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';
import { Text } from "@nextui-org/react";
import NavbarLayout from "../components/Navbar/App";
// import { useGlobalContext } from "@/hooks/useGlobalContext";
// import type { AppProps } from "next/app";


function HomePage() {
    return (
    
      
      <NextUIProvider>
          <NavbarLayout/>
          
      </NextUIProvider>
    
      )
  }
  
  export default HomePage