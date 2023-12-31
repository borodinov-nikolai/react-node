import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { observer } from 'mobx-react-lite';
import { Context } from '../../..';


const AuthorizationModal = observer(() => {
  const [show, setShow] = React.useState(false)
  const {store} = React.useContext(Context)
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);




  return (

    <>
      <Button style={{ fontSize: '16px' }} size='sm' variant={'outline-dark '}  onClick={handleShow}>
      <i class="bi bi-box-arrow-in-right"></i> Войти
      </Button>

      <Modal size={'lg'} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>

          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
            <h3 style={{ textAlign: 'center' }} >Авторизация</h3>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Введите email"
                onChange={event => setEmail(event.target.value)}
              />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                type="password"
                placeholder="Введите пароль"
                onChange={event => setPassword(event.target.value)}
              />
              <Form.Text className="text-danger">
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <div className='d-flex justify-content-end'>

              <Button onClick={() => store.login(email, password)} className='mr-4 fs-5' variant="dark" >
                Войти
              </Button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>


        </Modal.Footer>
      </Modal>
    </>
  );
})

export default AuthorizationModal