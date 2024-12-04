import {
  Box,
  Button,
  Container,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react'

import { CoreLibraries } from '@/components/crossdomain-libraries'
import { Heading, Link } from '@/components/mdx'
import { GeoscientificLibraries } from '@/components/geoscience-libraries'

export const Ecosystem = () => {
  return (
    <Box id={'ecosystem'} as='section'>
      <Container maxW='container.lg' centerContent>
        <Heading as='h1' size='2xl'>
          Software Ecosystem
        </Heading>
        <Text fontSize={'lg'}>
          The Pangeo community is actively engaged in developing geoscientific
          software and plaftorms. Many of these tools are useful far beyond the
          geoscientific domain.
        </Text>

        <Tabs
          my={8}
          align='center'
          variant='enclosed'
          isFitted
          colorScheme='teal'
        >
          <TabList>
            <Tab _selected={{ color: 'white', bg: 'teal.500' }}>
              Cross-domain libraries
            </Tab>
            <Tab _selected={{ color: 'white', bg: 'teal.500' }}>
              Geoscience libraries
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <CoreLibraries />
            </TabPanel>
            <TabPanel>
              <GeoscientificLibraries />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  )
}
