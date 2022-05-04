import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <section className='rounded-b-3xl bg-zinc-200'>
        <div className='container relative mx-auto px-4 py-36'>
          <div className='absolute left-1/2 -bottom-16 mx-auto aspect-square w-64 -translate-x-1/2 transform rounded-full bg-amber-500 lg:w-72'></div>
        </div>
      </section>
      <section>
        <div className='container mx-auto px-4 py-28 text-center'>
          <h1 className='mb-8 text-5xl'>Territorio Monarca</h1>
          <p className='px-8 py-2'>
            Somos una Fundación que desde 2017 protege a la mariposa monarca al
            cuidar la ruta que usa en México para llegar al Santuario en
            Michoacán.
          </p>
          <p className='px-8 py-2'>
            Al proteger a la mariposa monarca, protegemos al medio ambiente y el
            ecosistema mexicano puesto que las mariposas monarca son aquellas
            que se encargan de polinizar.
          </p>
        </div>
      </section>
      <section className='rounded-3xl bg-zinc-200'>
        <div className='container relative mx-auto px-4 py-12'>
          <div className='absolute left-1/2 -top-16 mx-auto aspect-square w-52 -translate-x-1/2 transform rounded-full bg-zinc-200 lg:w-64'></div>
          <h2 className='pill relative mx-auto px-8 py-1'>Creadores</h2>
          <div className='relative mt-8 flex flex-wrap justify-center gap-8 py-4'>
            <div className='aspect-square w-36 rounded-full bg-amber-500 sm:w-40 lg:w-48'></div>
            <div className='aspect-square w-36 rounded-full bg-amber-500 sm:w-40 lg:w-48'></div>
            <div className='aspect-square w-36 rounded-full bg-amber-500 sm:w-40 lg:w-48'></div>
            <div className='aspect-square w-36 rounded-full bg-amber-500 sm:w-40 lg:w-48'></div>
            <div className='aspect-square w-36 rounded-full bg-amber-500 sm:w-40 lg:w-48'></div>
            <div className='aspect-square w-36 rounded-full bg-amber-500 sm:w-40 lg:w-48'></div>
          </div>
        </div>
      </section>
      <section>
        <div className='container mx-auto px-4 py-12'>
          <h2 className='mx-auto px-8 text-center'> Nuestra Historia</h2>
          <div className='bg-whiete mx-auto mt-8 w-5/6 rounded-3xl bg-white p-8 text-center'>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos,
              officiis. Nam dolore consequatur fugit. Modi, nostrum cum. Labore
              modi, amet fugiat laboriosam at, vel aliquid quis, earum cumque
              explicabo natus.
            </p>
          </div>
        </div>
      </section>
      <section className='bg-zinc-200'>
        <div className='container mx-auto px-4 py-12'>
          <h2 className='pill mx-auto mb-8 px-8 py-1'>Aliados</h2>
          <div className='flex flex-wrap items-center justify-center gap-4'>
            <h4 className='pill bg-blue-400'>Hello Monarca</h4>
            <h4 className='pill bg-blue-400'>Hello Monarca</h4>
            <h4 className='pill bg-blue-400'>Hello Monarca</h4>
            <h4 className='pill bg-blue-400'>Hello Monarca</h4>
            <h5 className='pill bg-blue-400'>Hello Monarca</h5>
            <h6 className='pill bg-blue-400'>Hello Monarca</h6>
          </div>
        </div>
      </section>
    </div>
  )
}
