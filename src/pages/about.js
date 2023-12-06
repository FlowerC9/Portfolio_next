import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout';
import Head from 'next/head'
import React from 'react'

const about = () => {
  return (
    <>
      <Head>
        <title>Monojit | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main
        className="flex w-full flex-col
      items-center justify-center
      "
      >
        <Layout clasName='pt-16'>
          <AnimatedText text={"Passion Fuels Purpose!"} />
          <div className='grid w-full grid-cols-8 gap-16'>
            <div>
                <h2>About me</h2>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default about