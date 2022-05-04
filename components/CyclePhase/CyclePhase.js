import Image from 'next/image'

export default function CyclePhase({title, img}) {
  return(
    <div className='flex flex-col justify-between bg-white rounded-3xl p-10 w-full max-w-[400px] shadow'>
      <h2 className='mb-8 text-center'>{title}</h2>
      <div className='bg-amber-500 aspect-square p-6 rounded-3xl'>
        <div className='relative h-full w-full'>
          {img && <Image src={img} layout='fill' objectFit='contain' />}
        </div>
      </div>
    </div>
  )
}