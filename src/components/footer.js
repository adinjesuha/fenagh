import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
// Components
import { Container } from './globals'
import Logo from './logo'

function Footer() {
  return (
    <Container backgroundColor="brandGreen.70">
      <Box
        w="100%" 
        pos="relative"
        py={{base: "1rem", md: "2rem"}}
        display="flex"
        flexDir={{base: "column", md: "row"}}
        alignItems={{base: "flex-start",md: "center" }}
        justifyContent="space-between" 
        color="#fff"
        fontSize="12px"
        lineHeight="20px"
        fontWeight="bold"
      >
        <Box 
          order={{base: "3", md: "0"}}
          textAlign={{base: "center", md: "left"}}
          w={{base: "100%", md: "auto"}}
          borderTop={{base: "1px solid", md: "0px solid"}}
          borderTopColor={{base: "rgba(255, 255, 255, .3)", md: "transparent"}}
          mt={{base: "1rem", md: 0}}
          pt={{base: "1rem", md: 0}}
        >
          <Box as="span" opacity=".8">
            © {new Date().getFullYear()}, FENAGH todos los derechos reservados
          </Box>
        </Box>
        <Box 
          pos={{md: "absolute"}}
          left={{md: "50%"}}
          transform={{md: "translateX(-50%)"}}
          mb={{base: "1rem", md: "0"}}
        >
          <Logo white/>
        </Box>
        <Box textAlign={{md: "right" }} opacity=".8">
          <Box as="span" display="block">Blvd suyapa, Colonia Florencia, Sector Sur</Box>
          <Box as="span" display="block">Casa 3802, Tegucigalpa, Honduras</Box>
        </Box>
      </Box>
    </Container>
  )
}

export default Footer
