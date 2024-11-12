import { Heading, aImage, Link } from '@/components/mdx'
import {
  Box,
  LinkBox,
  LinkOverlay,
  Stack,
  VStack,
  Text,
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { FaCalendar, FaMapMarkerAlt } from 'react-icons/fa'
import { distanceToNow, formatDate, formatTime } from '@/lib/date-formatting'

export const EventCard = ({ event }) => {
  return (
    <Box p={6} rounded='lg' bg='gray.50' _dark={{ bg: 'gray.700' }}>
      <VStack align={'start'}>
        <Box>
          <Link
            href={`/events/${event.id}`}
            fontSize={'xl'}
            fontWeight={'bold'}
          >
            {event.name}
          </Link>
          <Text my={4} noOfLines={2}>
            {event.description}
          </Text>
          <Text my={4} noOfLines={2}>
            <Icon as={FaCalendar} /> {formatDate(event.starttime)}
          </Text>
          <Text my={4} noOfLines={4}>
            <Icon as={FaMapMarkerAlt} /> {event.location}
          </Text>
        </Box>
      </VStack>
    </Box>
  )
}
