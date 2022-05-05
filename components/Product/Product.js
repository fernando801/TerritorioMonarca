import Link from 'next/link'
import Image from 'next/image'

export default function Product({ title, img, price, description, link }) {
  return (
    <div className='h-full overflow-auto p-6 text-right'>
      <figure className='relative mb-8 h-1/2 w-full bg-red-400'>
        <Image src={img} layout='fill' objectFit='contain' alt='bodem' />
      </figure>
      <h1 className='py-2'>{title}</h1>
      <h2 className='py-2'>{`$${price}`}</h2>
      <div className='py-2'>{description}</div>
      <a
        href={link}
        target='_blank'
        className='pill ml-auto mt-8 block cursor-pointer px-8 py-2 font-serif text-xl hover:bg-amber-400 active:scale-95'
      >
        Comprar
      </a>
    </div>
  )
}
