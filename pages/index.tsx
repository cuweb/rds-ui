import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '@src/blocks/Banner/Banner'
import Layout from '@src/layouts/Layout/Layout'
import Main from '@src/layouts/Layout/Main'
import Aside from '@src/layouts/Layout/Aside'

const Home: NextPage = () => (
    <>
        <Head>
            <title>Raven Design System - Carleton University</title>
            <meta
                name='description'
                content='RDS, Carleton University’s design system, is a living digital organism uniting campus wide teams around a common visual language'
            />
            <link rel='icon' href='/favicon.ico' />
        </Head>
        <header>
            <Banner title='Raven Design System' />
            <Layout type='am'>
                <Aside>
                    <h3>Left Aside</h3>
                    <p>
                        The left-side aside is intended for site navigation
                        using the Menu block. The column has a fixed width of
                        200px, and disappears from view below 810px. While the
                        main purposes of this aside is to contain a site
                        navigation, additional aside blocks can be added below
                        the menu.
                    </p>
                </Aside>
                <Main>
                    <h2>Multicol AM (Aside + Main)</h2>
                    <p>
                        This is a two column layout consisting of an aside,
                        immediately followed by the main content area. The base
                        class name l-multicol-am reflects the order that the
                        elements appears in its used of am.'
                    </p>
                </Main>
            </Layout>
        </header>
    </>
)

export default Home
