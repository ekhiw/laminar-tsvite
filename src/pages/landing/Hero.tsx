import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react'
import image from "../../assets/bg.jpg"; 

export default function Hero() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      id="hero"
      background={`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image})`}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            Jelajahi Masa Depan dengan Teknologi dan Kreativitas
          </Text>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: 'md', md: 'lg' })}>
            Bersama LAMINAR jadilah generasi penerus bangsa yang siap menghadapi persaingan
          </Text>
          <Stack direction={'row'}>
            <Button
                px={4}
                fontSize={'sm'}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                bg: 'blue.500',
                }}
                _focus={{
                bg: 'blue.500',
                }}>
                Lihat isi seminar
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  )
}