import { useState } from 'react'
import { BsXLg } from 'react-icons/bs'
import Image from 'next/image'
import Modal from '@/components/Modal'
import styles from './Founder.module.css'

export default function CyclePhase({ name, img, description }) {
  const [modal, setModal] = useState(false)

  return (
    <>
      <div className={styles.founder_icon} onClick={() => setModal(true)}>
        {img && <Image src={img} layout='fill' objectFit='contain' />}
      </div>
      {modal && (
        <Modal
          onClickOutside={() => {
            setModal(false)
          }}
        >
          <figure className='relative max-h-full max-w-5xl overflow-hidden rounded-xl bg-white'>
            <div
              className='absolute top-4 right-4 cursor-pointer rounded-2xl bg-amber-500 p-2 text-white hover:bg-amber-400 active:scale-95'
              onClick={() => setModal(false)}
            >
              <BsXLg className='text-2xl md:text-3xl' />
            </div>
            <div className='max-h-full overflow-auto p-8'>
              <div className='relative mx-auto aspect-square w-40 md:w-52 lg:w-60 shrink-0 overflow-hidden rounded-full bg-amber-400'>
                <Image src={img} layout='fill' objectFit='cover' alt={name} />
              </div>
              <div className='space-y-4 pt-6 md:p-8'>
                <h2 className='text-center'>{name}</h2>
                <div className={styles.founder_description}>{description}</div>
              </div>
            </div>
          </figure>
        </Modal>
      )}
    </>
  )
}
