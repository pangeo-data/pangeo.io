import {
  Box,
  Container,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'
import React from 'react'

import { Heading } from '@/components/mdx'
import { Features as data } from '@/data/features'
import { CheckIcon } from '@chakra-ui/icons'

export const Features = () => {
  const features = React.useMemo(() => data, [])
  return (
    <Box id={'features'} as='section'>
      <Container maxW='container.lg' centerContent>
        <Heading as='h1' size='2xl'>
          Community Components
        </Heading>
        <Text fontSize={'lg'}>
          Pangeo provides the community with space and resources for addressing
          barriers to advancing open, reproducible, and scalable geoscience.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} my={8}>
          {features.map((feature, index) => (
            <HStack key={index} align={'top'} my={2}>
              <Box color={'green.400'}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
