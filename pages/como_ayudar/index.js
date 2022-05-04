import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'

export default function ComoAyudar() {
  return (
    <div>
      <Header />
      <section className='rounded-b-3xl bg-zinc-200'>
        <div className='container relative mx-auto pt-8 sm:pt-16 py-16 px-4'>
          <h1 className='mx-auto py-4 text-center sm:mb-12'>¿Cómo Ayudar?</h1>
          <h5 className='px-6 py-2'>Guardianes Monarca</h5>
          <p className='px-6 py-2 text-justify'>
            Es una estrategia para generar participación activa a nivel nacional
            en la conservación del Patrimonio Natural de la República Mexicana.
            Esta área está enfocada a la sociedad civil que no es parte de la
            fundación en sí, pero tiene la inquietud de ayudar a la conservación
            de la mariposa monarca.
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
                Que los habitantes de la República Mexicana se involucren
                activamente en la conservación de la mariposa monarca y, por
                ende, del medio ambiente a través de acciones y eventos
                coordinados por la fundación.
              </p>
            </div>
            <div className='px-4'>
              <h2 className='text-center'>Visión</h2>
              <div className='my-2 rounded-full bg-black py-[2px]'></div>
              <p className='text-justify'>
                Tener 30,000 Guardianes Monarca en todos los estados de la
                república por los que pasa la mariposa que ayuden activamente a
                que llegue a los Santuarios ubicados en Michoacán.
              </p>
            </div>
          </div>
          <Link href='/mariposa_monarca/'>
            <div className='pill mx-auto mt-20 cursor-pointer px-8 py-2 font-serif text-xl hover:bg-amber-400 active:scale-95'>
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
              Para ser un Guardián Monarca se necesita más que simplemente la
              inquietud, las acciones tienen que ir de la mano. Esto no quiere
              decir que es un trabajo, cada quien hace lo que está dentro de sus
              posibilidades y capacidades. Aquí te indicamos por donde empezar.
            </p>
            <Link href='/como_ayudar/guardianes/'>
              <div className='pill mx-auto mt-8 cursor-pointer px-8 py-2 font-serif text-xl hover:bg-amber-400 active:scale-95'>
                Más Información
              </div>
            </Link>
            <div className='mx-auto mt-10 max-w-[300px] md:max-w-[160px] lg:max-w-[210px]'>
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
