import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JardinesDescriptions from '@/components/JardinesDescriptions'
import { jardines } from '@/lib/jardines'

export default function Jardines() {
  return (
    <>
      <Header />
      <section className='rounded-b-3xl bg-clay-300' id='nosotros'>
        <div className='container relative mx-auto py-8 px-4 sm:py-12'>
          <h1 className='mx-auto py-4 text-center '>Jardines</h1>
        </div>
      </section>
      <section>
        <div className='container mx-auto py-12'>
          <iframe
            src='https://www.google.com/maps/d/embed?mid=1WWQQD6UCvWWIm-WK9yMvGl935k1zm6JC&ehbc=2E312F'
            className='aspect-square w-full overflow-hidden rounded-xl md:aspect-video'
          ></iframe>
        </div>
      </section>
      <section className='bg-clay-300'>
        <div className='container mx-auto p-8'>
          <JardinesDescriptions jardines={jardines}/>
        </div>
      </section>
      <Footer />
    </>
  )
}
