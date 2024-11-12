import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react'

import { EventCard } from '@/components/event-card'

import { Layout } from '@/components/layout'
import { getSortedEventsMetadata } from '@/lib/events'

export default function Events({ allEventsData }) {
  return (
    <Layout
      title={'Events | Pangeo'}
      url={'https://pangeo.io/events'}
      card={'/Pangeo-assets/pangeo_card_white.png'}
    >
      <Box my={8}>
        <Container maxW='container.lg' py={20}>
          <Heading as='h1' size='2xl'>
            Upcoming events
          </Heading>
          <SimpleGrid
            my={8}
            columns={{ base: 1, md: 2, lg: 2 }}
            spacing={8}
            justifyContent={'space-between'}
          >
            {allEventsData
              .filter((event) => Date.parse(event.endtime) >= Date.now())
              .sort((a, b) => Date.parse(a.starttime) - Date.parse(b.starttime))
              .map((event) => (
                <EventCard key={event.id} event={event}></EventCard>
              ))}
          </SimpleGrid>
          <Heading as='h1' size='2xl'>
            Past events
          </Heading>
          <SimpleGrid
            my={8}
            columns={{ base: 1, md: 2, lg: 2 }}
            spacing={8}
            justifyContent={'space-between'}
          >
            {allEventsData
              .filter((event) => Date.parse(event.endtime) < Date.now())
              .sort((a, b) => Date.parse(a.starttime) - Date.parse(b.starttime))
              .map((event) => (
                <EventCard key={event.id} event={event}></EventCard>
              ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Layout>
  )
}

export async function getStaticProps() {
  const allEventsData = getSortedEventsMetadata()
  return {
    props: {
      allEventsData,
    },
  }
}
