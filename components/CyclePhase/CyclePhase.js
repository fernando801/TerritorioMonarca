import { useState } from 'react'
import { BsXLg } from 'react-icons/bs'
import Image from 'next/image'
import Modal from '@/components/Modal'

export default function CyclePhase({ title, img, thumbnail, description }) {
  const [modal, setModal] = useState(false)

  return (
    <>
      <div
        className='flex w-full max-w-[400px] flex-col justify-between rounded-3xl bg-white p-10 shadow'
        onClick={() => setModal(true)}
      >
        <h2 className='mb-8 text-center'>{title}</h2>
        <div className='aspect-square rounded-3xl bg-amber-500 p-6'>
          <div className='relative h-full w-full'>
            {img && <Image src={thumbnail} layout='fill' objectFit='contain' />}
          </div>
        </div>
      </div>
      {modal && (
        <Modal>
          <div className='max-w-5xl relative max-h-full rounded-3xl bg-white px-4 pt-16 pb-8 md:pt-20'>
            <div
              className='absolute top-4 right-4 rounded-2xl bg-amber-500 p-2 text-white hover:bg-amber-400 active:scale-95 cursor-pointer'
              onClick={() => setModal(false)}
            >
              <BsXLg className='text-2xl md:text-3xl' />
            </div>

            <div className='max-h-full overflow-auto'>
              <figure className='relative w-full h-48 sm:h-72 lg:h-96 rounded-xl overflow-hidden mb-4'>
                <Image src={img} layout='fill' objectFit='cover' alt={title}/>
              </figure>

              <h1 className='py-2 sm:py-8 px-2'>{title}</h1>
              {description.map( (paragraph, index) => (
                <p key={`${index}`} className='p-2 text-justify'>{paragraph}</p>
              ))}
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
