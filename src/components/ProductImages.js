import { Image } from 'react-bootstrap'

import { useState } from 'react'

const ProductImages = ({ image = [{ url: '' }] }) => {
  const [main, setMain] = useState(image[0])

  return (
    <div>
      <div className='big-image-container'>
        <Image src={main.url} className='big-image' />
      </div>
      <div className='gallery-container'>
        {image.map((images, index) => {
          return (
            <div key={index} onClick={() => setMain(image[index])}>
              <Image
                src={images.url}
                alt={image.filename}
                className={`gallery-item ${
                  main.url === images.url ? 'active' : ''
                }`}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductImages
