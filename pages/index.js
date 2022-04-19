import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <section className='bg-zinc-200'>
        <div className='container relative mx-auto'>
          <div className='flex items-center justify-between gap-2 p-4'>
            <div className='aspect-square h-14 rounded-md bg-amber-500'></div>
            <div className='flex max-w-[25rem] grow items-center justify-between overflow-hidden rounded-full bg-white p-1'>
              <input
                className='w-full p-1 px-2 text-base focus:outline-none'
                type='text'
              />
              <div className='aspect-square h-8 shrink-0 rounded-full bg-amber-500'></div>
            </div>
          </div>
          <div className='flex justify-center gap-4 pt-8 pb-48 font-serif text-lg text-white'>
            <h4 className='pill px-4 py-1'>Menu 1</h4>
            <h4 className='pill px-4 py-1'>Menu 1</h4>
            <h4 className='pill px-4 py-1'>Menu 1</h4>
          </div>
          <div className='absolute left-1/2 -bottom-16 mx-auto aspect-square w-56 -translate-x-1/2 transform rounded-full bg-amber-500'></div>
        </div>
      </section>
      <section>
        <div className='container mx-auto py-28 px-12 text-center'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            qui vero beatae inventore aliquam veritatis autem maxime! Velit quo
            provident cum mollitia officiis vel animi praesentium minima sit
            fugiat? Dicta?
          </p>
        </div>
      </section>
      <section className='bg-zinc-200'>
        <div className='container relative mx-auto py-8'>
          <div className='absolute left-1/2 -top-16 -z-10 mx-auto aspect-square w-52 -translate-x-1/2 transform rounded-full bg-zinc-200'></div>
          <h2 className='pill mx-auto px-8 py-1'>Creadores</h2>
          <div className='mt-8 flex flex-wrap justify-center gap-8'>
            <div className='aspect-square w-40 rounded-full bg-amber-500'></div>
            <div className='aspect-square w-40 rounded-full bg-amber-500'></div>
            <div className='aspect-square w-40 rounded-full bg-amber-500'></div>
            <div className='aspect-square w-40 rounded-full bg-amber-500'></div>
            <div className='aspect-square w-40 rounded-full bg-amber-500'></div>
            <div className='aspect-square w-40 rounded-full bg-amber-500'></div>
          </div>
        </div>
      </section>
      <section className='bg-zinc-100'>
        <div className='container mx-auto py-8'>
          <h2 className='pill mx-auto px-8 py-1'> Nuestra Historia</h2>
          <div className='bg-whiete mx-auto mt-8 w-4/5 rounded-3xl bg-white p-8 text-center'>
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
        <div className='container mx-auto py-8'>
          <h2 className='pill mx-auto mb-8 px-8 py-1'>Aliados</h2>
          <div className='flex flex-wrap items-center justify-center gap-4 px-4'>
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
