import { useState } from 'react'
import { BsXLg } from 'react-icons/bs'
import Image from 'next/image'
import Modal from '@/components/Modal'

export default function CyclePhase({ title, img, thumbnail, description }) {
  const [modal, setModal] = useState(false)

  return (
    <>
      <div
        className='flex w-full max-w-[400px] cursor-pointer flex-col justify-between rounded-3xl bg-white p-10 shadow transition-all duration-100 hover:scale-105'
        onClick={() => setModal(true)}
      >
        <h2 className='mb-8 text-center'>{title}</h2>
        <div className='aspect-square rounded-3xl bg-[#eb9b01] p-6'>
          <div className='relative h-full w-full'>
            {img && <Image src={thumbnail} layout='fill' objectFit='contain' />}
          </div>
        </div>
      </div>
      {modal && (
        <Modal
          onClickOutside={() => {
            setModal(false)
          }}
        >
          <div className='relative max-h-full max-w-5xl rounded-3xl bg-white  pt-16 pb-8 md:pt-20'>
            <div
              className='absolute top-4 right-4 cursor-pointer rounded-2xl bg-amber-500 p-2 text-white hover:bg-amber-400 active:scale-95'
              onClick={() => setModal(false)}
            >
              <BsXLg className='text-2xl md:text-3xl' />
            </div>

            <div className='max-h-full overflow-auto px-4'>
              <figure className='relative mb-4 h-48 w-full overflow-hidden rounded-xl sm:h-72 lg:h-96'>
                <Image src={img} layout='fill' objectFit='cover' alt={title} />
              </figure>

              <h1 className='py-2 px-2 sm:py-8'>{title}</h1>
              {description.map((paragraph, index) => (
                <p key={`${index}`} className='p-2 text-justify'>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
