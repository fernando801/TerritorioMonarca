import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import CyclePhase from '@/components/CyclePhase'

export default function ComoAyudar() {
  return (
    <div>
      <Header />
      <section className='rounded-b-3xl bg-zinc-200'>
        <div className='container relative mx-auto pt-8 sm:pt-16 py-16 px-4'>
          <h1 className='mx-auto py-4 text-center sm:mb-12'>Ciclo de vida</h1>
          <p className='px-6 py-2 text-justify'>
            Ciclo de vida (oruga, crisálida, mariposa, matusalén) La mariposa
            monarca es un lepidóptero, lo cual significa que pasa por varias
            etapas de desarrollo antes de llegar al estado adulto, o mejor
            conocido como metamorfosis. Esta metamorfosis dura aproximadamente
            de tres a cinco semanas, dependiendo completamente de las
            condiciones ambientales.
          </p>
        </div>
      </section>
      <section>
        <div className='container mx-auto px-8 py-16'>
          <h2 className='text-center'>Etapas del cilco</h2>
          <div className='grid justify-items-center gap-8 mt-12 sm:grid-cols-2 lg:gap-y-16 xl:grid-cols-4'>
            <CyclePhase
              title='Fase de Huevo'
              img='/images/guardianes_logo_bw.png'
            />
            <CyclePhase
              title='Fase de Larva'
              img='/images/guardianes_logo_bw.png'
            />
            <CyclePhase
              title='Fase de Crisalida'
              img='/images/guardianes_logo_bw.png'
            />
            <CyclePhase
              title='Fase de Adulto'
              img='/images/guardianes_logo_bw.png'
            />
          </div>
        </div>
      </section>
    </div>
  )
}
