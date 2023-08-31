import React from 'react';
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import dogone from '../Photos/dogone.png';
import PawSVG from '../svgs/PawSVG';
import { AiOutlineCopyrightCircle } from "react-icons/ai"
import { PiInstagramLogoLight } from 'react-icons/pi'
import { PiFacebookLogoBold } from "react-icons/pi"

import dog_enjoy from '../Photos/dog_enjoy.avif';
import dog_travelling from '../Photos/dog_travelling.jpg';
import Dog_walk from "../Photos/Dog_walk.jpeg"


const ServicePage = () => {
    return (

        <>


            <Box backgroundColor="#f6f6f7">
                <Flex justifyContent="center" alignItems="center" minHeight="70vh" gap={"150px"} >


                    <Box maxW="550px" p="6" color="white" >
                        <Heading textAlign="left" size="xl" mb="4" color="black">
                            Not Your Usual Dog Walk
                        </Heading>
                        <Text fontSize="lg" color="black" textAlign="left">
                            The quick brown fox jumps over the lazy dog" is an English-language pangram sentence that contains all of the
                            letters of the English alphabet. Owing to its existence, Chakra UI was created.
                        </Text>
                        <Button textAlign="left" colorScheme="teal" mt="4" display="flex" gap={2} borderRadius={"10px"} >
                            <PawSVG /> VIEW PRICES
                        </Button>
                    </Box>

                    <Box overflow="hidden" mt={"100px"}   >
                        <Image boxSize='350px' src={Dog_walk} alt="Cute Dog" maxW="400px" borderRadius="47% 53% 17% 83% / 50% 34% 66% 50%  " />
                    </Box>
                </Flex>

                {/* <Box bgColor={"rgb(246,246,247)"} height={"69vh"}     >
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



      </Box> */}



                <Flex justifyContent="center" alignItems="center" minHeight="70vh" gap={"150px"} >

                    <Box overflow="hidden"   >
                        <Image src={dog_enjoy} alt="Cute Dog" maxW="400px" borderRadius="23% 77% 46% 54% / 70% 14% 86% 30%  " />
                    </Box>


                    <Box maxW="550px" p="6" color="white" >
                        <Heading textAlign="left" size="xl" mb="4" color="black">
                            Your Dog iS Going to Enjoy This
                        </Heading>
                        <Text fontSize="lg" color="black" textAlign="left">
                            The quick brown fox jumps over the lazy dog" is an English-language pangram sentence that contains all of the
                            letters of the English alphabet. Owing to its existence, Chakra UI was created.
                        </Text>
                        <Button textAlign="left" colorScheme="teal" mt="4" display="flex" gap={2} borderRadius={"10px"} >
                            VIEW PRICES
                        </Button>
                    </Box>


                </Flex>

            </Box>



            {/* ************* */}


            <Box backgroundColor="white">
                <Flex justifyContent="center" alignItems="center" minHeight="70vh" gap={"150px"} textAlign={"left"} >

                    <Box
                        maxW="490px"
                        p="6"
                        color="white"

                    >
                        <Heading as="h1" size="xl" mb="4" color="black">
                            Peace Of Mind Travelling
                        </Heading>

                        <Text fontSize="lg" color="black" textAlign={"left"}>
                            The quick brown fox jumps over the lazy dog" is an English-language pangram
                            sentence that contains all of the letters of the English alphabet. Owing to
                            its existence, Chakra UI was created.
                        </Text>
                        <Button textAlign="left" colorScheme="teal" mt="4" display="flex" gap={2} borderRadius={"10px"}>
                            <PawSVG /> VIEW PRICES
                        </Button>
                    </Box>


                    <Box overflow="hidden"  >
                        <Image src={dog_travelling} alt="Cute Dog" maxW="400px" borderRadius="2000px 50px 700px 650px" />

                    </Box>

                </Flex>

                <Flex justifyContent="center" alignItems="center" minHeight="70vh" gap={"150px"} textAlign={"left"} >

                    <Box overflow="hidden" mb={"100px"}  >
                        <Image src={dogone} alt="Cute Dog" maxW="400px" borderRadius="23% 77% 46% 54% / 70% 14% 86% 30% " />

                    </Box>

                    <Box
                        maxW="490px"
                        p="6"
                        color="white"
                    >
                        <Heading as="h1" size="xl" mb="4" color="black">
                            Full Range Of Services
                        </Heading>

                        <Text fontSize="lg" color="black" >
                            <Text>Our Dog Sitting Services Includes :</Text>

                            <Text>• In-home care: We'll come to your home  and provide care for your dog in their familiar surroundings. This minimizes stress for your furry friend and ensures they feel comfortable and safe.  </Text>

                            <Text>• Feeding and medication: Our dog sitters will ensure your dog receives their meals and medication on time and in the correct dosage.</Text>

                            <Text>• Exercise and playtime: We'll provide plenty of exercise and playtime to keep your dog happy and healthy. We'll take them on walks, play fetch, and give them plenty of cuddles and attention.</Text>
                        </Text>
                    </Box>




                </Flex>

            </Box>






            {/* *************************** */}


            <Box>
                <Heading size={"lg"}>Meet Your's Dog New Best friends !</Heading>
                <Text mt={3} fontWeight={500}>Schedule Youe Meet and greet.</Text>
                <Button colorScheme="teal" mt="4" display={"flex"} gap={2} margin={" 20px auto"} borderRadius={"10px"}>  <PawSVG />  SCHEDULE  </Button>
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

export default ServicePage;
