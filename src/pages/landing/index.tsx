import {
  VStack,
  useTheme,
  Flex,
  Box
} from '@chakra-ui/react';
import NavBar from "../../components/NavBar";
import Hero from "./Hero";
import Features from "./Features";
import Footer from '../../components/Footer';
import BasicStat from './Stats'
import { AnimatedBackground } from '../../components/AnimatedBackground';
import Person from './Person';
import Gallery from './Gallery';
import Poster from './Poster';

export default function Landing(){
  const theme = useTheme();
  
  return (
    <Box pos={"relative"}>
      <AnimatedBackground />
      <VStack>
        <NavBar />
        <Hero />
        <Features />
        <Poster />
        <BasicStat />
        <Person />
        <Gallery />
        <Footer />
      </VStack>
    </Box>
  )
}