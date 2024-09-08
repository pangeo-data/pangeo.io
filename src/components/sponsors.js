import React from 'react'

import { Box, Container, Flex, SimpleGrid, Text } from '@chakra-ui/react'

import { Heading, Image, Link } from '@/components/mdx'
import { Sponsors as data } from '@/data/sponsors'

export const Sponsors = () => {
  const sponsors = React.useMemo(() => data, [])

  return (
    <Box id={'sponsors'} as='section'>
      <Container maxW='container.lg' centerContent>
        <Heading as='h1' size='2xl'>
          Supported By
        </Heading>
        <Text fontSize={'lg'}>
          We thank these institutions for generously supporting the development
          and maintenance of Pangeo.
        </Text>

        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 2, lg: 4 }}
          my={4}
          spacing={'space-between'}
          align={'center'}
          justify={'center'}
        >
          {sponsors.map((sponsor, index) => (
            <Flex
              as={Link}
              href={sponsor.url}
              key={index}
              w={64}
              h={64}
              align={'center'}
              justify={'center'}
              rounded={'full'}
            >
              <Image w={36} h={36} src={sponsor.logo} alt={sponsor.name} />
            </Flex>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
