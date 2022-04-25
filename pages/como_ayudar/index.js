import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'

export default function ComoAyudar() {
  return (
    <div>
      <Header />
      <section className='rounded-b-3xl bg-zinc-200'>
        <div className='container relative mx-auto py-12 px-4'>
          <h1 className='py-16 text-center'>¿Cómo Ayudar?</h1>
          <p className='px-6 py-2 text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quibusdam delectus at unde impedit, aperiam optio repellendus
            molestiae non voluptatem in. Aliquid error earum vel iusto quidem
            numquam laborum recusandae.
          </p>
          <p className='px-6 py-2 text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            ullam ipsam praesentium perferendis non omnis nisi est nam aliquam
            corporis. Placeat, tenetur? Vero, facilis repellendus blanditiis
            dicta veniam earum eveniet.
          </p>
          <p className='px-6 py-2 text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            ullam ipsam praesentium perferendis non omnis nisi est nam aliquam
            corporis. Placeat, tenetur? Vero, facilis repellendus blanditiis
            dicta veniam earum eveniet.
          </p>
        </div>
      </section>
      <section>
        <div className='container mx-auto px-4 py-20 pb-12'>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
            <div className='px-4'>
              <h2 className='text-center'>Misión</h2>
              <div className='my-2 rounded-full bg-black py-[2px]'></div>
              <p className='text-justify'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Blanditiis sit repudiandae nulla temporibus ipsam. Sequi illum
                quibusdam suscipit aperiam blanditiis magnam, accusamus officia
                excepturi dolorum incidunt adipisci aliquam fugit molestias?
              </p>
            </div>
            <div className='px-4'>
              <h2 className='text-center'>Visión</h2>
              <div className='my-2 rounded-full bg-black py-[2px]'></div>
              <p className='text-justify'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Blanditiis sit repudiandae nulla temporibus ipsam. Sequi illum
                quibusdam suscipit aperiam blanditiis magnam, accusamus officia
                excepturi dolorum incidunt adipisci aliquam fugit molestias?
              </p>
            </div>
          </div>
          <Link href='/mariposa_monarca/'>
            <div className='pill mx-auto mt-20 px-8 py-2 font-serif text-xl cursor-pointer hover:bg-amber-400 active:scale-95'>
              Más Información
            </div>
          </Link>
        </div>
      </section>
      <section>
        <div className='relative mx-auto max-w-4xl p-12'>
          <div className='relative aspect-square rounded-3xl bg-zinc-200 p-8 md:rounded-full md:p-[15%]'>
            <h2 className='py-6 text-center'>
              Conviertete en Guardian Monarca
            </h2>
            <p className='py-4 text-justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              mollitia at modi enim adipisci vero sint alias, ab similique
              architecto aperiam officiis vel eum totam! Optio voluptatum dolor
              placeat sint! Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Praesentium accusantium non iste.
            </p>
            <div className='bottom-[10%] mx-auto max-w-[400px] pt-10 md:absolute md:right-1/2 md:w-1/3 md:translate-x-1/2'>
              <Image
                src='/images/guardianes_logo.png'
                width={455}
                height={452}
                layout='responsive'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
