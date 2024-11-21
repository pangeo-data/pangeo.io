import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react'

import { MDXRemote } from 'next-mdx-remote'

import { Layout } from '@/components/layout'
import { mapping } from '@/components/mdx'
import { MDXElements } from '@/lib/mdx-elements'

import { serialize } from 'next-mdx-remote/serialize'
import rehypeSlug from 'rehype-slug'

import fs from 'fs'
import matter from 'gray-matter'

export default function Contributing({ source }) {
  return (
    <Layout
      title={'Participate in Pangeo!'}
      description={'Join us and contribute to the community'}
      url={`https://pangeo.io/participate`}
    >
      <Box as={'section'}>
        <Container maxW='container.lg' py={10}>
          <Box spacing='3' alignItems='start'>
            <MDXRemote
              {...source}
              components={{ ...mapping, ...MDXElements }}
            />
          </Box>
        </Container>
      </Box>
    </Layout>
  )
}

export async function getStaticProps() {
  const filePath = 'src/community/participating.md'
  const source = fs.readFileSync(filePath, 'utf8')
  const { content } = matter(source)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypeSlug],
      format: 'mdx',
    },
  })

  return { props: { source: mdxSource } }
}
