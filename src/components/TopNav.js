import React, { useState, useEffect } from 'react'

const ScrollingText = ({ text, speed }) => {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => prevPosition + speed)
    }, 50)

    return () => clearInterval(interval)
  }, [speed])

  const style = {
    position: 'relative',
    left: `${position}px`,
    fontSize: '24px', // Add font size here
  }

  return <div style={style}>{text}</div>
}

export default ScrollingText
