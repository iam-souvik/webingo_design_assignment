import { Box, Button, Flex, Heading, Image, Spacer, Text } from '@chakra-ui/react';
import dogone from '../Photos/dogone.png';
import dogtwo from '../Photos/dogtwo.jpeg';

import dog_four from '../Photos/dog_four.webp';


import PawSVG from '../svgs/PawSVG';
import { AiOutlineCopyrightCircle } from "react-icons/ai"
import { PiInstagramLogoLight } from 'react-icons/pi'
import { PiFacebookLogoBold } from "react-icons/pi"
import React from 'react';

const HomePage = () => {
  return (

    <>
      <Flex justifyContent="center" alignItems="center" minHeight="70vh" gap={"1rem"} >


        <Box maxW="550px" p="6" color="white" >
          <Heading textAlign="left" size="xl" mb="4" color="black">
            The Best Walk starts Here
          </Heading>
          <Text fontSize="lg" color="black" textAlign="left">
            The quick brown fox jumps over the lazy dog" is an English-language pangram sentence that contains all of the
            letters of the English alphabet. Owing to its existence, Chakra UI was created.
          </Text>
          <Button textAlign="left" backgroundColor={"#007067"} color={"#fff"} _hover={"none"} mt="4" display="flex" gap={2} borderRadius={"10px"} >
            <PawSVG /> SCHEDULE
          </Button>
        </Box>

        <Box overflow="hidden"   >
          <Image src={dogone} alt="Cute Dog" maxW="400px" borderRadius="83% 17% 40% 60% / 40% 63% 37% 60% " />
        </Box>
      </Flex>

      <Box bgColor={"rgb(246,246,247)"} height={"69vh"}    >
        <Text width={"80vw"} margin={"auto"} p={5} >Paw Brigade is a full-service private dog-walking company providing adventures and
          loving care to all dogs in Singapore. From the largest to the smallest dogs, we provide the
          mental stimulation and exercise that your dog needs. .</Text>


        <Spacer />

        <Spacer />


        <Heading size={"lg"} mt={10}>How Its Works.</Heading>


        <Flex gap={"50px"} width={"80vw"} margin={"50px auto"} >

          <Box  >
            <Heading size={"md"}>Lorem ipsum dolor sit amet.</Heading>
            <Text textAlign={"center"} mt={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Fugiat blanditiis voluptas odit sunt. Eum velit,
              tempore quasi sequi aliquid consequuntur.</Text>
          </Box>
          <Box>
            <Heading size={"md"}>Lorem ipsum dolor sit amet.</Heading>
            <Text textAlign={"center"} mt={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Fugiat blanditiis voluptas odit sunt. Eum velit,
              tempore quasi sequi aliquid consequuntur.</Text>
          </Box>
          <Box>
            <Heading size={"md"}>Lorem ipsum dolor sit amet.</Heading>
            <Text textAlign={"center"} mt={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Fugiat blanditiis voluptas odit sunt. Eum velit,
              tempore quasi sequi aliquid consequuntur.</Text>
          </Box>
        </Flex>



      </Box>



      <Flex justifyContent="center" alignItems="center" minHeight="70vh" gap={"1rem"}  >

        <Box overflow="hidden"  mt={"100px"}   >
          <Image boxSize='350px' src={dogtwo} alt="Cute Dog" maxW="400px" borderRadius="90% 10% 73% 27% / 40% 47% 53% 60%  " />
        </Box>


        <Box maxW="550px" p="6" color="white" >
          <Heading textAlign="left" size="xl" mb="4" color="black">
            Its Start With Our Meeting !
          </Heading>
          <Text fontSize="lg" color="black" textAlign="left">
            The quick brown fox jumps over the lazy dog" is an English-language pangram sentence that contains all of the
            letters of the English alphabet. Owing to its existence, Chakra UI was created.
          </Text>
          <Button textAlign="left" backgroundColor={"#007067"} color={"#fff"} _hover={"none"} mt="4" display="flex" gap={2} borderRadius={"10px"} >
            MEET THE TEAM
          </Button>
        </Box>


      </Flex>



      {/* ************* */}


      <Flex justifyContent="center" alignItems="left" minHeight="70vh" gap={"1rem"} mt={20}  >

        <Box
          maxW="490px"
          p="6"
          color="white"
          textAlign={"left"}

        >
          <Heading as="h1" size="xl" mb="4" color="black">
            Not Your Usual Dog Walk
          </Heading>

          <Text fontSize="lg" color="black" textAlign={"left"}>
            The quick brown fox jumps over the lazy dog" is an English-language pangram
            sentence that contains all of the letters of the English alphabet. Owing to
            its existence, Chakra UI was created.
          </Text>
          <Button backgroundColor={"#007067"} color={"#fff"} _hover={"none"} mt="4" borderRadius={"10px"} >
            TELL US YOUR NEED
          </Button>
        </Box>


        <Box overflow="hidden"  >
          <Image src={dog_four} alt="Cute Dog" maxW="400px" borderRadius="2000px 50px 700px 650px" />

        </Box>

      </Flex>



      {/* *************************** */}


      <Box>
        <Heading size={"lg"}>Meet Your's Dog New Best friends !</Heading>
        <Text mt={3} fontWeight={500}>Schedule Youe Meet and greet.</Text>
        <Button backgroundColor={"#007067"} color={"#fff"} _hover={"none"} mt="4" display={"flex"} gap={2} margin={" 20px auto"} borderRadius={"10px"}>  <PawSVG />  SCHEDULE  </Button>
      </Box>

      <Flex mt={"100px"} justifyContent={"center"} alignItems={"center"} gap={"70vw"} backgroundColor={"teal"} height={"50px"} >
        <Box>
          <Text display={"flex"} alignItems={"center"} gap={"0.5rem"} color={"white"} ><AiOutlineCopyrightCircle /> 2023 Paw Brigede</Text>
        </Box>
        <Box >
          <Text display={"flex"} color={"white"} fontSize={"25px"} gap={5}><PiInstagramLogoLight />  <PiFacebookLogoBold /></Text>
        </Box>
      </Flex>

    </>

  );
};

export default HomePage;
