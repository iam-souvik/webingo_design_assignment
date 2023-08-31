
import { Box, Button, Flex, HStack, Heading, Image, Spacer, Stack, Text } from '@chakra-ui/react';
import dogone from '../Photos/dogone.png';
import PawSVG from '../svgs/PawSVG';
import { AiOutlineCopyrightCircle } from "react-icons/ai"
import { PiInstagramLogoLight } from 'react-icons/pi'
import { PiFacebookLogoBold } from "react-icons/pi"
import dog_lover from '../Photos/image1.png';
import dog_walk from '../Photos/priya.png';

import React from 'react';

const PeoplePage = () => {
  return (
    <>
      <Box backgroundColor="#f6f6f7" px={10}>


        <Flex justifyContent="center" alignItems="center" minHeight="70vh" gap={"150px"} >

          <Box>
            <Image src={dogone} alt="Cute Dog" maxW="400px" borderRadius="47% 53% 74% 26% / 40% 54% 46% 60% " />
          </Box>


          <Box maxW="510px" p="6" color="white" >
            <Heading textAlign="left" size="lg" mb="4" color="black">
              Meet Our Team Of dog Walker And Sitter
            </Heading>
            <Text fontSize="md" color="black" textAlign="left">
              The quick brown fox jumps over the lazy dog" is an English-language pangram sentence that contains all of the
              letters of the English alphabet. Owing to its existence, Chakra UI was created.
            </Text>

          </Box>



        </Flex>


        {/* ********************** */}

        <Flex justifyContent={"center"} height={"100vh"} gap={"100px"} mt={10} backgroundColor="white" borderRadius={"15px"} p={"48px 36px"} >
          <HStack gap={"20px"} alignItems={"flex-start"}>
            <Image src={dog_lover} alt="Cute Dog" maxW="270px" borderRadius="10px" />
            <Stack marginBottom={"10vh"} textAlign={"left"}>
              <Heading color={"teal"} size={"md"}>Dean Mak</Heading>
              <Text fontWeight={"bold"}>Dog walkaer In Chief</Text>
              <Spacer />
              <Text color={"teal"} fontWeight={500}>Skills</Text>
              <Text as={"h3"} >Heading Big Dog</Text>
              <Text as={"h3"}>Canine Behavior</Text>
              <Text as={"h3"}>Canine First Aid</Text>
              <Text as={"h3"}>Good Communication</Text>
              <Text as={"h3"}>Positive Attitutude</Text>

            </Stack>

          </HStack   >
          <Box display={"flex"} flexDirection={"column"} gap={5} width={"550px"} textAlign={"left"} fontSize={"14px"}>
            <Text>Meet Dean, your trusted neighborhood dog walker. With 10 years of
              experience working with dogs of all sizes and temperaments, Dean has a
              passion for providing top-notch care and attention to every furry friend he
              meets.</Text>

            <Text>Dean's love for dogs started at a young age, and he has been working with
              them ever since. Whether it's taking them on long walks, playing fetch at
              the park, or just providing some much-needed cuddles, Dean knows how to
              keep your pet happy and healthy.
            </Text>

            <Text>When you entrust your furry friend to Dean's care, you can rest assured
              that they're in good hands. Dean is fully bonded and insured, and they treat
              every dog as if they were their own. They take the time to get to know each
              dog's unique personality and needs, and they're always happy to
              accommodate any special requests.</Text>

            <Text>
              Whether you need a regular dog walking service or just an occasional pet
              sitter, Dean is here to help. He pride himself on his reliability, flexibility, and
              attention to detail, and he'll go above and beyond to make sure your pet
              feels loved and cared for. Get in touch with Dean today to schedule a meet-
              and-greet and see why he is the best dog walker in town!</Text>

          </Box>
        </Flex>




        {/* **************************** */}


        <Flex justifyContent={"center"} height={"100vh"} gap={"100px"} mt={10} backgroundColor="white" p={"48px 36px"}>
          <HStack gap={"20px"} alignItems={"flex-start"}>
            <Image src={dog_walk} alt="Cute Dog" maxW="270px" borderRadius="10px" />
            <Stack marginBottom={"10vh"} textAlign={"left"}>
              <Heading color={"teal"} size={"md"}>Priya</Heading>
              <Text fontWeight={"bold"}>Dog walkaer In Chief</Text>
              <Spacer />
              <Text color={"teal"} fontWeight={500}>Skills</Text>
              <Text as={"h3"} >Heading Big Dog</Text>
              <Text as={"h3"}>Canine Behavior</Text>
              <Text as={"h3"}>Canine First Aid</Text>
              <Text as={"h3"}>Good Communication</Text>
              <Text as={"h3"}>Positive Attitutude</Text>

            </Stack>

          </HStack   >
          <Box display={"flex"} flexDirection={"column"} gap={5} width={"550px"} textAlign={"left"} fontSize={"14px"}>
            <Text>Meet Dean, your trusted neighborhood dog walker. With 10 years of
              experience working with dogs of all sizes and temperaments, Dean has a
              passion for providing top-notch care and attention to every furry friend he
              meets.</Text>

            <Text>Dean's love for dogs started at a young age, and he has been working with
              them ever since. Whether it's taking them on long walks, playing fetch at
              the park, or just providing some much-needed cuddles, Dean knows how to
              keep your pet happy and healthy.
            </Text>

            <Text>When you entrust your furry friend to Dean's care, you can rest assured
              that they're in good hands. Dean is fully bonded and insured, and they treat
              every dog as if they were their own. They take the time to get to know each
              dog's unique personality and needs, and they're always happy to
              accommodate any special requests.</Text>

            <Text>
              Whether you need a regular dog walking service or just an occasional pet
              sitter, Dean is here to help. He pride himself on his reliability, flexibility, and
              attention to detail, and he'll go above and beyond to make sure your pet
              feels loved and cared for. Get in touch with Dean today to schedule a meet-
              and-greet and see why he is the best dog walker in town!</Text>

          </Box>
        </Flex>


        <Box p={10}>
          <Heading size={"lg"}>Meet Your's Dog New Best friends today !</Heading>
          <Text mt={3} fontWeight={500}>Schedule Youe Meet and greet.</Text>
          <Button colorScheme="teal" mt="4" display={"flex"} gap={2} margin={" 20px auto"} borderRadius={"10px"}>  <PawSVG />  SCHEDULE  </Button>
        </Box>
      </Box>

      <Flex justifyContent="space-between"
        alignItems="center"
        backgroundColor="teal"
        height="50px"
        padding="0 20px" >
        <Box>
          <Text display={"flex"} alignItems={"center"} gap={"0.5rem"} color={"white"} ><AiOutlineCopyrightCircle /> 2023 Paw Brigede</Text>
        </Box>
        <Box >
          <Text display={"flex"} color={"white"} fontSize={"25px"} gap={5}><PiInstagramLogoLight />  <PiFacebookLogoBold /></Text>
        </Box>
      </Flex>
    </>
  )
}

export default PeoplePage