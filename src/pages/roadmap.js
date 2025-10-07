import React from 'react';
import { Box, Container, Text, OrderedList, UnorderedList, ListItem, Link } from '@chakra-ui/react';

import { Layout } from '@/components/layout'
import { Heading, } from '@/components/mdx'

export default function Roadmap({ }) {
    return (
        <Layout
            title={'Meetings | Pangeo'}
            url={'https://pangeo.io/meetings'}
            card={'/Pangeo-assets/pangeo_card_white.png'}
        >
            <Box my={8}>
                <Container maxW='container.lg' py={20}>
                    <Heading as="h1" size="xl" mb={4}>
                        Pangeo Roadmap
                    </Heading>
                    <Text fontWeight="bold">Drafted: June 2023</Text>
                    <Text mt={4}>
                        This document outlines the Pangeo roadmap for the next 2 years.
                    </Text>
                    <Text>
                        The Pangeo project is a community effort. We present this roadmap to indicate our goals moving forward and to
                        present our plan to maintain a relevant and healthy community for all members. We intend to adapt our roadmap
                        as the community evolves and new opportunities arise.
                    </Text>

                    <Text mt={4}>The Pangeo roadmap is organized into 2 sections:</Text>
                    <OrderedList>
                        <ListItem>
                            <Text as="strong">Supporting the Pangeo Community</Text>: Ongoing efforts to support discussion, collaboration, and community gatherings.
                        </ListItem>
                        <ListItem>
                            <Text as="strong">Supporting the Evolution of the Geoscience Software Stack</Text>: Ongoing and dedicated activities to deliver software for large-scale geoscience.
                        </ListItem>
                    </OrderedList>

                    <Heading as="h2" size="lg" mt={8} mb={4}>
                        Supporting the Pangeo Community
                    </Heading>
                    <Text>The Pangeo Steering Council is committed to maintaining the following community forums:</Text>
                    <UnorderedList mt={4}>
                        <ListItem>
                            <Link href="https://discourse.pangeo.io" isExternal>Pangeo Discourse</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://pangeo.io/pangeo-showcase.html" isExternal>Pangeo Showcase</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://twitter.com/pangeo_data" isExternal>Pangeo Twitter</Link>
                        </ListItem>
                        <ListItem>Community events at conferences</ListItem>
                    </UnorderedList>

                    <Text mt={4}>
                        The Pangeo Steering Council plans to apply for funding to hire a part- or full-time community manager who will help
                        with these forums and also create and curate a monthly newsletter. The community manager will assist the Steering Council to define a strategy for attending and presenting at
                        conferences and organizing Pangeo-dedicated events. The community manager will help define what, where, and how
                        we communicate about Pangeo, which will include updating and maintaining the website.
                    </Text>

                    <Heading as="h2" size="lg" mt={8} mb={4}>
                        Supporting the Evolution of the Geoscience Software Stack
                    </Heading>
                    <Text>
                        The Pangeo community will continue to drive the development and evolution of software tools that facilitate
                        geoscience research (sometimes called the Pangeo Software Stack). Many of the tools used by the Pangeo community
                        have their own communities and are sponsored by NumFocus (e.g., Zarr and Xarray). With regards to software support,
                        the goal of Pangeo is to provide a space for software developers and geoscience researchers to engage in discussion
                        and collaboration to ensure the usefulness and relevance of the software tools to their scientific use cases.
                    </Text>

                    <Text mt={4}>Pangeo will support the geoscience software stack in three ways:</Text>
                    <OrderedList mt={4}>
                        <ListItem>
                            <Text as="strong">Advocate for new directions and best practices</Text> in the development of new tools, maintenance of
                            existing tools, and the use of these tools in a geoscience context. Advocacy will be driven by community input
                            via community forums (e.g., Pangeo meetings or Discourse). We believe that establishing and communicating
                            community-accepted conventions and best practices is necessary for cross-platform collaboration as the landscape
                            of resources continuously evolves. A current example is the Pangeo advocacy for the use of STAC to facilitate
                            access to datasets.
                        </ListItem>
                        <ListItem>
                            <Text as="strong">Continue developing geoscience software and platforms</Text>. For example, the Pangeo community is
                            actively engaged in the evolution of the Zarr specification and the Xarray package.
                        </ListItem>
                        <ListItem>
                            <Text as="strong">Identify new and exciting developments</Text> in the open-source software community. Encourage these
                            developments via GitHub, community meetings, the Pangeo Discourse, and tutorials. If the interest and impact are
                            deemed large enough, Pangeo will support these developments to become their own entities, as demonstrated by
                            previous cases including <Link href="https://2i2c.org" isExternal>2i2c</Link>,
                            <Link href="https://pangeo-forge.org" isExternal>Pangeo Forge</Link>, and
                            <Link href="https://projectpythia.org" isExternal>Project Pythia</Link>.
                        </ListItem>
                    </OrderedList>
                </Container>
            </Box>
        </Layout>
    )
}
