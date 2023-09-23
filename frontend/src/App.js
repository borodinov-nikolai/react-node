import {Context} from './index';
import {observer} from 'mobx-react-lite';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/HomePage'
import './styles/style.css'
import './styles/phone.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import AdminPage from './pages/AdminPage'
import DeviceRouter from './routes/DeviceRouter'
import Container from 'react-bootstrap/esm/Container';
import All from './pages/smartphones/All';




function App() {
    const {store} = React.useContext(Context);


    React.useEffect(()=> {
      if(localStorage.getItem('token')){
        store.checkAuth();
      }
    }, [store])


    
  return (
    <div className="App" >

      <Router>

       <Header/>
       <Container  className='min-vh-100'>
      <Routes>
      <Route path='/' element={<All/>}/>
      <Route path='/catalog/*' element={<DeviceRouter/>} />
      <Route path='/AdminPanel' element={<AdminPage/>}/>
      </Routes>
       </Container>
      <Footer/> 
      </Router>

    </div>
  )
}

export default observer(App);

