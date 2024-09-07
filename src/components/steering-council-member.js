import { Image } from '@/components/mdx'
import { SocialLink } from '@/components/social-link'
import { useGHUSER } from '@/lib/data-fetching'
import { Box, Circle, Flex, Skeleton, Stack, Text } from '@chakra-ui/react'
import { BsBuilding } from 'react-icons/bs'
import { IoIosGlobe, IoLogoGithub, IoLogoTwitter } from 'react-icons/io'

export const SteeringCouncilMember = ({ member }) => {
  const { data, error, isLoading } = useGHUSER(
    `https://api.github.com/users/${member.github}`,
  )
  if (error)
    return (
      <Box>
        {error.status} - {error.message} - {JSON.stringify(error.info)}
      </Box>
    )

  return (
    <Stack direction='row' spacing={6} align='flex-start'>
      <Circle overflow='hidden'>
        <Flex w={32} h={32} align={'center'} justify={'center'}>
          {' '}
          <Image
            src={`https://github.com/${member.github}.png`}
            alt={member.name}
          />
        </Flex>
      </Circle>

      <Stack spacing={4}>
        <Text fontWeight={'bold'}>{member.name}</Text>
        <Skeleton isLoaded={!isLoading}>
          <Stack direction={'row'} align='center' spacing={2}>
            <SocialLink
              href={`https://github.com/${member.github}`}
              icon={IoLogoGithub}
              label={`View ${member.name}'s Github`}
            />

            {data?.blog && (
              <SocialLink
                href={
                  data.blog.startsWith('http')
                    ? data.blog
                    : `https://${data.blog}`
                }
                icon={IoIosGlobe}
                label={`View ${member.name}'s website`}
              />
            )}

            {data?.twitter_username && (
              <SocialLink
                href={`https://twitter.com/${data.twitter_username}`}
                icon={IoLogoTwitter}
                label={`View ${member.name}'s Twitter`}
              />
            )}
          </Stack>
        </Skeleton>
        <Skeleton isLoaded={!isLoading}>
          {data?.bio && (
            <Text fontSize='sm' color='fg-muted' noOfLines={2}>
              {data.bio}
            </Text>
          )}

          {data?.company && (
            <Stack direction={'row'} align='center' spacing={2} my={2}>
              <BsBuilding />
              <Text fontSize='sm' color='fg-muted'>
                {data.company}
              </Text>
            </Stack>
          )}
        </Skeleton>
      </Stack>
    </Stack>
  )
}
