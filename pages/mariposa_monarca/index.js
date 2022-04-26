import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import KeyFact from '@/components/KeyFact'

export default function MariposaMonarca() {
  return (
    <div>
      <Header />
      <div className='relative h-52 sm:h-72 md:h-80 lg:h-[32rem]'>
        <Image
          src='/images/mariposa_monarca.jpg'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <section>
        <div className='container relative mx-auto rounded-3xl bg-zinc-100 py-16 px-4 lg:-top-40 lg:pb-0'>
          <h1 className='p-2 mb-12 lg:p-4'>Mariposa Monarca</h1>
          <div className='grid gap-4 lg:grid-cols-2'>
            <KeyFact title='Mariposa' img='/images/guardianes_logo_bw.png'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem nesciunt quibusdam sint. Voluptate facilis adipisci
              magni. Repudiandae quibusdam quam earum, amet voluptatibus tempore
              adipisci nesciunt molestiae expedita unde placeat culpa!
            </KeyFact>
            <KeyFact title='Territorio' img='/images/guardianes_logo_bw.png'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem nesciunt quibusdam sint. Voluptate facilis adipisci
              magni. Repudiandae quibusdam quam earum, amet voluptatibus tempore
              adipisci nesciunt molestiae expedita unde placeat culpa!
            </KeyFact>
            <KeyFact title='Números' img='/images/guardianes_logo_bw.png'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem nesciunt quibusdam sint. Voluptate facilis adipisci
              magni. Repudiandae quibusdam quam earum, amet voluptatibus tempore
              adipisci nesciunt molestiae expedita unde placeat culpa!
            </KeyFact>
            <KeyFact title='Vegetación' img='/images/guardianes_logo_bw.png'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem nesciunt quibusdam sint. Voluptate facilis adipisci
              magni. Repudiandae quibusdam quam earum, amet voluptatibus tempore
              adipisci nesciunt molestiae expedita unde placeat culpa!
            </KeyFact>
          </div>
          <div className='bg-whiete mx-auto mt-16 w-5/6 rounded-3xl bg-white p-8 text-center shadow'>
            <h2 className='mb-8 text-center'> Ciclo de Vida</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos,
              officiis. Nam dolore consequatur fugit. Modi, nostrum cum. Labore
              modi, amet fugiat laboriosam at, vel aliquid quis, earum cumque
              explicabo natus.
            </p>
            <Link href='/mariposa_monarca/ciclo/'>
              <div className='pill mx-auto mt-12 cursor-pointer px-8 py-2 font-serif text-xl hover:bg-amber-400 active:scale-95'>
                Más Información
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className='relative rounded-t-3xl bg-zinc-200'>
        <div className='container mx-auto py-12 px-6'>
          <div className='grid items-center gap-8 lg:grid-cols-[1fr_2fr]'>
            <h2 className='py-4 lg:col-start-2'>Características</h2>
            <ul className='list-disc pl-6 text-xl'>
              <li>Mariposa</li>
              <li>Mariposa</li>
              <li>Mariposa</li>
              <li>Mariposa</li>
            </ul>
            <div className='text-justify'>
              <p className='py-2'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
                cum hic alias, voluptatibus at impedit nam aliquam maxime! Esse
                consectetur maxime eligendi saepe eius accusantium assumenda
                quos dolor iure velit.
              </p>
              <p className='py-2'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
                cum hic alias, voluptatibus at impedit nam aliquam maxime! Esse
                consectetur maxime eligendi saepe eius accusantium assumenda
                quos dolor iure velit.
              </p>
              <p className='py-2'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
                cum hic alias, voluptatibus at impedit nam aliquam maxime! Esse
                consectetur maxime eligendi saepe eius accusantium assumenda
                quos dolor iure velit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
