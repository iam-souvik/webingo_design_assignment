// Navbar.js

import {  Box,  Flex, Image, Spacer, } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Photos/logo.png'



function Navbar() {





  return (


    <Flex mt={1}  bg="white" color={"rgba(0,0,0,0.9)"} position="sticky" fontFamily={"inter,sans-serif"} fontSize={"18px"} fontWeight={"bold"}>
      <Box>
        <Link to="/">
        <Image src={Logo} width={"250px"} />
        </Link>
       
      </Box>

      <Spacer />
      <Box display={'flex'} gap={10} p={5}>
        <Link to="/home">Home</Link>
        <Link to="/people">Our People</Link>
        <Link to="/service">Services</Link>

        {/* <Button colorScheme='blue' size='sm'></Button> */}
        <Box as='button' borderRadius='md' bg='blue.500' color='white' px={4} h={8} >
          <Link to="/signup">SignUp</Link>
        </Box>



      </Box>
    </Flex>





  );
}

export default Navbar;