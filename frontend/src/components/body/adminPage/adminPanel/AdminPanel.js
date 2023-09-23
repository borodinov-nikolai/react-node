import React from 'react'
import axios from 'axios'
import TypeModal from './TypeModal';
import BrandModal from './BrandModal';
import DeviceModal from './DeviceModal';



const AdminPanel = () => {



  return (
    <div className='d-flex flex-column w-25 mx-auto my-4 gap-4'>
      
      <TypeModal/>
      <BrandModal/>
      <DeviceModal/>

 
      
 
    </div>
  )
}


export default AdminPanel