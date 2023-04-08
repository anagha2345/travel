import React from 'react'
import { Carousel } from 'react-bootstrap'

function Carousels() {
  return (
    <div className='ms-5'>
         <Carousel variant="light">
      <Carousel.Item>
        <img style={{height:'500px'}}
          className="d-block w-100"
          src="https://i.postimg.cc/t4F1JTGT/adi-kailsah.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Adi Kailash Trek</h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'500px'}}
          className=" d-block w-100"
          src="https://i.postimg.cc/MT3HNfVs/banner-img.webp"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Chardham Yatrain Uttarakhand</h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'500px'}}
          className="d-block w-100"
          src="https://i.postimg.cc/76jGbTh5/banner-img01.webp"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Heritage Tour Packages</h5>
          <p>
           
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Carousels