import Image from 'next/image'

export default function CyclePhase({title, img}) {
  return(
    <div className='flex flex-col justify-between bg-white rounded-md p-4 w-full max-w-[400px]'>
      <h3 className='mb-4 text-center'>{title}</h3>
      <div className='bg-amber-500 aspect-square p-4 rounded-md'>
        <div className='relative h-full w-full'>
          {img && <Image src={img} layout='fill' objectFit='contain' />}
        </div>
      </div>
    </div>
  )
}