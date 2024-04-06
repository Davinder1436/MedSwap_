import React from 'react'
import { Box, Flex, Heading, Spacer, Button } from '@chakra-ui/react'
import { Link } from "react-router-dom"
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

                <Flex h="15vh" w="100vw" align-items="center" justify-content="center" >
                    <Button m="auto" size="lg" colorScheme="teal"> <Link to="/product/search"> <SearchIcon /> Search For Medcine </Link></Button>
                </Flex>

                <Flex h="15vh" w="100vw" align-items="center" justify-content="center" >
                    <Button m="auto" size="lg" colorScheme="teal"><Link to="/product/camera">Camera scaning</Link></Button>
                </Flex>

                <Flex h="15vh" w="100vw" align-items="center" justify-content="center" >
                    <Button m="auto" size="lg" colorScheme="teal" ><Link to="/product/file"> Upload from local storage</Link></Button>
                </Flex>


            </Flex>
        </Box>
    )
}
