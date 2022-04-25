import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import CyclePhase from '@/components/CyclePhase'

export default function ComoAyudar() {
  return (
    <div>
      <Header />
      <section className='rounded-b-3xl bg-zinc-200'>
        <div className='container relative mx-auto py-12 px-4'>
          <h1 className='py-16 text-center'>Ciclo de vida</h1>
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
        <div className='container mx-auto px-8 py-16'>
          <h2 className='text-center'>Etapas del cilco</h2>
          <div className='grid sm:grid-cols-2 gap-8 lg:gap-y-16 justify-items-center py-12'>
            <CyclePhase title='Fase de Huevo' img='/images/guardianes_logo_bw.png'/>
            <CyclePhase title='Fase de Larva' img='/images/guardianes_logo_bw.png'/>
            <CyclePhase title='Fase de Crisalida' img='/images/guardianes_logo_bw.png'/>
            <CyclePhase title='Fase de Adulto' img='/images/guardianes_logo_bw.png'/>
          </div>
        </div>
      </section>
    </div>
  )
}