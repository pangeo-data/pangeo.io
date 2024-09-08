import { Box, Circle, Flex, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { IoIosGlobe, IoLogoGithub } from 'react-icons/io'

import { Image } from '@/components/mdx'
import { Libraries as data } from '@/data/core-libraries'

import { SocialLink } from '@/components/social-link'

const Library = ({ name, description, repo, url, logo }) => {
  return (
    <Stack direction='row' spacing={6} align='flex-start'>
      <Circle overflow='hidden'>
        <Flex w={32} h={32} align={'center'} justify={'center'}>
          {' '}
          <Image src={logo} alt={name} />
        </Flex>
      </Circle>
      <Stack spacing={4}>
        <Text fontWeight={'bold'}>{name}</Text>
        <Stack direction={'row'} align='center' spacing={2}>
          <SocialLink
            href={repo}
            icon={IoLogoGithub}
            label={`View ${name}'s Github`}
          />
          {url && (
            <SocialLink
              href={url}
              icon={IoIosGlobe}
              label={`View ${name}'s website`}
            />
          )}
        </Stack>
        <Text fontSize='sm' color='fg-muted'>
          {description}
        </Text>
      </Stack>
    </Stack>
  )
}

export const CoreLibraries = () => {
  const libraries = React.useMemo(() => data, [])
  return (
    <Box my={8}>
      <Text fontSize={'lg'}>
        Pangeo contributes to developing essential software for open,
        reproducible, scalable geoscience. Many of these libraries are also
        broadly applicable across many domains.
      </Text>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={8}
        my={8}
        align={'left'}
      >
        {libraries.map((library, index) => (
          <Library
            key={index}
            name={library.name}
            description={library.description}
            logo={library.logo}
            url={library.url}
            repo={library.repo}
          />
        ))}
      </SimpleGrid>
    </Box>
  )
}
