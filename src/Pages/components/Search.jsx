import React from 'react'
import { Input, InputGroup, InputLeftElement, Heading,Box ,Button} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons';

export default function Search() {
  return (
    <div>
      <Box h="100vh" w="100vw">


      <Heading as="h1" size="lg" my="50px" mx="100px">Search Medicines...</Heading>
                    <InputGroup mx="100px">
                        <InputLeftElement pointerEvents='none'>
                            <SearchIcon color='gray.300' />
                        </InputLeftElement>
                        
                        <Input w={{ base: "200px", sm: "200px", md: "300px", lg: "300px" }} rounded={"15px"} type='tel' placeholder='enter salt/name' />
                        <Button bgColor='orange.200' ml="5px" rounded={15}>Search</Button>
                    </InputGroup>

                    </Box>

    </div>
  )
}
