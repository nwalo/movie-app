import { React } from 'react'
import { Box, Heading, Text, Image } from '@chakra-ui/react'
// import pic from ''
// poster
const Header = () => {
  return (
    <Box
      as="section"
      pt="90px"
      pb="144px"
      pl="77px"
      w={'full'}
      backgroundImage={'url(../../images/head.png)'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <Box>
        <Heading
          w="490px"
          textAlign={'left'}
          fontWeight="700"
          fontSize="72px"
          color="#FFFFFF"
          mb="16px"
        >
          Watch something incredible.
        </Heading>
      </Box>
    </Box>
  )
}

export default Header
