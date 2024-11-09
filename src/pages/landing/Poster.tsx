import {
    Box,
    chakra,
    Flex,
    VStack,
  } from '@chakra-ui/react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import poster1 from "../../assets/poster1.jpeg";
import poster2 from "../../assets/poster2.jpeg";
import poster3 from "../../assets/poster3.jpeg";

export default function Poster() {

    return (
        <Flex
        my={16}
        w={["90%", "70%"]}
        >
          <VStack spacing={4} alignItems={"center"} justifyContent={"center"}>
            <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'}>
              Program Kami
            </chakra.h1>
            <Box
            rounded={['xl', '2xl']}
            overflow={["hidden", "hidden"]}>
                <LazyLoadImage
                alt={"poster1"}
                src={poster1}/>
            </Box>
            <Box
            rounded={['xl', '2xl']}
            overflow={["hidden", "hidden"]}>
                <LazyLoadImage
                alt={"poster1"}
                src={poster2}/>
            </Box>
            <Box
            rounded={['xl', '2xl']}
            overflow={["hidden", "hidden"]}>
                <LazyLoadImage
                alt={"poster1"}
                src={poster3}/>
            </Box>

          </VStack>
      </Flex>
    )

}