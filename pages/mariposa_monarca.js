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
        <div className='container relative mx-auto rounded-3xl bg-zinc-100 py-8 px-4 lg:-top-40 lg:py-12'>
          <h1 className='mb-8 p-2 lg:mb-12 lg:p-4'>Mariposa Monarca</h1>
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
        </div>
      </section>
      <section className='relative rounded-t-3xl bg-zinc-200'>
        <div className='container mx-auto py-12 px-6'>
          <div className='grid lg:grid-cols-[1fr_2fr] gap-8'>
          <h2 className='lg:col-start-2'>Características</h2>
            <ul className='list-disc pl-6 text-lg'>
              <li>Mariposa</li>
              <li>Mariposa</li>
              <li>Mariposa</li>
              <li>Mariposa</li>
            </ul>
            <div className='text-justify'>
              <p className='py-2'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus cum
                hic alias, voluptatibus at impedit nam aliquam maxime! Esse
                consectetur maxime eligendi saepe eius accusantium assumenda quos
                dolor iure velit.
              </p>
              <p className='py-2'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus cum
                hic alias, voluptatibus at impedit nam aliquam maxime! Esse
                consectetur maxime eligendi saepe eius accusantium assumenda quos
                dolor iure velit.
              </p>
              <p className='py-2'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus cum
                hic alias, voluptatibus at impedit nam aliquam maxime! Esse
                consectetur maxime eligendi saepe eius accusantium assumenda quos
                dolor iure velit.
              </p>
            </div>
          </div>          
        </div>
      </section>
    </div>
  )
}
