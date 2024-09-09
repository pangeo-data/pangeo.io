import { Box, Button, Container, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

import { Layout } from '@/components/layout'
import { Heading, aImage, Link } from '@/components/mdx'

import { MeetingCard } from '@/components/meeting-card'
import { RecurringMeetings } from '@/data/meetings'

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
            Recurring meetings and working groups
          </Heading>
          <Text fontSize={'lg'}>
            The Pangeo community gathers regularly through community meetings
            and topical working groups.
          </Text>

          <SimpleGrid
            my={8}
            columns={{ base: 1, md: 2, lg: 2 }}
            spacing={8}
            justifyContent={'space-between'}
          >
            {RecurringMeetings.map((project, index) => (
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
