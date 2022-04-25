import Image from 'next/image'

export default function KeyFact({ title, children, img }) {
  return (
    <div className='rounded-md bg-white p-4'>
      <div className='rounded-md bg-amber-500 p-4 h-52 mb-4'>
        <div className='relative h-full w-full'>
          {img && <Image src={img} layout='fill' objectFit='contain' />}
        </div>
      </div>
      <div>
        <h3 className='p-2'>{title}</h3>
        <p className='p-2'>{children}</p>
      </div>
    </div>
  )
}
