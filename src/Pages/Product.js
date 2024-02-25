import React from 'react'
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons';
import Camera_Option from './components/Camera_Option';
export default function Product() {
    return (
        <Box h="auto" w={"100vw"}>
            <Flex h="auto" w="100vw" direction="column" align-items="center" justify-content="center">
                <Flex h="auto" w="100vw" py={5} align-items="center" justify-content="center" >
                    <Spacer />
                    <Heading as="h1" size="2xl">OUR PRODUCT</Heading>
                    <Spacer />
                </Flex>
                <Flex h="auto" w="100vw" align-items="center" justify-content="center" >


                </Flex>

                <Flex h="auto" w="100vw" align-items="center" justify-content="center" >



                </Flex>


            </Flex>
        </Box>
    )
}
