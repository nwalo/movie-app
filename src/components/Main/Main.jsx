import { React, useEffect, useState } from 'react'
import { Box, Flex, Text, Input, HStack, Stack } from '@chakra-ui/react'
import axios from 'axios'
import cors from 'cors'

const Main = () => {
  const [load, setLoad] = useState([])

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(
        'https://www.omdbapi.com/?s=sonic&apikey=69f5cb07',
        cors(),
      )
      setLoad(req.data.Search)
    }

    fetchData()
  }, [])

  const Movies = (props) => {
    // console.log(props)
    return (
      <Flex
        backgroundImage={`url(${props.img})`}
        backgroundColor="#4a5147aa"
        backgroundBlendMode="multiply"
        color="white"
        w="290px"
        h="290px"
        justify="center"
        alignItems="center"
        borderRadius="12px"
        overflow="none"
        mx="6px"
        mt="7px"
      >
        <Text fontSize="24px" pb="4px">
          {props.title}
        </Text>
      </Flex>
    )
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
              {load.map((p, i) => {
                return <Movies img={p.Poster} title={p.Title} key={i} />
              })}
            </Flex>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default Main
