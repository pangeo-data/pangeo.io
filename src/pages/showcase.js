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
import { Link } from '@/components/mdx'
import { distanceToNow, formatDate, formatTime } from '@/lib/date-formatting'
import { FutureShowcaseTalks, PastShowcaseTalks } from '@/data/showcase-talks'

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
          <Link href={page.url} fontSize={'xl'} fontWeight={'bold'}>
            {page.title}
          </Link>

          <Text fontSize={'sm'} color={'gray.600'} py={4}>
            {formatDate(date)} {page.time} ({distanceToNow(date)})
          </Text>

          <Text noOfLines={3} py={4}>
            {page.summary}
          </Text>
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
            scientific workflows.
          </Text>
          <Container centerContent>
            <Link
              style={{
                textDecoration: 'underline',
              }}
              href='https://forms.gle/QwxKusVvrvDakSNs8'
            >
              {' '}
              If you are interested in presenting, please fill out this short
              form.
            </Link>
            <Divider my={4} borderColor='gray.200' />
          </Container>
          <VStack
            divider={<StackDivider borderColor='gray.200' />}
            spacing={-4}
            align='stretch'
          >
            {FutureShowcaseTalks.sort(
              (a, b) => Date.parse(a.date) - Date.parse(b.date),
            ).map((page) => {
              return <SinglePresentation key={page.id} page={page} />
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
            {PastShowcaseTalks.sort(
              (a, b) => Date.parse(b.date) - Date.parse(a.date),
            ).map((page) => {
              return <SinglePresentation key={page.id} page={page} />
            })}
          </VStack>
          <Divider my={2} borderColor='gray.200' />
        </Container>
      </Box>
    </Layout>
  )
}
