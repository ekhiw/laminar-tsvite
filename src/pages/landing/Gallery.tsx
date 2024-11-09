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
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Swiper, SwiperSlide } from 'swiper/react';
import portoImage1 from "../../assets/porto1.jpg";
import portoImage2 from "../../assets/porto2.jpg";
import portoImage3 from "../../assets/porto3.jpg";
import portoImage4 from "../../assets/porto4.jpg";
import portoImage5 from "../../assets/porto5.jpg";
import portoImage6 from "../../assets/porto6.jpg";
import portoImage7 from "../../assets/porto7.jpg";
import portoImage8 from "../../assets/porto8.jpg";
import portoImage9 from "../../assets/porto9.jpg";
import portoImage10 from "../../assets/porto10.jpg";
import portoImage11 from "../../assets/porto11.png";
import portoImage12 from "../../assets/porto12.png";

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
          title: ' ',
          text: " ",
          image:`${portoImage1}`,
        },
        {
          title: ' ',
          text: " ",
          image:`${portoImage2}`,
        },
        {
          title: ' ',
          text: " ",
          image:`${portoImage3}`,
        },
        {
          title: ' ',
          text: " ",
          image:`${portoImage4}`,
        },
        {
          title: ' ',
          text: " ",
          image:`${portoImage5}`,
        },
        {
          title: ' ',
          text: " ",
          image:`${portoImage6}`,
        },
        {
          title: ' ',
          text: " ",
          image:`${portoImage7}`,
        },
        {
          title: ' ',
          text: " ",
          image:`${portoImage8}`,
        },
        {
          title: ' ',
          text: " ",
          image:`${portoImage9}`,
        },
        {
          title: ' ',
          text: " ",
          image:`${portoImage10}`,
        },
        {
          title: ' ',
          text: " ",
          image:`${portoImage11}`,
        },
        {
          title: ' ',
          text: " ",
          image:`${portoImage12}`,
        },
      ]

    return (
        <VStack
        mb={12}
        w={'full'}>
            <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'}>
              Acara sebelumnya
            </chakra.h1>
            <Flex
            w={'full'}
            height={['50vh' , '80vh']}
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
                                overflow={["hidden", "hidden"]}>
                                  <LazyLoadImage
                                  alt={card.title}
                                  src={card.image}/>
                                </Box>
                                
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Flex>
        </VStack>
    )
}