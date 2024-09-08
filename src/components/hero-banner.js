import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  HStack,
  VStack,
  Text,
  Flex,
} from '@chakra-ui/react'

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
            <HStack>
              <VStack>
                <Flex w={'100%'} align={'left'} justify={'left'}>
                  <Heading
                    lineHeight={1.1}
                    fontWeight={1000}
                    fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
                  >
                    <Text
                      as={'span'}
                      color={'blue.500'}
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
                  </Heading>
                </Flex>
                <Flex w={'100%'} align={'left'} justify={'left'}>
                  <Heading
                    lineHeight={1.1}
                    fontWeight={500}
                    fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
                  >
                    <Text as={'span'} color={'blue.300'}>
                      A community for open, reproducible, scalable geoscience.
                    </Text>
                  </Heading>
                </Flex>
              </VStack>

              <Flex w={'100%'} align={'center'} justify={'center'}>
                <Image
                  src={'/Pangeo-assets/Icon/Pangeo-Icon.svg'}
                  alt='Pangeo icon'
                  objectFit='tight'
                ></Image>
              </Flex>
            </HStack>
            <Text fontSize={'lg'} color={'377E73'}>
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
