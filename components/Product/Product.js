import { RichText } from '@graphcms/rich-text-react-renderer'
import Link from 'next/link'
import Image from 'next/image'

export default function Product({ name, image, price, description, url }) {
  return (
    <div className='h-full overflow-auto p-6 gap-8 grid grid-cols-1 grid-rows-2  grid-flow-row-dense'>
      <figure className='relative h-full w-full '>
        <Image src={image.url} layout='fill' objectFit='contain' alt='bodem' />
      </figure>
      <div className='max-h-full'>
        <h1 className='max-w-full overflow-auto py-2'>{name}</h1>
        <h2 className='py-2'>{`$${price}`}</h2>
        <a
          href={url}
          target='_blank'
          className='pill my-4 block cursor-pointer px-8 py-2 font-serif text-xl hover:bg-amber-400 active:scale-95'
        >
          Comprar
        </a>
        <div className='py-2 rich_text flex flex-col gap-4'>
          <RichText content={description.raw}/>
        </div>
      </div>
    </div>
  )
}
