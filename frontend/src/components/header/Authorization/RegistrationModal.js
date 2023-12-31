import React from 'react';
import {observer} from 'mobx-react-lite';
import {Context} from '../../../index';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';



const RegistrationModal = () => {
    const [show, setShow] = React.useState();
    const [login, setLogin] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const {store} = React.useContext(Context);
 
 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
    <>
    <Button style={{fontSize: '16px'}} size='sm' variant="outline-dark" className='ms-2 ' onClick={handleShow}>
     Регистрация
    </Button>

    <Modal size={'lg'} show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form >
              <h3 style={{textAlign: 'center'}} >Регистрация</h3>
       
              <Form.Group  className="mb-3" controlId="formBasicEmail">
               <Form.Label>Логин</Form.Label>
               <Form.Control 
               type="text"
                placeholder="Введите логин" 
                onChange={event=> setLogin(event.target.value)}
                />
                
             </Form.Group>
             <Form.Group  className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email</Form.Label>
               <Form.Control 
               type="email"
                placeholder="Введите email" 
                onChange={event=> setEmail(event.target.value)}
                />
                
             </Form.Group>
       
             <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Пароль</Form.Label>
               <Form.Control
                type="password" 
                placeholder="Введите пароль"
                onChange={event=> setPassword(event.target.value)}
                />
                 <Form.Text className="text-danger">
                
               </Form.Text>
             </Form.Group>
             <Form.Group className="mb-3" controlId="formBasicCheckbox">
               <Form.Check type="checkbox" label="Check me out" />
             </Form.Group>
             
             <div className='d-flex justify-content-end'>
       
             <Button onClick={()=>store.registration(login, email, password)}  className='mr-4 fs-5' variant="dark"  >
               Зарегистрироваться
             </Button>
             </div>
           </Form>
        </Modal.Body>
      <Modal.Footer>
       
        
      </Modal.Footer>
    </Modal>
  </>
);
  
}

export default observer(RegistrationModal)