import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { Box, Flex } from '@chakra-ui/react'

export const PostContainer = styled.div`
  color: #3f3f3f;
  padding-bottom: 30px;
  font-size: 13px;
  line-height: 200%;
  p{
    margin-bottom: 1.9em;
  }
  p, .post-content ul, .post-content ol {
    max-width: 620px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 768px){
    font-size: 16px;
  }
`

export const Container = ({children, fluid, ...otherProps}) => (
  <Box
    flexGrow="1"
    margin="0 auto"
    px={fluid ? "0" : {base: "15px", md: "30px"}}
    h="100%"
    w="auto"
    maxWidth={fluid ? "100%" : ["100%", "960px", "1216px", "1340px"]}
    pos="relative"
    {...otherProps}
  >
    {children}
  </Box>
)

export const FlexContainer = ({children, spaceBetween, isResponsive, ...otherProps}) => (
  <Flex
    align="center"
    pos="relative"
    justifyContent={spaceBetween ? "space-between" : "center"}
    flexDir={isResponsive ? {base: "column", md: "row"} : "row"}
    {...otherProps}
  >
    {children}
  </Flex>
)

export const ButtonLink = ({children, path, ...otherProps}) => (
  <Box
    as={Link}
    to={path}
    display="inline-block"
    bg={otherProps.inverted ? "brandGreen.30" : "brandGreen.50"}
    color={otherProps.inverted ? "brandGreen.50" : "brandGreen.30"}
    textAlign="center"
    fontSize="1.125rem"
    fontWeight="bold"
    lineHeight="3.5rem"
    p="0 12px"
    px="1.5rem"
    h="3.5rem"
    minW={otherProps.fixedWidth  ? "3rem" : {
      base: "100%", 
      md: otherProps.fullWidth ? "100%" : "3rem"
    }}
    minW="3rem"
    transition="background-color .3s ease"
    cursor="pointer"
    _hover={
      otherProps.inverted ? ({
        backgroundColor: "brandGreen.10",
      }) : ({
        backgroundColor: "brandGreen.70",
      })
    }
    {...otherProps}
  >{children}</Box>
)