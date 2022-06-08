import Image from 'next/image'

export default function KeyFact({ title, children, img }) {
  return (
    <div className='rounded-md bg-white p-4 shadow'>
      <div className='relative rounded-md bg-amber-500 p-4 h-52 mb-4 overflow-hidden shadows'>
          {img && <Image src={img} layout='fill' objectFit='cover' alt={title}/>}
      </div>
      <div>
        <h3 className='p-2'>{title}</h3>
        <div className='p-2 text-justify'>{children}</div>
      </div>
    </div>
  )
}
