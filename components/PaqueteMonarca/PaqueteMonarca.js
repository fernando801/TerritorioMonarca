import { useState } from 'react'
import { BsXLg, BsChevronRight } from 'react-icons/bs'
import Image from 'next/image'
import Modal from '@/components/Modal'

export default function CyclePhase({ title }) {
  const [modal, setModal] = useState(false)

  return (
    <>
      <div
        className='relative w-80 cursor-pointer rounded-3xl bg-white shadow transition-all duration-100 active:scale-95'
        onClick={() => setModal(true)}
      >
        <div className='relative -left-6 -top-6 aspect-square w-64 rounded-full bg-amber-500'></div>
        <div className='p-6 pt-0'>
          <h4 className='pill mb-8 ml-auto text-center'>{title}</h4>
          <p className='text-sm text-justify'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse modi
            nobis autem, aut praesentium error. Dignissimos sapiente fugit
            soluta debitis doloremque, facilis labore odit officia repellendus
            optio perspiciatis magni earum.
          </p>
          <div
            className='w-fit mt-6 ml-auto cursor-pointer rounded-full bg-amber-500 p-2 text-white hover:bg-amber-400 active:scale-95'
            onClick={() => setModal(false)}
          >
            <BsChevronRight className='text-2xl md:text-3xl' />
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
              <h1 className='py-2 px-2 sm:py-8'>{title}</h1>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
