import {
    Box,
    Flex,
    Heading,
    HStack,
    Icon,
    Image,
    Link,
    Skeleton,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react';
import * as React from 'react';
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import { Link as ReactRouterLink } from "react-router-dom";
  
export const NotFound = () => {
    return (
        <Box maxW="7xl" mx="auto" px={{ base: '0', lg: '12' }} py={{ base: '0', lg: '12' }}>
          <Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={{ base: '0', lg: '20' }}>
            <Box
              width={{ lg: 'sm' }}
              transform={{ base: 'translateY(-50%)', lg: 'none' }}
              bg={{ base: useColorModeValue('red.50', 'gray.700'), lg: 'transparent' }}
              mx={{ base: '6', md: '8', lg: '0' }}
              px={{ base: '6', md: '8', lg: '0' }}
              py={{ base: '6', md: '8', lg: '12' }}
            >
              <Stack spacing={{ base: '8', lg: '10' }}>
                <Stack spacing={{ base: '2', lg: '4' }}>
                  <Heading size="xl" color={useColorModeValue('red.500', 'red.300')}>
                    oops! page not found.
                  </Heading>
                  <Heading size="xl" fontWeight="normal">
                    Relax and get back to home page
                  </Heading>
                </Stack>
                <HStack spacing="3">
                  <Link as={ReactRouterLink} to="/" color={useColorModeValue('red.500', 'red.300')} fontWeight="bold" fontSize="lg">
                    Go to Home
                  </Link>
                  <Icon color={useColorModeValue('red.500', 'red.300')} as={FaArrowRight} />
                </HStack>
                <HStack spacing="3">
                  <Link href='https://unsplash.com/' isExternal>
                    Image by Unsplash
                  </Link>
                  <Icon as={FaExternalLinkAlt} />
                </HStack>
              </Stack>
            </Box>
            <Flex flex="1" overflow="hidden">
              <Image
                src="https://source.unsplash.com/random/?cat&300x450"
                alt="Lovely Image"
                fallback={<Skeleton />}
                maxH="450px"
                minW="300px"
                objectFit="contain"
                flex="1"
              />
              <Image
                display={{ base: 'none', sm: 'initial' }}
                src="https://source.unsplash.com/random/?monkey"
                alt="Lovely Image"
                fallback={<Skeleton />}
                maxH="450px"
                objectFit="contain"
              />
            </Flex>
          </Stack>
        </Box>
    )
}

export default NotFound;