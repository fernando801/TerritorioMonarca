import Link from 'next/link'
import Image from 'next/image'

export default function Product({ title, img, price, description, link }) {
  return (
    <div className='h-full overflow-auto p-6 gap-8 grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 lg:items-center grid-flow-row-dense'>
      <figure className='relative h-full w-full lg:col-start-2'>
        <Image src={img} layout='fill' objectFit='contain' alt='bodem' />
      </figure>
      <div className='max-h-full overflow-auto'>
        <h1 className='max-w-full overflow-auto py-2'>{title}</h1>
        <h2 className='py-2'>{`$${price}`}</h2>
        <a
          href={link}
          target='_blank'
          className='pill my-4 block cursor-pointer px-8 py-2 font-serif text-xl hover:bg-amber-400 active:scale-95'
        >
          Comprar
        </a>
        <div className='py-2'>{description}</div>
      </div>
    </div>
  )
}
