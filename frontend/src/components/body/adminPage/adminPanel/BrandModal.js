import React from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'




const BrandModal = () => {
  const [show, setShow] = React.useState(false);
  const [brandName, setBrandName] = React.useState();




    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const postBrand = async ()=> {
        await axios.post(process.env.REACT_APP_API_URL + '/brand',
        {name: brandName})
        .then(response=>(console.log(response.data)))
      }


  return (
    <>
    <Button variant="primary" onClick={handleShow}>
        Добавить брэнд
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Добавьте бренд</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <div className='w-75 m-auto'>
        <Form >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Название</Form.Label>
          <Form.Control type="text"
           placeholder=""
           onChange={event=> setBrandName(event.target.value)}
           />
        </Form.Group>
        
        </Form>
    </div></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={()=>{postBrand(); handleClose()}}>
            Добавить
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  )
}

export default BrandModal