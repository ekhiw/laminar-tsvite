import {
  VStack,
  Container,
  Stack,
  chakra,
  Text,
  useTheme,
  Flex,
  Box
} from '@chakra-ui/react';
import NavBar from "../../components/NavBar";
import Hero from "./Hero";
import Features from "./Features";
import Footer from '../../components/Footer';
import {GlowCard} from '../../components/GlowCard';
import BasicStat from './Stats'
import ekhiw from "../../assets/ekhiw.jpg";
import { AnimatedBackground } from '../../components/AnimatedBackground';

export default function Landing(){
  const theme = useTheme();
  
  return (
    <Box pos={"relative"}>
      <AnimatedBackground />
      <VStack>
        <NavBar />
        <Hero />
        <Features />
        <BasicStat />
        <Flex
          my={16}
          w={["90%", "70%"]}
          >
            <VStack spacing={4} alignItems={"center"} justifyContent={"center"}>
              <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'}>
                Siapa saja pembicaranya?
              </chakra.h1>
              <GlowCard
              cardType="avatar"
              heading="Hi, Saya Muhammad Dimas Alifianda 👋"
              description="Saya adalah seorang bajak laut yang suka menyanyikan lagu-lagu. Jika kamu ingin mengikuti saya silahkan ikuti saya di youtube saya."
              avatar={ekhiw}
              />
              <GlowCard
              cardType="avatar"
              heading="Halo, Saya Ekky Hermestian IW"
              description="Saya adalah seorang Software Engineer. Berpengalaman membuat berbagai macam aplikasi dan website untuk perusahaan multinasional, dengan tim dari beberapa negara."
              avatar={ekhiw}
              />
            </VStack>
        </Flex>
        <Footer />
      </VStack>
    </Box>
  )
}