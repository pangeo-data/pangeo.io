import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Link as ChakraLink } from '@chakra-ui/react'
import { NextLink } from 'next/link'
import { Image, Text } from '@chakra-ui/react'
import React from 'react'

export const Link = React.forwardRef(function CustomLink(props, ref) {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))
  const { useExternalIcon, ...rest } = props

  if (isInternalLink) {
    return (
      <ChakraLink
        as={NextLink} // not 100% sure this works with chakra but something similar should!
        ref={ref}
        {...rest}
      >
        {rest.children}
      </ChakraLink>
    )
  }

  return (
    <ChakraLink isExternal as={NextLink} {...rest} ref={ref}>
      {rest.children}
      {useExternalIcon && <ExternalLinkIcon mx='2px' />}
    </ChakraLink>
  )
})

export const Doi = (props) => {
  const doi = props.doi

  if (!doi) return null
  return (
    <Link href={`https://doi.org/${doi}`}>
      <Image src={`https://zenodo.org/badge/DOI/${doi}.svg`} alt='DOI' />
    </Link>
  )
}

export const ShowcaseTitle = (props) => {
  const url = props.url
  const title = props.title
  if (url) {
    return (
      <Link href={url} fontSize={'xl'} fontWeight={'bold'}>
        {title}
      </Link>
    )
  } else {
    return (
      <Text fontSize={'xl'} fontWeight={'bold'}>
        {title}
      </Text>
    )
  }
}
