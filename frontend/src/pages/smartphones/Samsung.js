import React from 'react'
import Catalog from '../../components/body/devicePage/catalog/Catalog'
import axios from 'axios'




const Samsung = () => {
  const [data, setData] = React.useState([])


React.useEffect(()=>{
    async function getData(){
        await axios.get(process.env.REACT_APP_API_URL + '/device', {params: {
          typeId: 1,
          brandId: 4
        }})
        .then(res=> setData(res.data))
    }
    getData()

}, [])

  return (
   
      <Catalog data={data}/>
    
  )
}

export default Samsung





