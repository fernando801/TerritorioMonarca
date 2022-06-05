import { useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import styles from './Slider.module.css'

export default function Slider({ children }) {
  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if (slideIndex !== children.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === children.length) {
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(children.length)
    }
  }

  const moveDot = (index) => {
    setSlideIndex(index)
  }

  return (
    <section className='container-slider relative aspect-video sm:h-72 sm:w-full md:h-80 lg:h-96 bg-clay-300'>
      {children.map((obj, index) => (
        <div
          key={`${index}`}
          className={
            slideIndex === index + 1
              ? `${styles.slide} ${styles.active_anim}`
              : styles.slide
          }
        >
          {obj}
        </div>
      ))}
      <div
        className='position absolute left-0 sm:left-6 bottom-1/2 aspect-square h-10 sm:h-12 translate-y-1/2 rounded-full bg-amber-500 flex items-center justify-center'
        onClick={prevSlide}
      >
        <BsChevronLeft className='text-white text-2xl'/>
      </div>
      <div
        className='position absolute right-0 sm:right-6 bottom-1/2 aspect-square h-10 sm:h-12 translate-y-1/2 rounded-full bg-amber-500 flex items-center justify-center'
        onClick={nextSlide}
      >
        <BsChevronRight className='text-white text-2xl'/>
      </div>

      <div className={styles.container_dots}>
        {Array.from({ length: children.length }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? `${styles.dot} ${styles.dot_active}` : styles.dot}
          ></div>
        ))}
      </div>
    </section>
  )
}
