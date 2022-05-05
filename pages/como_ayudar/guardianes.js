import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'

export default function Guardianes() {
  return (
    <div>
      <Header />
      <section>
        <div className='container mx-auto px-4 py-16 pt-8 sm:pt-16'>
          <div className='mx-auto text-justify md:max-w-[800px]'>
            <h1 className='mx-auto py-4 text-center sm:mb-12'>
              ¿Qué es un Guardian Monarca?
            </h1>
            <p className='py-2 px-6'>
              Es una estrategia para generar participación activa a nivel
              nacional en la conservación del Patrimonio Natural de la República
              Mexicana. Esta área está enfocada a la sociedad civil que no es
              parte de la fundación en sí, pero tiene la inquietud de ayudar a
              la conservación de la mariposa monarca.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className='container mx-auto px-8 text-center'>
          <div className='mx-auto w-fit rounded-3xl bg-white py-8 px-16 shadow'>
            <h2 className='py-6'>Ya Somos</h2>
            <div>
              <p className='text-[5rem] font-bold text-amber-500'>117</p>
            </div>
            <h2 className='py-6'>Guardianes monarca</h2>
          </div>
        </div>
      </section>
      <section>
        <div className='container mx-auto px-4 py-16'>
          <div className='mx-auto w-full max-w-md p-8'>
            <Image src='/images/guardianes_logo.png' width={452} height={455} alt='guardianes logo'/>
          </div>
          <Link href='/productos/'>
            <div className='pill mx-auto mt-4 cursor-pointer px-8 py-2 font-serif text-xl hover:bg-amber-400 active:scale-95'>
              Conoce Nuestros Paquetes
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
