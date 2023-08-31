import { Box, Button, Container, Flex, FormControl, FormLabel, Grid, Heading,  Input, InputGroup, InputLeftAddon, InputRightAddon, Radio, RadioGroup, Stack, Text, Textarea, WrapItem } from '@chakra-ui/react'
import React from 'react'

import { AiOutlineSearch } from 'react-icons/ai'
import { BiDownArrow}  from 'react-icons/bi'

const SignUp = () => {
  return (
    <Box backgroundColor="#f6f6f7" minHeight="100vh" padding="2rem">

      <Container maxWidth="1100px" backgroundColor="white" borderRadius="8px" padding="2rem">
        <Heading as="h1" size="lg" marginBottom="1rem">Tell Us About Yourself</Heading>
        <form>
          <Grid templateColumns='repeat(2, 1fr)' direction="column" gap="1rem">
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="text" placeholder="Tom" />
            </FormControl>
            <FormControl id="phone" isRequired>
              <FormLabel>Phone</FormLabel>
              <Input type="tel" placeholder="8480046800" />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="tom@gmail.com" />
            </FormControl>
          </Grid>
        </form>
      </Container>

      <Container textAlign={"left"} maxWidth="1100px" marginTop="2rem" backgroundColor="white" borderRadius="8px" p={10} >
        <Heading as="h2" size="lg" marginBottom="1rem">What Service Are You Looking For?</Heading>
        <Text >Dog Adventure Single session: $60</Text>
        <Text >10 Session package: $540 ($666 10% off)</Text>
        <Text>20 Session package: $1020 ($1200 15% off)</Text>
        <Text >30 Session package: $1440 ($1866 20% off) </Text>
        <Text >Dog sitting: $60 / per night</Text>
        <RadioGroup marginTop="1rem" >
          <Stack direction="row" >
            <Button borderRadius="8px"
              variant='outline'
              style={{
                width: '130px',
                height: '40px',
                display: 'flex',
                gap: "20px"

              }} ><Radio>Both</Radio>  </Button>

            <Button borderRadius="8px"
              variant='outline'
              style={{
                width: '130px',
                height: '40px',
                display: 'flex',
                gap: "20px"

              }} ><Radio>Dog Walking</Radio>  </Button>
            <Button borderRadius="8px"
              variant='outline'
              style={{
                width: '130px',
                height: '40px',
                display: 'flex',


              }} ><Radio>Dog Sitting</Radio>  </Button>
          </Stack>
        </RadioGroup>
      </Container>


      <Container textAlign={"left"} maxWidth="1100px" marginTop="2rem" backgroundColor="white" borderRadius="8px" padding={10}>
        <Heading size="lg" marginBottom="1rem">How Many dog's do You Have </Heading>
        <Button
          
          borderRadius="8px"
          variant='outline'
          style={{
            width: '120px',
            height: '40px',
            display: 'flex',
            gap: "25px",
            // justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 10px',
            border: "1px solid gray"
          }}
        >
          <span>-</span>
          <span>1</span>
          <span>+</span>
        </Button>
      </Container>





      <Container textAlign={"left"} maxWidth="1100px" marginTop="2rem" backgroundColor="white" borderRadius="8px" padding={10}>
        <Heading as="h2" size="lg" marginBottom="1rem">Tells Us About Your Dog's</Heading>

        <Box display={"flex"} gap={"100px"} >


          <Box gap="1rem">
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="text" placeholder="Souvik" />
            </FormControl>
            <FormControl id="phone" isRequired>
              <FormLabel> Date Of Birth </FormLabel>
              <InputGroup>
                <InputLeftAddon  children={<AiOutlineSearch />} />
                <Input type="date" placeholder="Select Date" />
              </InputGroup>
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Weight Of Dog (Kg)</FormLabel>
              <Input type="email" placeholder="10" />
            </FormControl>

            <Text width={"fit-content"} fontWeight={"600"}  >Vaccinated ?</Text>
            <RadioGroup marginTop="1rem" >
              <Stack direction="row" >
                <Button borderRadius="8px"
                  variant='outline'
                  style={{
                    width: '150px',
                    height: '40px',
                    display: 'flex',
                    border: "1px solid gray"
                  }} ><Radio>Yes</Radio>  </Button>
                <Button borderRadius="8px"
                  variant='outline'
                  style={{
                    width: '150px',
                    height: '40px',
                    display: 'flex',
                    border: "1px solid gray"
                  }} ><Radio>No</Radio>  </Button>
              </Stack>
            </RadioGroup>
            <Button mt={2} borderRadius="8px" variant='outline' style={{ width: '150px', height: '40px', display: 'flex', border: "1px solid gray" }} > ADD LATEST CERT </Button>



            <FormControl id="name" isRequired mt={3}>
              <FormLabel>Anything Else We Need to Know about Your Dog's</FormLabel>
              <Textarea placeholder="Typing here" />
            </FormControl>
          </Box>

          <Box>
            <FormControl id="name" isRequired>
              <FormLabel>Breed</FormLabel>

              <InputGroup>
              
              {/* <Flex justifyContent={"center"} alignItems={"center"}><AiOutlineSearch /> <Input type="text" placeholder="Tom" /> <BiDownArrow /> </Flex> */}

                <InputLeftAddon  children={<AiOutlineSearch />} />
                <Input type="text" placeholder="Tom" />
                <InputRightAddon children={<BiDownArrow />} />

              </InputGroup>

            </FormControl>


            <Text width={"fit-content"} fontWeight={"600"}  >Gender Of Dog</Text>
            <RadioGroup marginTop="1rem" >
              <Stack direction="row" >
                <Button borderRadius="8px"
                  variant='outline'
                  style={{
                    width: '120px',
                    height: '40px',
                    display: 'flex',
                    border: "1px solid gray"
                  }} ><Radio>Male</Radio>  </Button>
                <Button borderRadius="8px"
                  variant='outline'
                  style={{
                    width: '120px',
                    height: '40px',
                    display: 'flex',
                    border: "1px solid gray"
                  }} ><Radio>Female</Radio>  </Button>
              </Stack>
            </RadioGroup>



            <Text width={"fit-content"} fontWeight={"600"}  >Neutered</Text>
            <RadioGroup marginTop="1rem" >
              <Stack direction="row" >
                <Button borderRadius="8px"
                  variant='outline'
                  style={{
                    width: '120px',
                    height: '40px',
                    display: 'flex',
                    border: "1px solid gray"
                  }} ><Radio>Yes</Radio>  </Button>
                <Button borderRadius="8px"
                  variant='outline'
                  style={{
                    width: '120px',
                    height: '40px',
                    display: 'flex',
                    border: "1px solid gray"
                  }} ><Radio>No</Radio>  </Button>
              </Stack>
            </RadioGroup>




            <FormControl id="name" mt={2}>
              <FormLabel>Allergies</FormLabel>
              <Textarea placeholder="Type here" />
            </FormControl>

          </Box>
        </Box>



      </Container>


      <WrapItem  p={10} ml={"65px"}>
        <Button style={{
          width: '140px',
          height: '40px',

        }} colorScheme='teal'>Send</Button>
      </WrapItem>

    </Box>
  )
}

export default SignUp
