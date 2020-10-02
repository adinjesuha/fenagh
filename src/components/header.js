import { Link } from "gatsby"
import React from "react"
import { Box, PseudoBox, Flex } from "@chakra-ui/core";
import { MdLocationOn, MdKeyboardArrowDown } from 'react-icons/md'

const MenuItems = ({link}) => {
  const { path, value } = link
  return (
    <PseudoBox
      as={Link}
      to={path}
      display="inline-block"
      color="#3A8537"
      fontSize="14px"
      fontWeight="bold"
      py="0.2rem"
      textTransform="uppercase"
      borderRight="1px"
      borderRightColor="#f0f1f3"
      _notLast={{
        pr:"1.2rem"
      }}
      _notFirst={{
        px:"1.2rem"
      }}
    >
      {value}
    </PseudoBox>
  )
}

const Menu = () => {
  const links = [
    {id: 0, path: "/", value: "Home"},
    {id: 1, path: "/", value: "Acerca de"},
    {id: 2, path: "/", value: "Secciones"},
    {id: 3, path: "/", value: "Registro"},
  ]
  return (
    <Box
      as="nav"
      listStyleType="none"
      px={[1, 2, null, 5]}
      py="1rem"
      m="0 auto"
      maxWidth="1200px"
    >
      {links.map((link) => (
        <MenuItems key={link.id} link={link} />
      ))}
    </Box>
  )
}

const Header = () => (
  <Box 
    as="header"
    backgroundColor="#fafafa"
  >
    <Box
      borderBottom="1px"
      borderBottomColor="#f0f1f3"
    >
      <Flex
        align="center"
        justify="space-between"
        wrap="wrap"
        px={[1, 2, null, 5]}
        m="0 auto"
        maxWidth="1200px"
      >
        <Flex
          align="center"
          maxWidth="1200px"
        >
          <Box 
            as={Link}
            to="/"
            pr="5"
            mr="5"
            borderRight="1px"
            borderRightColor="#d5dade"
          >
            <Box 
              as="svg"
              w="auto"
              h="2rem"
              viewBox="0 0 150 47"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <path d="M16.688,21.104 L16.688,27.504 L7.6,27.504 L7.6,46 L0.56,46 L0.56,1.2 L19.184,1.2 L19.184,7.6 L7.6,7.6 L7.6,21.104 L16.688,21.104 Z M39.28,20.08 L39.28,26.48 L29.616,26.48 L29.616,39.6 L41.776,39.6 L41.776,46 L22.576,46 L22.576,1.2 L41.776,1.2 L41.776,7.6 L29.616,7.6 L29.616,20.08 L39.28,20.08 Z M52.4,46 L46.064,46 L46.064,1.2 L54.896,1.2 L62.128,28.016 L62.128,1.2 L68.4,1.2 L68.4,46 L61.168,46 L52.4,13.552 L52.4,46 Z M89.136,46 L87.92,37.872 L79.28,37.872 L78.064,46 L71.6,46 L78.768,1.2 L89.072,1.2 L96.24,46 L89.136,46 Z M86.96,31.792 L83.568,9.136 L80.176,31.792 L86.96,31.792 Z M119.92,21.04 L119.92,35.248 C119.92,38.8746848 119.024009,41.658657 117.232,43.6 C115.439991,45.541343 112.83735,46.512 109.424,46.512 C106.01065,46.512 103.408009,45.541343 101.616,43.6 C99.823991,41.658657 98.928,38.8746848 98.928,35.248 L98.928,11.952 C98.928,8.3253152 99.823991,5.54134304 101.616,3.6 C103.408009,1.65865696 106.01065,0.688 109.424,0.688 C112.83735,0.688 115.439991,1.65865696 117.232,3.6 C119.024009,5.54134304 119.92,8.3253152 119.92,11.952 L119.92,16.304 L113.264,16.304 L113.264,11.504 C113.264,8.55998528 112.048012,7.088 109.616,7.088 C107.183988,7.088 105.968,8.55998528 105.968,11.504 L105.968,35.696 C105.968,38.5973478 107.183988,40.048 109.616,40.048 C112.048012,40.048 113.264,38.5973478 113.264,35.696 L113.264,27.44 L110.064,27.44 L110.064,21.04 L119.92,21.04 Z M124.464,46 L124.464,1.2 L131.504,1.2 L131.504,20.4 L139.504,20.4 L139.504,1.2 L146.672,1.2 L146.672,46 L139.504,46 L139.504,26.8 L131.504,26.8 L131.504,46 L124.464,46 Z" id="fenagh" fill="#3A8537"></path>
              </g>
            </Box>
          </Box>
          <Flex>
            <Box 
              as={MdLocationOn} 
              color="#3A8537"
              mr="2"
            />
            <Flex
              align="center"
            >
              <Box
                as="span"
                fontSize="12px"
                fontWeight="bold"
                textTransform="uppercase"
                mr="1"
              >
                Tegucigalpa, Honduras
              </Box>
              <Box as={MdKeyboardArrowDown} />
            </Flex>
          </Flex>
        </Flex>
        <Box 
          as={Link}
          to="/" 
          backgroundColor="#3A8537"
          color="white"
          fontSize="14px"
          fontWeight="bold"
          p="1.5rem"
        >
          CONVENCIÓN 2020
        </Box>
      </Flex>
    </Box>
    <Menu />
  </Box>
)

export default Header
