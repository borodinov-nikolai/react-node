import React from 'react'
import Catalog from '../../components/body/devicePage/catalog/Catalog'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'




const All = () => {
  const [data, setData] = React.useState([])
  const [searchData, setSearchData] = React.useState('')


React.useEffect(()=>{
    async function getData(){
        await axios.get(process.env.REACT_APP_API_URL + '/device', {params:{
          typeId: 1,
        }
        })
        .then(res=> setData(res.data))
    }
    getData()

    
  }, [])


  const Finder = async ()=> {
    await axios.get(process.env.REACT_APP_API_URL + '/device', {params:{
      search: searchData
    }
    })
    .then(res=> setData(res.data))
  }
  


  return (
    <>
    <div className='d-flex'>
      

    </div>
      <Catalog data={data}/>
      </>
  )
}

export default All