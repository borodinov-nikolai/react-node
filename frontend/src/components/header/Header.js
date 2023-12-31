import React from "react";
import Badge from "react-bootstrap/Badge";
import { NavLink } from "react-router-dom";
import HeaderNavbar from "./HeaderNavbar";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import Button from 'react-bootstrap/Button'
import logo from '../../assets/img/pngegg.png'
import call from '../../assets/img/call.svg'
import cart from '../../assets/img/cart.png'
import AuthorizationModal from "./Authorization/AuthorizationModal";
import RegistrationModal from './Authorization/RegistrationModal'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Header = observer(() => {
  const { store } = React.useContext(Context);
  const isAuth = store.isAuth
  const user = store.user

  React.useEffect(() => {
    console.log(isAuth, user)
  }, [store])


   
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home" >
            <img src={logo} width={'30px'} height={"30px"} className="d-inline-block" alt="logo" />{' '}
            Техно маркет
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home " className="ms-4">Главная</Nav.Link>
            <Nav.Link href="#features" className="ms-4">Каталог</Nav.Link>
            <Nav.Link href="#pricing" className="ms-4">О нас</Nav.Link>
          </Nav>

          {isAuth && <Badge
            bg="outline-light"
            className="text-success fs-5"
          >
            Авторизован
            <br />

          </Badge>}

          {!isAuth && <AuthorizationModal />}

          {isAuth && <Button variant='dark' size='' onClick={() => store.logout()} >Выйти</Button>}

          <NavLink to='http://localhost:4000/admin'>

          <Button variant='dark' className="fs-5">Админка</Button>
        </NavLink>

          {/* {!isAuth && <RegistrationModal />} */}
        </Container>
      </Navbar>
      <HeaderNavbar />
    </>

  )
});

export default Header;




