import { React, useEffect, useState } from 'react'
import {
  Box,
  Flex,
  Text,
  Heading,
  Input,
  Center,
  Stack,
} from '@chakra-ui/react'
import axios from 'axios'
import cors from 'cors'

const Main = () => {
  const [load, setLoad] = useState()
  const [movie, setMovie] = useState('')
  const [movieName, setMovieName] = useState('Sonic')
  const [error, setError] = useState()

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?s=${movieName}&apikey=69f5cb07`, cors())
      .then((res) => {
        setLoad(res.data.Search)
        setError()
      })
      .catch((err) => {
        setError(err.message)
        console.log(err.message)
      })
  }, [movieName])

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
        <Text fontSize="24px" textAlign="center" pb="4px">
          {props.title}
        </Text>
      </Flex>
    )
  }

  let loadMovie = (
    <Heading as="h4" fontSize="24px" mt="2em">
      Unable to load resources, search query is not valid...
    </Heading>
  )

  if (load) {
    loadMovie = load.map((p, i) => {
      return <Movies img={p.Poster} title={p.Title} key={i} />
    })
  } else if (error) {
    loadMovie = (
      <Heading as="h4" fontSize="24px" mt="2em">
        {error}
      </Heading>
    )
  }

  const handleChange = (e) => {
    setMovie(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(movie)
    setMovieName(movie)
    setMovie('')
  }

  return (
    <Box bg="white" pl="77px" pt="98px" pr="57px">
      <Box pb="48px">
        <Text fontSize="24px" pb="4px">
          Search
        </Text>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Search movie title..."
            type="search"
            textTransform="capitalize"
            onChange={handleChange}
            value={movie}
          />
        </form>
      </Box>
      <Box pb="67px">
        <Stack>
          <Box pb="48px">
            <Text fontSize="24px" textTransform="capitalize" pb="4px">
              Movie Category: {movieName}
            </Text>
            <Flex wrap="wrap">{loadMovie}</Flex>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default Main
