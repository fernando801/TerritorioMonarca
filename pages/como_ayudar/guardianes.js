import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'

export default function Guardianes() {
  return (
    <div>
      <Header />
      <section>
        <div className='container mx-auto px-4 py-16'>
          <div className='mx-auto text-justify md:max-w-[800px]'>
            <h1 className='mx-auto py-4 text-center sm:mb-12'>
              ¿Qué es un Guardian Monarca?
            </h1>
            <p className='py-2 px-6'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus repellat sit esse doloremque labore blanditiis
              perspiciatis dolor est at, dolore laboriosam et libero? Corporis
              dolorem pariatur consectetur placeat aliquid atque!
            </p>
            <p className='py-2 px-6'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus repellat sit esse doloremque labore blanditiis
              perspiciatis dolor est at, dolore laboriosam et libero? Corporis
              dolorem pariatur consectetur placeat aliquid atque!
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className='container mx-auto px-8 text-center'>
          <div className='mx-auto bg-white py-8 px-16 w-fit rounded-3xl shadow'>
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
            <Image 
              src='/images/guardianes_logo.png'
              width={452}
              height={455}
            />
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
