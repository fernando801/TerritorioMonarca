import { useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

export default function JardinesDescriptions({ jardines }) {
  const [jardinIndex, setJardinIndex] = useState(0)

  const nextSlide = () => {
    if (jardinIndex !== jardines.length - 1) {
      setJardinIndex(jardinIndex + 1)
    } else if (jardinIndex === jardines.length - 1) {
      setJardinIndex(0)
    }
  }

  const prevSlide = () => {
    if (jardinIndex !== 0) {
      setJardinIndex(jardinIndex - 1)
    } else if (jardinIndex === 0) {
      setJardinIndex(children.length - 1)
    }
  }

  return (
    <div>
      <div className='flex justify-between items-center'>
        <BsChevronLeft className='text-3xl' onClick={prevSlide}/>
        <h1 className='text-center py-8'>{jardines[jardinIndex].title}</h1>
        <BsChevronRight className='text-3xl' onClick={nextSlide}/>
      </div>
      <div className='mt-8'>
        {jardines[jardinIndex].description}
      </div>
    </div>
  )
}
