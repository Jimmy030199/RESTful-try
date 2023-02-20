import {useContext} from 'react'
import dayjs from 'dayjs'
import { FaTrashAlt } from "react-icons/fa"
import ThemeContext from '../context/ThemeContext'

function ListTable(props) {
    const{data,removeItem} =props
     const {color, backgroundColor} =  useContext(ThemeContext)
  return (
    <table className="table table-striped table-bordered" style={{color, backgroundColor}}>
    <thead>
              <tr>
              <th scope="col"><FaTrashAlt/></th>
                <th scope="col">#</th>
                <th scope="col">姓名</th>
                <th scope="col">手機</th>
                <th scope="col">電郵</th>
                <th scope="col">生日</th>
                <th scope="col">地址</th>
              </tr>
            </thead>
            <tbody>
              {data.rows.map((v,i)=>{
                return <tr key={v.sid}>
                <td>
                <a href="#/" onClick={(e)=>{
                  e.preventDefault();
                  removeItem(v.sid)
                }}><FaTrashAlt /></a></td>
              <td>{v.sid}</td>
              <td>{v.name}</td>
              <td>{v.mobile}</td>
              <td>{v.email}</td>
              <td>{dayjs(v.birthday).format('YYYY-MM-DD')}</td>
              <td>{v.address}</td>
              </tr>
              })}
            </tbody>
    
    </table>
  )
}

export default ListTable