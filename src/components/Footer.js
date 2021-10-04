import React from "react"
import {
  Box,
  Button,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Image,
  useColorModeValue,
} from "@chakra-ui/react"

import { FaTwitter, FaGithub } from "react-icons/fa"

const SocialButton = ({ children, label, href }) => {
  return (
    <Button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={12}
      h={12}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </Button>
  )
}

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  )
}

export const Footer = () => {
  return (
    <Box>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Image
                w={32}
                src={"dataset-diagram-logo.png"}
                alt={"xarray logo"}
              />
            </Box>
            <Text fontSize={"sm"}>
              © {new Date().getFullYear()}, Xarray core developers. Apache 2.0
              Licensed
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton
                label={"Twitter"}
                href={"https://twitter.com/xarray_dev"}
              >
                <FaTwitter size={70} />
              </SocialButton>
              <SocialButton
                label={"GitHub"}
                href={"https://github.com/pydata/xarray"}
              >
                <FaGithub size={70} />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Xarray</ListHeader>

            <Link
              href={
                "https://xarray.pydata.org/en/stable/getting-started-guide/faq.html#how-should-i-cite-xarray"
              }
            >
              Citing Xarray
            </Link>
            <Link href={"https://xarray.pydata.org/en/stable/roadmap.html"}>
              Roadmap
            </Link>
            <Link
              href={"https://xarray.pydata.org/en/stable/contributing.html"}
            >
              Contribute
            </Link>
            <Link href={"https://github.com/xarray-contrib"}>
              Compatible Projects
            </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Resources</ListHeader>
            <Link href={"https://xarray.pydata.org/en/stable"}>
              Documentation
            </Link>
            <Link
              href={
                "https://xarray.pydata.org/en/stable/tutorials-and-videos.html"
              }
            >
              Tutorials
            </Link>
            <Link href={"https://xarray.pydata.org/en/stable/gallery.html"}>
              Example Gallery
            </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Community</ListHeader>
            <Link href={"https://github.com/pydata/xarray/discussions"}>
              GitHub Discussions
            </Link>
            <Link href={"https://github.com/pydata/xarray/issues"}>
              Issue Tracker
            </Link>
            <Link
              href={"https://stackoverflow.com/questions/tagged/python-xarray"}
            >
              Stack Overflow
            </Link>
            <Link href={"https://groups.google.com/forum/#!forum/xarray"}>
              Mailing List
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}