import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export default function Contacto() {
  return (
    <>
      <Header />
      <section className='rounded-b-3xl bg-clay-300' id='nosotros'>
        <div className='container relative mx-auto py-8 px-4 sm:py-12'>
          <h1 className='mx-auto py-4 text-center '>Contacto</h1>
        </div>
      </section>
      <section>
        <div className='container mx-auto py-8'>
          <ContactForm />
        </div>
      </section>
      <Footer />
    </>
  )
}
