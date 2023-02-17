import { useState } from "react"

function Tmp1() {
  const [num,setNum] = useState(0)
    return (<>
    {console.log()}
      <button type="button" className="btn btn-danger" onClick={()=>{setNum((prev)=>{return prev-1})}}>-</button>
      {num}
      <button type="button" className="btn btn-primary" onClick={()=>{setNum((prev)=>{return prev+1})}}>+</button>
      </>
    )
  }
  
  export default Tmp1