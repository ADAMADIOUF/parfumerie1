import { useState,useEffect } from "react"
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
    fontSize: '24px',
    maxWidth: '100%', // Add max-width here
    whiteSpace: 'nowrap', // Add white-space here
    overflow: 'hidden', // Add overflow here
    textOverflow: 'ellipsis', // Add text-overflow here
    padding: '10px', // Add padding here
  }

  // Add media query for screens with a maximum width of 992px
  if (window.innerWidth <= 992) {
    style.fontSize = '20px'
    style.padding = '5px'
  }

  return <aside style={style} className="top-nav">{text}</aside>
}

export default ScrollingText
