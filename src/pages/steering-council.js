import { Layout } from '@/components/layout'
import { Image, Link } from '@/components/mdx'
import { SteeringCouncilMember } from '@/components/steering-council-member'
import { SteeringCouncilMembers } from '@/data/steering-council-members'
import { Box, Container, Heading, SimpleGrid, Text } from '@chakra-ui/react'

const SteeringCouncil = () => {
  return (
    <Layout title={'Pangeo Steering Council'}>
      <Box as='section' py={20}>
        <Container maxW='container.lg'>
          <Heading as='h1' size='2xl' textAlign={'center'}>
            SteeringCouncil
          </Heading>

          <Box py={4}>
            <Heading as='h2' size='xl' textAlign={'center'} my={16}>
              Current steering council members 🤝
            </Heading>
            <Text>
              Pangeo Steering Council members ensure the long-term well-being of
              the project through input from community members. The current
              steering council comprises:
            </Text>
          </Box>

          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 2, xl: 2, '2xl': 3 }}
            spacing={8}
            my={4}
            align={'left'}
          >
            {SteeringCouncilMembers.map((member) => (
              <SteeringCouncilMember key={member.name} member={member} />
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Layout>
  )
}

export default SteeringCouncil
