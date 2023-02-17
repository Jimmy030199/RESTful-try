import React, { useEffect,useState } from 'react'
import {LIST_DATA} from "./../components/api_config"
import ListTable from '../components/ListTable'
import Pagination from '../components/Pagination'
import { useLocation } from 'react-router-dom'

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
        const r = await fetch(LIST_DATA+`?page=${page}`)
        const json = await r.json()
        console.log(json)
        setData(json)
    } 

useEffect(()=>{
        getListData(+usp.get('page'))

        return ()=>{console.log("移除AbList")}    
},[location.search])
  return (

    <div className="container">
    <Pagination page={data.page} totalPages={data.totalPages} getListData={getListData}/>
    <ListTable data={data}/>
    </div>
  )
}

export default AbList