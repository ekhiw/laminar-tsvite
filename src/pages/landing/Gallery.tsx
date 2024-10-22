import {
    chakra,
    Text,
    Flex,
    Container,
    Box,
    Stack,
    Heading,
    VStack
} from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './gallery.css'

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function Gallery() {
    const cards = [
        {
          title: 'Neptune - SDN 01 Curug ',
          text: "Diikuti oleh 800 siswa pada 23 Oktober 2019",
          image:
            `https://picsum.photos/id/${Math.ceil(Math.random()*100)}/640/360`,
        },
        {
          title: 'Neptune - SDN 04 Tasik ',
          text: "Diikuti oleh 800 siswa pada 23 Oktober 2019",
          image:
            `https://picsum.photos/id/${Math.ceil(Math.random()*1000)}/640/360`,
        },
        {
          title: 'Neptune - SDN 42 Kembuy ',
          text: "Diikuti oleh 800 siswa pada 23 Oktober 2019",
          image:
            `https://picsum.photos/id/${Math.ceil(Math.random()*100)}/640/360`,
        },
        {
          title: 'Neptune - SDN 06 Cirebon  ',
          text: "Diikuti oleh 800 siswa pada 23 Oktober 2019",
          image:
            `https://picsum.photos/id/${Math.ceil(Math.random()*100)}/640/360`,
        },
      ]

    return (
        <VStack
        w={'full'}>
            <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'}>
              Acara sebelumnya
            </chakra.h1>
            <Flex
            w={'full'}
            height={'50vh'}
            px={[8,24]}
            >
                <Swiper
                spaceBetween={30}
                effect={'fade'}
                autoplay={true}
                navigation={false}
                pagination={{
                clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className="mySwiper"
                >
                    {
                        cards.map((card, index) => (
                            <SwiperSlide 
                            key={`${card.title}${index}`}
                            className='swiper-slide'
                            >
                                <Box
                                h={'full'}
                                position="relative"
                                backgroundPosition="center"
                                backgroundRepeat="no-repeat"
                                backgroundSize="cover"
                                rounded={['xl', '2xl']}
                                backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${card.image})`}>
                                    <Container h={'full'} w={'full'} position="relative">
                                        <Stack
                                            spacing={6}
                                            w={'full'}
                                            maxW={'lg'}
                                            px={[12,0]}
                                            position="absolute"
                                            top="50%"
                                            transform="translate(0, -50%)">
                                            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                                            {card.title}
                                            </Heading>
                                            <Text fontSize={{ base: 'md', lg: 'lg' }} color="white">
                                            {card.text}
                                            </Text>
                                        </Stack>
                                    </Container>
                                </Box>
                                
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Flex>
        </VStack>
    )
}