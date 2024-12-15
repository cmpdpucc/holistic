import Head from 'next/head'

import { ServicesScreen } from 'app/features/Services'

export default function Page() {
  return (
    <>
      <Head>
        <title>Services</title>
      </Head>
      <ServicesScreen />
    </>
  )
}
