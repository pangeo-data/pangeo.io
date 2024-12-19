import { Image as ChakraImage } from '@chakra-ui/react'

// Not functional: https://github.com/chakra-ui/chakra-ui/discussions/2475
export const Image = (props) => {
  const { src, alt, ...rest } = props
  if (!src) return null
  return (
    <ChakraImage src={src} alt={alt} {...rest} loading='lazy'></ChakraImage>
  )
}
