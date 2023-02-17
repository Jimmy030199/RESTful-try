import React from 'react'
import { useNavigate } from 'react-router-dom';

function Pagination(props) {
    const {page,totalPages,getListData} = props
    const navigate = useNavigate()
  return (
    <div className="row">
<div className="col">

<nav aria-label="Page navigation example">
          <ul className="pagination">
           {Array(10).fill(1).map((v,i)=>{
            const p = page - 5 + i;
            if(p<1 || p>totalPages) return null
            let myClass = 'page-item';
            if(p===page){ myClass = 'page-item active';}
            
            return <li className={myClass} key={p} >
                <a className="page-link" href="#/" onClick={(e)=>{
                    e.preventDefault()
                    navigate(`?page=${p}`)
            
                    // getListData(p)
                }}>
                  { p }
                </a>
              </li> })}
          </ul>
        </nav>
        {page + ', ' + totalPages}

</div>

    </div>

   
  )
}

export default Pagination