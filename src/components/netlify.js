import { Link } from '@/components/mdx'
import { Box, Image } from '@chakra-ui/react'

export function NetlifyCallout() {
  return (
    <Box my='6' display='inline-block'>
      <Link href='https://www.netlify.com'>
        <Image
          src='https://www.netlify.com/v3/img/components/netlify-dark.svg'
          alt='Deploys by Netlify'
          height='40px'
        />
      </Link>
    </Box>
  )
}
