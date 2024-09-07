import { Box, Button, Container, Heading, Stack, Text } from '@chakra-ui/react'

import { Image, Link } from '@/components/mdx'

export const HeroBanner = () => {
  return (
    <Box as='section'>
      <Container maxW='container.lg' py={24} centerContent>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          justify={'center'}
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
            >
              <Text
                as={'span'}
                color={'blue.800'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  zIndex: -1,
                }}
              >
                Pangeo
              </Text>
              <br />
              <Text as={'span'} color={'red.400'}>
                A community for open, reproducible, scalable geoscience.
              </Text>
            </Heading>
            <Text fontSize={'lg'}>
              <strong>Pangeo</strong> is first and foremost a community
              promoting open, reproducible, and scalable science. This community
              provides documentation, develops and maintains software, and
              deploys computing infrastructure to make scientific research and
              programming easier.
            </Text>
            <Button
              useExternalIcon
              as={Link}
              variant={'outline'}
              colorScheme={'blue'}
              href='https://discourse.pangeo.io/'
            >
              Join the Discourse
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
