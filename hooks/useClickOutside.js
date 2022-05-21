import { useRef, useEffect } from 'react'

export const useClickOutside = (clickOutisdeHandler) => {
  let domNode = useRef()

  useEffect(()=>{
    let handler = (event) => {
      if (!domNode.current.contains(event.target)){
        clickOutisdeHandler()
      }
    }

    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })

  return domNode
}

