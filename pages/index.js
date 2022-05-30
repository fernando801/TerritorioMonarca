import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Founder from '@/components/Founder'
import { founders } from '@/lib/founders'
import { getPartners } from '@/lib/api'

export async function getStaticProps() {
  const partners = (await getPartners()) || []

  return {
    props: {
      partners,
    },
  }
}

export default function Home({ partners }) {
  return (
    <div>
      <Header />
      <section className='rounded-b-3xl bg-clay-300'>
        <div className='container relative mx-auto flex justify-center px-4'>
          <div className='relative -bottom-16 aspect-square w-64 rounded-full bg-amber-500 lg:w-72'></div>
        </div>
      </section>
      <section>
        <div className='container mx-auto px-4 py-28 text-center lg:py-36'>
          <h1 className='mb-8 text-5xl lg:text-6xl'>Territorio Monarca</h1>
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
      <section className='rounded-3xl bg-clay-300'>
        <div className='container relative mx-auto px-4 py-12'>
          <div className='absolute left-1/2 -top-16 mx-auto aspect-square w-52 -translate-x-1/2 transform rounded-full bg-clay-300 lg:w-64'></div>
          <h1 className='relative mx-auto px-8 py-1 text-center'>Creadores</h1>
          <div className='relative mt-8 flex flex-wrap justify-center gap-8 py-4'>
            {founders.map((founder) => (
              <Founder key={founder.name} {...founder} />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className='container mx-auto px-6 py-12 lg:py-20'>
          <div className='bg-whiete mx-auto mt-8 rounded-3xl bg-white p-8 text-justify'>
            <h1 className='mx-auto px-8 text-center py-4 sm:py-8'> Nuestra Historia</h1>
            <p className='p-2'>
              En el año 2007, el Instituto Correo Real se encargó de contar el
              número de mariposas que había, así como también las hectáreas que
              dichas mariposas ocupaban, reportando así que existía la cantidad
              de 200 millones de mariposas y que utilizaban alrededor de 19.5
              hectáreas.
            </p>
            <p className='p-2'>
              En 2014 se realizó el mismo conteo y posteriormente se reportó que
              ese año solo habían llegado 6 millones de mariposas y que ocupaban
              menos de media hectárea. Al hacer público dicho informe, se
              despliegan las alertas internacionales y se contrata al ingeniero
              Fluvio, quien se encarga de recorrer de manera completa la ruta de
              la mariposa monarca.
            </p>
            <Link href='/nosotros/'>
              <div className='pill mx-auto mt-12 cursor-pointer px-8 py-2 font-serif text-xl hover:bg-amber-400 active:scale-95'>
                Leer más
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className='bg-clay-300'>
        <div className='container mx-auto px-4 py-12 lg:py-20'>
          <h1 className='mx-auto mb-8 px-8 py-1 text-center'>Aliados</h1>
          <div className='flex flex-wrap items-center justify-center gap-x-12 gap-y-6'>
            {partners.map((partner) => (
              <a
                key={`${partner.id}`}
                className='relative block aspect-video h-32'
                href={partner.website || '#'}
                target='_blank'
              >
                <Image
                  src={partner.image.url}
                  alt={partner.name}
                  layout='fill'
                  objectFit='contain'
                  priority={true}
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
