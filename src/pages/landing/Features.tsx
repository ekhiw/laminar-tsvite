import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import {
  FcAbout,
  FcSmartphoneTablet,
  FcCollaboration,
  FcElectronics,
  FcEngineering,
  FcManager,
} from 'react-icons/fc';
import {GlowCard} from "../../components/GlowCard"


export default function Features() {
  return (
    <Box
    p={4}
    id='features'
    >
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Laminar
        </Heading>
        <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'lg' }}>
          Seminar tentang AI, Software, dan IoT.
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <GlowCard
            cardType='icon'
            heading={'Seminar AI'}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={'Seminar ini akan membahas tentang AI, Software, dan IoT.'}
            href={'#'}
          />
          <GlowCard
            cardType='icon'
            heading={'Pelatihan Robotik, IoT, dan  3D printing'}
            icon={<Icon as={FcElectronics} w={10} h={10} />}
            description={'Khusus kamu yang ingin mempersiapkan diri untuk industri masa depan.'}
            href={'#'}
          />
          <GlowCard
            cardType='icon'
            heading={'Pelatihan Software'}
            icon={<Icon as={FcSmartphoneTablet} w={10} h={10} />}
            description={'Jika kamu ingin membuat aplikasi untuk Android atau iOS, ataupun website disini tempatnya.'}
            href={'#'}
          />
          <GlowCard
            cardType='icon'
            heading={'Neptune Science Fair'}
            icon={<Icon as={FcEngineering} w={10} h={10} />}
            description={'Pertunjukan ilmiah dengan berbagai macam koleksi eksperimen yang bisa dicoba langsung oleh murid.'}
            href={'#'}
          />
        </Flex>
      </Container>
    </Box>
  )
}