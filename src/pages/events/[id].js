import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react'

import { ArrowBackIcon } from '@chakra-ui/icons'

import { MDXRemote } from 'next-mdx-remote'

import { Layout } from '@/components/layout'
import { Link, mapping } from '@/components/mdx'
import { distanceToNow, formatDate } from '@/lib/date-formatting'
import { MDXElements } from '@/lib/mdx-elements'

import { getAllEventsIds, getEventData } from '@/lib/events'

import { serialize } from 'next-mdx-remote/serialize'
import rehypeSlug from 'rehype-slug'

import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

export default function Event({ source, frontmatter, eventId }) {
  return (
    <Layout
      title={`${frontmatter.name}`}
      description={frontmatter.description}
      url={`https://pangeo.io/events/${eventId}`}
    >
      <Box as={'section'}>
        <Container maxW='container.lg' py={10}>
          <Box spacing='3' alignItems='start'>
            <VStack paddingTop='30px' spacing='2' alignItems='center'>
              <Heading as={'h1'} textAlign={'center'} size='xl' my={4}>
                {frontmatter.name}
              </Heading>
              <Text fontSize={'sm'} color={'gray.700'}>
                {formatDate(frontmatter.starttime)} (
                {distanceToNow(frontmatter.starttime)})
              </Text>
              <Divider my={2} />
            </VStack>
            <br></br>
            <MDXRemote
              {...source}
              components={{ ...mapping, ...MDXElements }}
            />
            {frontmatter.show_pangeo_code_of_conduct && (
              <>
                <Heading as={'h3'} size='lg' my={4}>
                  Code of Conduct
                </Heading>
                <Text>
                  All participants must abide by the{' '}
                  <Link
                    style={{
                      textDecoration: 'underline',
                    }}
                    href='https://github.com/pangeo-data/governance/blob/master/conduct/code_of_conduct.md'
                  >
                    Pangeo Code of Conduct
                  </Link>
                  .
                </Text>
              </>
            )}
          </Box>

          <Button
            my={8}
            as={Link}
            href={'/events'}
            variant={'outline'}
            leftIcon={<ArrowBackIcon />}
            colorScheme={'blue'}
          >
            Back to Events
          </Button>
          <Divider my={8} />
          <br />
        </Container>
      </Box>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllEventsIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const eventData = getEventData(params.id)
  const filePath = path.join(process.cwd(), 'src/events', eventData.file)
  const source = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(source)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypeSlug],
      format: 'mdx',
    },
  })

  return { props: { source: mdxSource, frontmatter: data, eventId: params.id } }
}
