import Header from '@/components/Header'

export default function Donar() {
  return (
    <div>
      <Header />
      <section className='rounded-b-3xl bg-clay-300'>
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
      <section>
        <div className='container mx-auto text-center font-bold text-4xl text-mustard-500'>
          <p>CUENTA: XXXX XXXX XXXX XXXX</p>
          <p>BANCO: XXXXXXXXXXXXX</p>
          <p>OTROS DATOS: XXXXXXXXXXXXXX</p>
        </div>
      </section>
    </div>
  )
}
