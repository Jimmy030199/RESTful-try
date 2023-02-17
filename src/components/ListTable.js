import React from 'react'
import dayjs from 'dayjs'

function ListTable(props) {
    const{data} =props
  return (
    <table className="table table-striped table-bordered">
    <thead>
              <tr>
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