import { Banner } from '@/components/banner'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Link } from '@/components/mdx'
import { Box, Flex } from '@chakra-ui/react'
import Head from 'next/head'

export const Layout = ({
  title,
  description,
  card,
  children,
  url = 'https://pangeo.io',
  enableBanner = false,
}) => {
  const bannerTitle = 'Welcome to Pangeo’s new website!'
  const bannerDescription = ''
  const bannerChildren = (
    <Link href='https://discourse.pangeo.io/c/meta/'>
      Please give feedback by participating in the Discourse discussion.
    </Link>
  )
  return (
    <>
      <Head>
        <meta content='IE=edge' httpEquiv='X-UA-Compatible' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={card} />
        <meta property='og:url' content={url} />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={card} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@pangeo_data' />
        <link
          rel='icon'
          type='image/png'
          sizes='96x96'
          href='/Pangeo-assets/Icon/Pangeo-Icon.svg'
        />
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <link rel='icon' type='image/png' href='/favicon.png' />

        <title>{title}</title>
      </Head>
      <Flex
        direction={'column'}
        justify={'space-between'}
        gap={0}
        minHeight={'100vh'}
      >
        <Box>
          <Header />
          {enableBanner && (
            <Banner title={bannerTitle} description={bannerDescription}>
              {bannerChildren}
            </Banner>
          )}
          {children}
        </Box>

        <Footer />
      </Flex>
    </>
  )
}

export default Layout
