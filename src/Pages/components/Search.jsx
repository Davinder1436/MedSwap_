import React,{useState} from 'react'
import { Input, InputGroup, InputLeftElement, Heading,Box ,Button} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons';
import Description from '../../components/Description/Description';
import {Link} from "react-router-dom"

export default function Search() {

  const [search,setSearch] =useState('')




  return (
    <div>
      <Box h="100vh" w="100vw">


      <Heading as="h1" size="lg" my="50px" mx="100px">Search Medicines...</Heading>
                    <InputGroup mx="100px">
                        <InputLeftElement pointerEvents='none'>
                            <SearchIcon color='gray.300' />
                        </InputLeftElement>
                        
                        <Input
                        onChange={(e)=>{ setSearch(e.target.value)}}
                        
                        w={{ base: "200px", sm: "200px", md: "300px", lg: "300px" }} rounded={"15px"} type='tel' placeholder='enter salt/name' />
                        <Button type="button"  bgColor='orange.200' ml="5px" rounded={15}><Link to={`/description/`}>Search</Link></Button>
                    </InputGroup>
                 
                    </Box>

    </div>
  )
}
