import {
    Box,
    Button,
    Flex,
    Heading,
    Stack,
    Text,
    VStack,
    HStack,
    useColorModeValue,
    Avatar,
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import { keyframes } from '@emotion/react'

interface CardProps {
    heading: string
    description: string
    icon?: ReactElement
    href?: string
    avatar?: string
    name?: string
    cardType: 'icon' | 'avatar'
}

export const GlowCard = ({ heading, description, icon, href, avatar, name , cardType }: CardProps) => {
  const bgColor = useColorModeValue('white', "linear(gray.900, gray.700, teal.900)")
  const iconBgColor = useColorModeValue('gray.100', 'gray.700')

  const pulseRing = keyframes`
	0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`

    return (
      <Box
        maxW={cardType === 'icon' ? { base: 'full', md: '275px' } : "full"}
        w={'full'}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="0 0 2px 1px teal"
      bgGradient={bgColor}
      p={5}
    >
      {cardType === 'icon' ? (
        <Stack spacing={4}>
          <Flex align="center">
            <Flex
              w={12}
              h={12}
              align={'center'}
              justify={'center'}
              color={'white'}
              rounded={'full'}
              bg={iconBgColor}
              mr={4}
            >
              {icon}
            </Flex>
            <Heading size="md">{heading}</Heading>
          </Flex>
          <Text fontSize={'sm'}>{description}</Text>
          {href && (
            <Button variant={'link'} colorScheme={'blue'} size={'sm'} alignSelf="flex-start">
            Selengkapnya
          </Button>
          )}
        </Stack>
      ) : (
        <HStack align="start" spacing={4}>
            <Flex
            justifyContent="center"
            alignItems="center"
            >
                <Box
                    as="div"
                    position="relative"
                    w={'96px'}
                    h={'96px'}
                    _before={{
                    content: "''",
                    position: 'relative',
                    display: 'block',
                    width: '300%',
                    height: '300%',
                    boxSizing: 'border-box',
                    marginLeft: '-100%',
                    marginTop: '-100%',
                    borderRadius: '50%',
                    bgColor: 'teal',
                    animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
                    }}>
                    <Avatar size="full" position="absolute" top={0}  name={name} src={avatar}/>
                </Box>
            </Flex>
            <Stack spacing={2}>
                <Heading size="md">{heading}</Heading>
                <Text fontSize={'sm'}>{description}</Text>
            </Stack>
        </HStack>
      )}
    </Box>
  )
}
