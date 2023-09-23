import React from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'




const DeviceModal = () => {
    const [show, setShow] = React.useState(false);
    const [types, setTypes] = React.useState([]);
    const [brands, setBrands] = React.useState([]);
    const [deviceName, setDeviceName] = React.useState('');
    const [devicePrice, setDevicePrice] = React.useState('');
    const [deviceType, setDeviceType] = React.useState('');
    const [deviceBrand, setDeviceBrand] = React.useState('');
    const [deviceImg, setdeviceImg] = React.useState(null);



    React.useEffect(()=> {
        async function getTypes(){
          await axios.get(process.env.REACT_APP_API_URL + '/type')
          .then(res=> setTypes(res.data))
        }
        
        async function getBrands(){
          await axios.get(process.env.REACT_APP_API_URL + '/brand')
          .then(res=> setBrands(res.data))
        }
    
        getTypes()
        getBrands()
    
      },[])



      
  const postDevice = async ()=> {
    const formData = new FormData()
    formData.append('name', deviceName)
    formData.append('price', devicePrice)
    formData.append('typeId', deviceType)
    formData.append('brandId', deviceBrand)
    formData.append('img', deviceImg)
    await axios.post(process.env.REACT_APP_API_URL + '/device', formData)
    .then(res=> console.log(res.data))
  }

    


      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
  


  return (
    <>
    <Button variant="primary" onClick={handleShow}>
        Добавить устройство 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Добавьте устройство</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <div className='w-75 m-auto'>
        <Form >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Название</Form.Label>
          <Form.Control type="text"
           placeholder=""
           onChange={event=>setDeviceName(event.target.value)}
           />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Цена</Form.Label>
          <Form.Control type="number
          " placeholder="" 
          onChange={event=>setDevicePrice(event.target.value)}
          />
          <Form.Select className='mt-4' aria-label="Выберите тип" onClick={(event)=> setDeviceType(event.target.value)} >
      <option value=''>Выберите тип</option>
      {types.map(({id, name}) => {
       return( <option key={id} value={id} >{name}</option>)
      })}
     
    </Form.Select>

    <Form.Select className='mt-4' aria-label="Default select example" onClick={(event)=> setDeviceBrand(event.target.value)} >
      <option value=''>Выберите бренд</option>
      {brands.map(({id, name}) => {
       return( <option key={id} value={id} onClick={()=> setDeviceBrand({id})} >{name}</option>)
      })}
    </Form.Select>


        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Добавить изображение</Form.Label>
        <Form.Control type="file"
        onChange={event => setdeviceImg(event.target.files[0])}
        />
      </Form.Group>
          </Form>

    </div></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
          Закрыть
          </Button>
          <Button variant="primary" onClick={()=>{postDevice(); handleClose()}}>
            Добавить
          </Button>
        </Modal.Footer>
      </Modal>
    
    </>
  )
}

export default DeviceModal