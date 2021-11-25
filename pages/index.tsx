import Banner from '@components/Banner/Banner'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => (
    <div>
        <Head>
            <title>Create Next App</title>
            <meta name='description' content='Generated by create next app' />
            <link rel='icon' href='/favicon.ico' />
        </Head>
        <header>
            <Banner title='Welcome to the new RDS' />
        </header>
    </div>
)

export default Home
