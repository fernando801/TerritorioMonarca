import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

export default function Modal({ children }) {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  if (isBrowser) {
    return ReactDOM.createPortal(
      <div className='fixed top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center bg-black/40 px-4 py-8 sm:p-8 md:p-20'>
        {children}
      </div>,
      document.getElementById('modal')
    )
  } else {
    return null
  }
}
