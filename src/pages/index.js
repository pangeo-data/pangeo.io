import { Donate, Ecosystem, Features, HeroBanner, Sponsors } from '@/components'

import { Layout } from '@/components/layout'

export default function IndexPage() {
  return (
    <Layout
      title={'Pangeo: A community for open, reproducible, scalable geoscience'}
      card={
        'https://raw.githubusercontent.com/pangeo-data/pangeo-tutorial/blob/agu2019/images/pangeo_simple_logo.png'
      }
      false
    >
      <HeroBanner />
      <Features />
      <Ecosystem />
      <Sponsors />
      <Donate />
    </Layout>
  )
}
