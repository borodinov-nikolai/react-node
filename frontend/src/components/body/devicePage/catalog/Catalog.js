import React from 'react'
import ProductCard from './ProductCard'
import Container from 'react-bootstrap/Container'



const Catalog = ({data}) => {




  return (
    <Container >

     

    <div style={{'marginTop': '50px', 'marginBottom': '200px', 'gap': '50px'}} className='d-flex flex-wrap'>
        {data.map(({id, name, price, img})=>{
          return <ProductCard key={id} name={name} price={price} img={img}/>
        })}
        
    </div>

    </Container>
  )
}

export default Catalog