const formEmail = process.env.NEXT_PUBLIC_CONTACT_FORM_EMAIL
const domain = process.env.NEXT_PUBLIC_DOMAIN

export default function ContactForm() {
  return (
    <form
      className='mx-auto max-w-4xl rounded-3xl bg-white p-4'
      action={`https://formsubmit.co/${formEmail}`}
      method='POST'
    >
      <h2 className='text-center'>Escríbenos</h2>
      <input
        type='hidden'
        name='_next'
        value={`${domain}/contacto/`}
      />
      <label htmlFor='name' className='mt-2 block p-2'>
        Nombre:
      </label>
      <input
        className='block w-full rounded-md bg-clay-200 p-2'
        type='text'
        name='name'
        id='name'
        placeholder='John Doe'
        required
      />
      <label htmlFor='email' className='mt-2 block p-2'>
        Correo:
      </label>
      <input
        className='block w-full rounded-md bg-clay-200 p-2'
        type='email'
        name='email'
        id='email'
        placeholder='tucorreo@ejemplo.com'
        required
      />
      <label htmlFor='_subject' className='mt-2 block p-2'>
        Asunto:
      </label>
      <input
        className='block w-full rounded-md bg-clay-200 p-2'
        type='text'
        name='_subject'
        id='_subject'
        placeholder='Quiero ayudar'
        required
      />
      <label htmlFor='message' className='mt-2 block p-2'>
        Mensaje:
      </label>
      <textarea
        className='block w-full rounded-md bg-clay-200 p-2'
        name='message'
        id='message'
        cols='30'
        rows='10'
        placeholder='Escribe tu mensaje aquí'
        required
      ></textarea>
      <input
        type='hidden'
        name='_autoresponse'
        value='Gracias por enviar tu mensaje a Territorio Monarca'
      />
      <input
        className='pill mx-auto mt-4 block text-2xl font-bold sm:px-8 sm:text-3xl'
        type='submit'
        value='Enviar'
      />
    </form>
  )
}
