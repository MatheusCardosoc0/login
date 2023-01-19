import { getCookie } from 'cookies-next'
import type { NextApiRequest, NextApiResponse, NextPage } from 'next'
import Head from 'next/head'
import Layaut from '../components/Layaut'
import { Verification } from '../services/functions'

const Home: NextPage = () => {

  return (
    <div >
      <Head>
        <title>login system</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layaut>
        <h1>
          [Pagina principal]
        </h1>
      </Layaut>

    </div>

  )
}


export const getServerSideProps = async ({ req, res }: { req: NextApiRequest, res: NextApiResponse }) => {
  try {
    const token = getCookie('authorization', { req, res })
    if (!token) throw new Error('Token invalido')

    Verification(token)
    return {
      props: {}
    }
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: '/Login'
      },
      props: {}
    }
  }
}

export default Home
