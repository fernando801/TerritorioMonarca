const formEmail = process.env.NEXT_PUBLIC_GUARDIANES_FORM_EMAIL

export default function GuardianesForm() {
  return (
    <form
      className='mx-auto max-w-4xl rounded-3xl bg-white p-4'
      action={`https://formsubmit.co/${formEmail}`}
      method='POST'
    >
      <h2 className='text-center'>Conviértete en Guardián Monarca</h2>
      <input
        type='hidden'
        name='_subject'
        value='Quiero ser un Guardián Monarca'
      ></input>
      <input
        type='hidden'
        name='_next'
        value='https://territorio-monarca.vercel.app/como_ayudar/guardianes/'
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
      <label htmlFor='phone' className='mt-2 block p-2'>
        Teléfono:
      </label>
      <input
        className='block w-full rounded-md bg-clay-200 p-2'
        type='tel'
        name='phone'
        id='phone'
        pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
        placeholder='800-808-8080 (con guiones)'
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
        placeholder='Opcional'
      ></textarea>
      <input
        type='hidden'
        name='_autoresponse'
        value='Gracias por realizar tu solicitud para convertirte en un Guardián Monarca'
      />
      <input
        className='pill mx-auto mt-4 block text-2xl font-bold sm:px-8 sm:text-3xl'
        type='submit'
        value='Enviar'
      />
    </form>
  )
}
