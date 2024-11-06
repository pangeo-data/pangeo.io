import {
  Box,
  Container,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'

import { Layout } from '@/components/layout'
import { Heading, Link } from '@/components/mdx'

import { MeetingCard } from '@/components/meeting-card'
import {
  CommunityMeetings,
  WorkingGroups,
  PastWorkingGroups,
} from '@/data/meetings'

export default function Showcase({}) {
  return (
    <Layout
      title={'Meetings | Pangeo'}
      url={'https://pangeo.io/meetings'}
      card={'/Pangeo-assets/pangeo_card_white.png'}
    >
      <Box my={8}>
        <Container maxW='container.lg' py={20}>
          <Heading as='h1' size='2xl'>
            Community meetings
          </Heading>
          <Text fontSize={'lg'}>
            Pangeo gathers regularly through community meetings and working
            groups.{' '}
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
              View the community calendar here.
            </Link>
          </Text>
          <SimpleGrid
            my={8}
            columns={{ base: 1, md: 2, lg: 2 }}
            spacing={8}
            justifyContent={'space-between'}
          >
            {CommunityMeetings.map((project, index) => (
              <MeetingCard
                key={index}
                name={project.name}
                description={project.description}
                schedule={project.schedule}
                conferencing={project.conferencing}
                notes={project.notes}
              ></MeetingCard>
            ))}
          </SimpleGrid>
          <Heading as='h1' size='2xl'>
            Active Working Groups
          </Heading>

          <SimpleGrid
            my={8}
            columns={{ base: 1, md: 2, lg: 2 }}
            spacing={8}
            justifyContent={'space-between'}
          >
            {WorkingGroups.map((project, index) => (
              <MeetingCard
                key={index}
                name={project.name}
                description={project.description}
                schedule={project.schedule}
                conferencing={project.conferencing}
                notes={project.notes}
              ></MeetingCard>
            ))}
          </SimpleGrid>
          <Heading as='h1' size='2xl'>
            Past Working Groups
          </Heading>

          <SimpleGrid
            my={8}
            columns={{ base: 1, md: 2, lg: 2 }}
            spacing={8}
            justifyContent={'space-between'}
          >
            {PastWorkingGroups.map((project, index) => (
              <MeetingCard
                key={index}
                name={project.name}
                description={project.description}
                schedule={project.schedule}
                conferencing={project.conferencing}
                notes={project.notes}
              ></MeetingCard>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Layout>
  )
}
