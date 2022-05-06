import Header from '@/components/Header'

export default function Donar() {
  return (
    <div>
      <Header />
      <section className='rounded-b-3xl bg-zinc-200'>
        <div className='container relative mx-auto py-16 px-4 pt-8 sm:pt-16'>
          <h1 className='mx-auto py-4 text-center sm:mb-12'>Donar</h1>
          <p className='px-6 py-2 text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            aliquam nam dolore quisquam fugit alias minima autem dolor
            temporibus laudantium cumque, harum, est repudiandae vero soluta
            eveniet ratione repellendus quaerat.
          </p>
        </div>
      </section>
      <h1 className='pill mx-auto mt-8 py-4 px-12'>Donar</h1>
    </div>
  )
}
