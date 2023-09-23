import React from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

const TypeModal = () => {
  const [show, setShow] = React.useState(false);
  const [typeName, setTypeName] = React.useState();



    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const postType = async ()=> {
        await axios.post(process.env.REACT_APP_API_URL + '/type',
        {name: typeName})
        .then(res=>(console.log(res.data)))
      }

  return (
    <>
    <Button variant="primary" onClick={handleShow}>
        Добавить тип
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Добавьте тип</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <div className='w-75 m-auto'>
        <Form >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Название</Form.Label>
          <Form.Control 
          type="text"
           placeholder="" 
          onChange={event=> setTypeName(event.target.value)}
          />
        </Form.Group>
        
        </Form>
    </div></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
          Закрыть
          </Button>
          <Button variant="primary" type="submit" onClick={()=> {postType(); handleClose()}}>
            Добавить
          </Button>
        </Modal.Footer>
      </Modal></>
  )
}

export default TypeModal