import { useClickOutside } from '@/hooks/useClickOutside'
import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

export default function Modal({ children, onClickOutside }) {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  let domNode = useClickOutside(onClickOutside)

  if (isBrowser) {
    return ReactDOM.createPortal(
      <div className='fixed top-0 right-0 bottom-0 left-0 z-50 flex flex-col items-center justify-center bg-black/40 px-4 py-8 sm:p-8 md:p-20'>
        <div ref={domNode} className='max-h-full flex flex-col'>
          {children}
        </div>
      </div>,
      document.getElementById('modal')
    )
  } else {
    return null
  }
}
