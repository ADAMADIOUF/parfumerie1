import React from 'react'

const Contact = () => {
  const handleClick = () => {
    const phoneNumber = '221775552646' // Replace with your own phone number
    const message = 'Hello!' // Replace with your own message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`
    window.open(url, '_blank')
  }

  return (
    <div className='contact' onClick={handleClick}>
      <button>acheter par whatsapp</button>
    </div>
  )
}

export default Contact
