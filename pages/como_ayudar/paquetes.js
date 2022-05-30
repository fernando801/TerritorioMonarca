import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import PaqueteMonarca from '@/components/PaqueteMonarca'

export default function Jardines () {
  return(
    <>
      <Header />
      <section>
        <article className='mx-auto container p-8 sm:p-12'>
          <h1 className='text-center'>Paqutes Monarca</h1>
        </article>
      </section>
      <section>
        <article className='mx-auto container p-4'>
          <h3 className='p-8'>Público en General</h3>
          <div className='rounded-3xl bg-clay-300 p-8 overflow-auto'>
            <PaqueteMonarca title={'El Bicho'}/>
          </div>
        </article>
      </section>
      <article className='mx-auto container p-4'>
          <h3 className='p-8'>Aliados y Empresas</h3>
          <div className='rounded-3xl bg-clay-300 p-8 overflow-auto'>
            <PaqueteMonarca title={'El Bicho'}/>
          </div>
        </article>
    </>
  )
}