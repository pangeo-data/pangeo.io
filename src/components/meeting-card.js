import { Heading, aImage, Link } from '@/components/mdx'
import {
  Box,
  LinkBox,
  LinkOverlay,
  Stack,
  VStack,
  Text,
} from '@chakra-ui/react'
import { SiGoogledocs } from 'react-icons/si'
import { SocialLink } from '@/components/social-link'
import { IoIosCall } from 'react-icons/io'

export const MeetingCard = ({
  name,
  description,
  schedule,
  conferencing,
  notes,
}) => {
  return (
    <LinkBox
      p={6}
      rounded='lg'
      transitionProperty='all'
      transitionDuration='slower'
      transitionTimingFunction='ease-out'
      bg='gray.50'
      _dark={{ bg: 'gray.700' }}
      _hover={{
        transform: 'scale(1.025)',
        boxShadow: 'md',
      }}
    >
      <LinkOverlay
        href={name || notes}
        as={Link}
        _hover={{
          textDecoration: 'none',
        }}
        justify={'left'}
      >
        <VStack align={'start'}>
          <Box>
            <Heading as='h2' size='1xl'>
              {name}
            </Heading>
            <Text my={4} noOfLines={4}>
              {schedule}
            </Text>
            <Text my={4} noOfLines={4}>
              {description}
            </Text>
            <Stack direction={'row'} align='center' spacing={2}>
              <SocialLink
                href={conferencing}
                icon={SiGoogledocs}
                label={`View ${name}'s notes`}
              />
              {conferencing && (
                <SocialLink
                  href={conferencing}
                  icon={IoIosCall}
                  label={`Join ${name}'s conference call`}
                />
              )}
            </Stack>
          </Box>
        </VStack>
      </LinkOverlay>
    </LinkBox>
  )
}
