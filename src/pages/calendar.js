import { Layout } from '@/components/layout'
import { Box, Container, Divider, Flex, Heading } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

const CommunityCalendar = () => {
  const [timezone, setTimezone] = useState('UTC')

  useEffect(() => {
    try {
      const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
      setTimezone(userTimezone || 'UTC')
    } catch (error) {
      console.error('Failed to detect timezone:', error)
      setTimezone('UTC')
    }
  }, [])

  return (
    <Layout title={'Community calendar'}>
      <Box as='section'>
        <Container maxW='container.lg' py={24} centerContent>
          <Heading as='h1' size='2xl'>
            Pangeo Community Calendar
          </Heading>
          <Divider my={4} borderColor='gray.200' />
          <Flex
            w={'60vw'}
            minH={'40vw'}
            as='iframe'
            src={`https://calendar.google.com/calendar/embed?src=ucar.edu_c23ln4014khs3f65o93vqv5kqc%40group.calendar.google.com&ctz=${timezone}`}
          />
        </Container>
      </Box>
    </Layout>
  )
}

export default CommunityCalendar
