import {
    Box,
    Flex,
    Text,
    IconButton,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  import { Logo } from "./Logo"
  import {ColorModeSwitcher} from "./ColorModeSwitcher";
  import { Link as ReactRouterLink } from 'react-router-dom';
  import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
  
  const scOffset = -70;
  const scDuration = 650;
  
  export default function NavBar() {
    const { isOpen, onToggle } = useDisclosure();
  
  
    return (
      <Box
        position={'fixed'}
        top={0}
        mt={8}
        mx={20}
        zIndex={'10'}>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          bgGradient={useColorModeValue('white', "linear(gray.900, gray.700, teal.900)")}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          minW={'90vw'}
          py={{ base: 2 }}
          px={{ base: 4, md:8}}
          border={0}
          borderStyle={'solid'}
          borderColor={useColorModeValue('teal.200', 'teal.900')}
          boxShadow="0 0 10px 5px teal"
          borderRadius={"lg"}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} align={'center'}>
            <Logo maxW={{base:'52px', md:'48px'}} pointerEvents="none" />
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <ColorModeSwitcher />
            {/*<Button*/}
            {/*  as={'a'}*/}
            {/*  fontSize={'sm'}*/}
            {/*  fontWeight={400}*/}
            {/*  variant={'link'}*/}
            {/*  href={'#'}>*/}
            {/*  Sign In*/}
            {/*</Button>*/}
            {/*<Button*/}
            {/*  display={{ base: 'none', md: 'inline-flex' }}*/}
            {/*  fontSize={'sm'}*/}
            {/*  fontWeight={600}*/}
            {/*  color={'white'}*/}
            {/*  bg={'pink.400'}*/}
            {/*  href={'#'}*/}
            {/*  _hover={{*/}
            {/*    bg: 'pink.300',*/}
            {/*  }}>*/}
            {/*  Sign Up*/}
            {/*</Button>*/}
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label+'bx'}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Box>{
                    navItem.isExternal == true ?
                    <Link 
                        href={navItem.href ?? '#' }
                        isExternal
                        key={navItem.label+'link'} py={2}>
                        {navItem.label}
                    </Link> :
                    <Link
                        as={ScrollLink}
                        spy={true} 
                        smooth={true}
                        duration={scDuration} 
                        offset={scOffset}
                        to={navItem.href ?? '#'}
                        p={2}
                        fontSize={'sm'}
                        fontWeight={500}
                        color={linkColor}
                        _hover={{
                        textDecoration: 'none',
                        color: linkHoverColor,
                        }}>
                        {navItem.label}
                    </Link>
                }</Box>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label+'snav'} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
      <Link
        as={ScrollLink}
        spy={true} 
        smooth={true}
        duration={scDuration} 
        offset={scOffset}
        to={href ?? '#'}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
            <Box>{
                navItem.isExternal == true ?
                <Link 
                    href={navItem.href ?? '#' }
                    isExternal
                    key={navItem.label+'l'} py={2}>
                        <Text
                            fontWeight={600}>
                            {navItem.label}
                        </Text>
                </Link> :
                <MobileNavItem key={navItem.label+'mnav'} {...navItem} />
            }</Box>
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={ScrollLink}
          spy={true} 
          smooth={true}
          duration={scDuration} 
          offset={scOffset}
          to={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Box>{
                    child.isExternal == true ?
                    <Link 
                        href={child.href ?? '#' }
                        isExternal
                        key={child.label} py={2}>
                        {child.label}
                    </Link> :
                    <Link 
                        as={ScrollLink}
                        spy={true} 
                        smooth={true}
                        duration={scDuration} 
                        offset={scOffset}
                        to={child.href ?? '#'}
                        key={child.label} py={2}>
                        {child.label}
                    </Link>
                }</Box>
              ))
            }
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
    isExternal?: boolean;
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Home',
        href: 'hero',
        isExternal: false,
    },
    {
        label: 'Seminar',
        href: '/seminar',
        isExternal: false,
    },
  ];