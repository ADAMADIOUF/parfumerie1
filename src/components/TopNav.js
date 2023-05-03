import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'


const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [direction, setDirection] = useState('left')

  const slides = [
    'Bienvenue chez Zana Parfumerie',
    'faite vos commande sur whatsapp',
    'Au +221 77 555 26 46',
  ]

  const slideText = slides[activeIndex]

  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = activeIndex + 1

      if (nextIndex >= slides.length) {
        nextIndex = 0
      }

      setActiveIndex(nextIndex)
    }, 5000)

    return () => clearInterval(interval)
  }, [activeIndex, slides.length])

  useEffect(() => {
    if (currentTextIndex < slideText.length) {
      setTimeout(() => {
        setCurrentText(currentText + slideText[currentTextIndex])
        setCurrentTextIndex(currentTextIndex + 1)
      }, 50) // changed the delay here to slow down the animation
    } else {
      setTimeout(() => {
        setCurrentText('')
        setCurrentTextIndex(0)
      }, 1500)

      if (activeIndex === slides.length - 1) {
        setDirection('right')
      } else if (activeIndex === 0) {
        setDirection('left')
      }
    }
  }, [currentText, currentTextIndex, slideText, activeIndex, slides.length])

  return (
    <Container>
      <div className='top-nav'>
        <div className={`slider__wrapper slider__wrapper--${direction}`}>
          <div className='slider__slides'>
            {slides.map((slide, index) => (
              <div key={index} className='slider__slide'>
                {index === activeIndex && (
                  <h3 className='slider__text'>
                    {currentText.slice(0, currentTextIndex)}
                  </h3>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Slider
