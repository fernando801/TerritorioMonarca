import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Donar() {
  return (
    <div>
      <Header />
      <section className='rounded-b-3xl bg-clay-300'>
        <div className='container relative mx-auto py-16 px-4 pt-8 sm:pt-16'>
          <div className='relative aspect-square w-64 rounded-full lg:w-80 mx-auto overflow-hidden mb-8'>
            <Image
              src='/images/donar.jpg'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <h1 className='mx-auto py-4 text-center sm:mb-12'>
            ¿Por qué necesitamos de ti?
          </h1>
          <p className='px-6 py-2 text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            aliquam nam dolore quisquam fugit alias minima autem dolor
            temporibus laudantium cumque, harum, est repudiandae vero soluta
            eveniet ratione repellendus quaerat. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quis nihil vero possimus
            reprehenderit? A, vitae temporibus. Cumque, rem porro perferendis,
            quae sint nihil dolorum officia, doloremque magni mollitia ex
            eveniet.
          </p>
        </div>
      </section>
      <section>
        <div className='container mx-auto py-12 px-8 text-center text-3xl font-bold text-mustard-500 sm:text-4xl'>
          <a href='https://www.mercadopago.com.mx/' target='_blank'>
            <h1 className='pill mx-auto mt-4 cursor-pointer px-8 py-2 font-serif hover:bg-amber-400 active:scale-95 hover:scale-105 transition-all duration-500'>
              Realiza tu Donativo
            </h1>
          </a>
        </div>
      </section>
      <Footer />
    </div>
  )
}
