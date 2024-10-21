import {
  VStack,
  Stack,
  Text
} from '@chakra-ui/react';
import NavBar from "../../components/NavBar";
import Hero from "./Hero";
import Features from "./Features";

export default function Landing(){
  
  return (
    <VStack>
        <NavBar />
        <Hero />
        <Features />
    </VStack>
  )
}