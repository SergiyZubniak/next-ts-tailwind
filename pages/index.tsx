
import React, { Suspense } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'

import AboutUs from './components/aboutus'


import Apps from './components/somenew'
const Masthead = React.lazy(() => import('./components/masthead'))


const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Margelo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Apps />
      <Suspense fallback={<div>Loading...</div>}>
      <Masthead />
      </Suspense>
      
      <AboutUs />
      
      
      
    </div>
  )
}

export default Home
