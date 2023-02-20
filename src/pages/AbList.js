import React, { useEffect,useState } from 'react'
import {LIST_DATA,ADDRESS_BOOK} from "./../components/api_config"
import ListTable from '../components/ListTable'
import Pagination from '../components/Pagination'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

function AbList() {
const location = useLocation()
console.log(location)
console.log(location.search)
const usp = new URLSearchParams(location.search)
console.log(usp)
const [data,setData] = useState({
  page: 0,
  rows: [],
  perPage: 0,
  totalPages: 0,
  totalRows: 0
})

    const getListData = async (page=1) =>{

    const response = await axios.get(LIST_DATA,{params:{page}});
 
    // response.data 會依據後端回應的檔頭作解析, JSON
    console.log(response.data);
    setData(response.data);





        // const r = await fetch(LIST_DATA+`?page=${page}`)
        // const json = await r.json()
        // console.log(json)
        // setData(json)
    } 

    const removeItem = async (itemId=0)=>{
     if(!(+itemId)){
      return;
     }
     const response = await axios.delete(ADDRESS_BOOK+'/'+itemId)
     console.log(response.data)
     getListData(data.page || 1)

    }

useEffect(()=>{
        getListData(+usp.get('page'))

        return ()=>{console.log("移除AbList")}    
},[location.search])
  return (

    <div className="container">
    <Pagination page={data.page} totalPages={data.totalPages} getListData={getListData}/>
    <ListTable data={data} removeItem={removeItem}/>
    </div>
  )
}

export default AbList