import {
  Avatar,
  AvatarGroup,
  Box,
  Container,
  Divider,
  Heading,
  Spacer,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'

import { motion } from 'framer-motion'

import { Layout } from '@/components/layout'
import { Link, Doi, ShowcaseTitle } from '@/components/mdx'
import { distanceToNow, formatDate, formatTime } from '@/lib/date-formatting'
import { ShowcaseTalks } from '@/data/showcase-talks'

const SinglePresentation = ({ page }) => {
  const date = new Date(page.date)

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <Stack
        spacing='2'
        align='stretch'
        my={{ base: 5, md: 10 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Box>
          <ShowcaseTitle url={page.url} title={page.title}></ShowcaseTitle>
          <Text fontSize={'sm'} color={'gray.600'} py={4}>
            {formatDate(date)} {page.time} ({distanceToNow(date)})
          </Text>
          <Doi doi={page.doi}> </Doi>
        </Box>
        <Spacer />
        <Box>
          <AvatarGroup size={'lg'}>
            {page.authors.map((author) => {
              return (
                <Avatar
                  key={author.name}
                  src={`https://github.com/${author.github}.png`}
                  name={author.name}
                />
              )
            })}
          </AvatarGroup>
        </Box>
      </Stack>
    </motion.div>
  )
}

export default function Showcase({}) {
  return (
    <Layout
      title={'Showcase | Pangeo'}
      url={'https://pangeo.io/showcase'}
      card={'/Pangeo-assets/pangeo_card_white.png'}
    >
      <Box as='section'>
        <Container maxW='container.lg' py={20}>
          <Heading as='h1' size='2xl' textAlign={'center'} my={4}>
            Showcase
          </Heading>
          <Text
            color={useColorModeValue('gray.800', 'white')}
            fontSize={'lg'}
            textAlign={'center'}
          >
            Upcoming presentations about software tools, datasets, and
            scientific workflows.{' '}
            <Link
              href={'/calendar'}
              color={useColorModeValue('gray.600', 'gray.200')}
              _hover={{
                textDecoration: 'none',
                // eslint-disable-next-line react-hooks/rules-of-hooks
                color: useColorModeValue('gray.800', 'white'),
              }}
              textDecoration={'underline'}
              fontSize={'lg'}
            >
              View the community calendar.
            </Link>
          </Text>

          <Container centerContent>
            <Link
              style={{
                textDecoration: 'underline',
              }}
              href='https://forms.gle/QwxKusVvrvDakSNs8'
            >
              {' '}
              Sign up to present here!
            </Link>
            <Divider my={4} borderColor='gray.200' />
          </Container>
          <VStack
            divider={<StackDivider borderColor='gray.200' />}
            spacing={-4}
            align='stretch'
          >
            {ShowcaseTalks.filter(
              (page) => Date.parse(page.date) + 3600000 >= Date.now(),
            )
              .sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
              .map((page) => {
                return <SinglePresentation key={page.date} page={page} />
              })}
          </VStack>
          <Divider my={2} borderColor='gray.200' />
        </Container>
      </Box>
      <Box as='section'>
        <Container maxW='container.lg' py={20}>
          <Heading as='h1' size='2xl' textAlign={'center'} my={4}>
            Past pangeo showcase presentations
          </Heading>

          <Divider my={4} borderColor='gray.200' />

          <VStack
            divider={<StackDivider borderColor='gray.200' />}
            spacing={-4}
            align='stretch'
          >
            {ShowcaseTalks.filter(
              (page) => Date.parse(page.date) + 3600000 < Date.now(),
            )
              .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
              .map((page) => {
                return <SinglePresentation key={page.date} page={page} />
              })}
          </VStack>
          <Divider my={2} borderColor='gray.200' />
        </Container>
      </Box>
    </Layout>
  )
}
