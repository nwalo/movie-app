import { React } from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

const Nav = () => {
  return (
    <Box
      as="nav"
      bg="rgba(41, 41, 41, 1)"
      pl="96px"
      py="54px"
      color="#FFFFFF
"
    >
      <Box>
        <Text
          w="156.7px"
          // h="32.94px"
          fontWeight="500"
          fontSize="1.2em"
          border="1px solid white"
          px="14px"
          pt="19px"
          pb="19px"
        >
          MyTestApp
        </Text>
      </Box>
    </Box>
  )
}

export default Nav
