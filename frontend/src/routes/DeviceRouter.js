import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import All from '../pages/smartphones/All.js'
import Poco from '../pages/smartphones/Poco.js'
import Samsung from '../pages/smartphones/Samsung.js'
import Xiaomi from '../pages/smartphones/Xiaomi.js'
import Honor from '../pages/smartphones/Honor.js'
import Apple from '../pages/smartphones/Apple.js'



const DeviceRouter = () => {
  return (
    <div>
     
            <Routes>
                <Route path='/smartphones' element={<All/>}/>
                <Route path='/poco' element={<Poco/>}/>
                <Route path='/samsung' element={<Samsung/>}/>
                <Route path='/xiaomi' element={<Xiaomi/>}/>
                <Route path='/honor' element={<Honor/>}/>
                <Route path='/apple' element={<Apple/>}/>

            
                
            </Routes>
        
    </div>
  )
}

export default DeviceRouter