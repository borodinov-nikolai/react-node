import Carousel from 'react-bootstrap/Carousel';



function Slider() {
  return (
      
    <section className='slider'>
    <Carousel interval='3000'  fade variant='dark'>
      <Carousel.Item>
        <img
          className="d-block w-90"
          height='700px'
          src="./img/Samsung-galaxy-s23-ultra.jpg"
          alt="First slide"
        />
       
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-90"
          height='700px'
          width='1200px'
          src="./img/hero_intro_endframe__e6khcva4hkeq_large.jpg"
          alt="Second slide"
        />

      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-90"
          height='700px'
          src="./img/maxresdefault.jpg"
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-90"
          height='700px'
            src="./img/d562cdd6-1085-4d45-a86d-8f4a3cc8db72_large.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  
    </section>
)}

export default Slider;