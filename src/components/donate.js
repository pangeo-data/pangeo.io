import {
  Box,
  Button,
  Container,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'

import { Heading, Image, Link } from '@/components/mdx'

import { BiDonateHeart } from 'react-icons/bi'

export const Donate = () => {
  return (
    <Box id={'donate'} as='section'>
      <Container maxW='container.lg' centerContent>
        <Heading as='h1' size='2xl'>
          Donate
        </Heading>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={8}
          my={8}
          justify={'center'}
          alignItems={'center'}
        >
          <Stack
            flex={1}
            spacing={{ base: 5, md: 10 }}
            justify={'center'}
            align={'center'}
            position={'relative'}
          >
            <Text fontSize={'lg'}>
              Pangeo is a Sponsored Project of NumFOCUS, a{' '}
              <Text
                as={Link}
                href={'https://en.wikipedia.org/wiki/501(c)(3)_organization'}
                color={'blue.400'}
                useExternalIcon
              >
                501(c)(3) nonprofit charity
              </Text>{' '}
              in the United States. NumFOCUS provides Pangeo with fiscal, legal,
              and administrative support to help ensure the health and
              sustainability of the project. Visit{' '}
              <Text
                as={Link}
                useExternalIcon
                href={'https://numfocus.org/'}
                color={'blue.400'}
              >
                numfocus.org
              </Text>{' '}
              for more information.
              <br />
              <br />
              If you like Pangeo and want to support our mission, please
              consider making a donation to support our efforts.
            </Text>
            <Button
              as={Link}
              fontWeight={'normal'}
              colorScheme={'red'}
              bg={'red.400'}
              _hover={{ bg: 'red.500' }}
              rightIcon={<BiDonateHeart />}
              href={'https://numfocus.org/donate-for-pangeo'}
            >
              Donate
            </Button>
          </Stack>

          <Image
            src={'/NumFOCUS_sponsored_project_logo.svg'}
            alt={'NumFocus logo'}
          ></Image>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
