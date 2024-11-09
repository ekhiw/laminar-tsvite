import {
    Box,
    chakra,
    Flex,
    VStack,
  } from '@chakra-ui/react'
import { GlowCard } from '../../components/GlowCard'
import ekhiw from "../../assets/ekhiw.jpg";
import dimas from "../../assets/dimas.jpg";

export default function Person() {
    return (
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
            description="Saya adalah seorang komputer expert dan pakar permainan edukasi,pembicara science goes to school, sejak tahun 2014."
            avatar={dimas}
            />
            <GlowCard
            cardType="avatar"
            heading="Halo, Saya Ekky Hermestian IW"
            description="Saya adalah seorang Software Engineer. Berpengalaman membuat berbagai macam aplikasi dan website untuk perusahaan multinasional, dengan tim dari beberapa negara."
            avatar={ekhiw}
            />
          </VStack>
      </Flex>
    )
  }