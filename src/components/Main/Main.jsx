import { React, useEffect, useState } from 'react'
import { Box, Flex, Text, Input, HStack, Stack } from '@chakra-ui/react'
import axios from 'axios'

const Main = () => {
  const [load, setLoad] = useState([])

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(
        'http://www.omdbapi.com/?s=sonic&apikey=69f5cb07',
      )
      setLoad(req.data)
    }

    fetchData()
  }, [])

  const call = () => {
    console.log(load)
  }

  return (
    <Box bg="white" pl="77px" pt="98px" pr="57px">
      <Box pb="48px">
        <Text fontSize="24px" pb="4px">
          Search
        </Text>
        <form>
          <Input placeholder="Search movie title..." />
        </form>
      </Box>
      <Box pb="67px">
        <Stack>
          <Box pb="48px">
            <Text fontSize="24px" pb="4px">
              Movie Category Name
            </Text>
            <Flex wrap="wrap">
              <Flex
                bg="black"
                color="white"
                w="300px"
                h="300px"
                justify="center"
                alignItems="center"
                borderRadius="12px"
                overflow="none"
                mx="6px"
                mt="7px"
              >
                <Text fontSize="24px" pb="4px">
                  Movie Name
                </Text>
              </Flex>
              <Flex
                bg="black"
                color="white"
                w="300px"
                h="300px"
                justify="center"
                alignItems="center"
                borderRadius="12px"
                overflow="none"
                mx="6px"
                mt="7px"
              >
                <Text fontSize="24px" pb="4px">
                  Movie Name
                </Text>
              </Flex>
              <Flex
                bg="black"
                color="white"
                w="300px"
                h="300px"
                justify="center"
                alignItems="center"
                borderRadius="12px"
                overflow="none"
                mx="6px"
                mt="7px"
              >
                <Text fontSize="24px" pb="4px">
                  Movie Name
                </Text>
              </Flex>
            </Flex>
          </Box>
          <Box pb="48px">
            <Text fontSize="24px" pb="4px">
              Movie Category Name
            </Text>
            <Flex wrap="wrap">
              <Flex
                bg="black"
                color="white"
                w="300px"
                h="300px"
                justify="center"
                alignItems="center"
                borderRadius="12px"
                overflow="none"
                mx="6px"
                mt="7px"
              >
                <Text fontSize="24px" pb="4px">
                  Movie Name
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default Main
