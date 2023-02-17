import React, { useEffect,useState } from 'react'
import {LIST_DATA} from "./../components/api_config"
import ListTable from '../components/ListTable'
import Pagination from '../components/Pagination'

function AbList() {

const [data,setData] = useState({
  page: 0,
  rows: [],
  perPage: 0,
  totalPages: 0,
  totalRows: 0
})

    const getListData = async (page=1) =>{
        const r = await fetch(LIST_DATA+`?page=${page}`)
        const json = await r.json()
        console.log(json)
        setData(json)
    } 

useEffect(()=>{
        getListData()

        return ()=>{console.log("移除AbList")}    
},[])
  return (

    <div className="container">
    <Pagination page={data.page} totalPages={data.totalPages} getListData={getListData}/>
    <ListTable data={data}/>
    </div>
  )
}

export default AbList