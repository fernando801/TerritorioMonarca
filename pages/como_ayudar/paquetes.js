import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PaqueteMonarca from '@/components/PaqueteMonarca'

const paquetesPublico = []

const paquetesAliados = []

export default function Jardines() {
  return (
    <>
      <Header />
      <section>
        <article className='container mx-auto p-8 sm:p-12'>
          <h1 className='text-center'>Paqutes Monarca</h1>
        </article>
      </section>
      <section className='mb-8'>
        <article className='container mx-auto p-4'>
          <h3 className='p-8'>Público en General</h3>
          <div className='overflow-auto rounded-3xl bg-clay-300 p-8'>
            <PaqueteMonarca title={'Paquete 1'} />
          </div>
        </article>
        <article className='container mx-auto p-4'>
          <h3 className='p-8'>Aliados y Empresas</h3>
          <div className='overflow-auto rounded-3xl bg-clay-300 p-8'>
            <PaqueteMonarca title={'Paquete 2'} />
          </div>
        </article>
      </section>
      <Footer />
    </>
  )
}
