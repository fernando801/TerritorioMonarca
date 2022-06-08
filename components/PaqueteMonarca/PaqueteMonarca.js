import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function CyclePhase({ title, children, img, link }) {
  const [modal, setModal] = useState(false)

  return (
    <>
      <div className='relative flex w-80 shrink-0 flex-col rounded-3xl bg-white shadow sm:w-96'>
        <div className='relative -left-6 -top-6 aspect-square w-64 overflow-hidden rounded-full bg-amber-500'>
          <Image src={img} layout='fill' objectFit='cover' />
        </div>
        <div className='flex grow flex-col items-end gap-8 p-6 pt-0'>
          <h5 className='pill text-center'>{title}</h5>
          <div className='text-justify text-sm'>{children}</div>
          {link && (
            <div className='flex grow items-end justify-end'>
              <Link href={link}>
                <h6 className='pill cursor-pointer hover:bg-amber-400 active:scale-95'>
                  Más información
                </h6>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
