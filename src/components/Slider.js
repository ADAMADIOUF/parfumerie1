import React, { useState, useEffect } from 'react'
import sliderData from '../slider'

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNextSlide = () => {
    if (currentIndex === sliderData.length - 1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <div className='slider-nav'>
      {sliderData.map((slide, index) => (
        <div
          key={index}
          className={
            index === currentIndex
              ? 'slide active'
              : index === currentIndex - 1 ||
                (currentIndex === 0 && index === sliderData.length - 1)
              ? 'slide prev'
              : 'slide next'
          }
        >
          <img src={slide.img} alt={`Slide ${index}`} className='imgSlider' />
          <div
            className={`slider-details ${
              index === currentIndex ? 'active' : ''
            }`}
          >
            <h3>{slide.name}</h3>
            <p>{slide.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Slider
