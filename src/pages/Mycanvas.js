import {useRef,useEffect,useState} from 'react'
import { productData } from "./../data/product-data";

function Mycanvas() {
const canvasRef = useRef({})
const shadowRef = useRef({})
const [cart,setCart] = useState([])
const[cache, setCache]= useState({})
const positions = [
  [0,0],
  [600,0],
  [300,300],
  [0,500],
  [600,500],
]

useEffect(()=>{

  renderCanvas()
   
},[cart])

 const renderCanvas =async () =>{
  const c = shadowRef.current;// 先畫在 shadow canvas 上
  const ctx = c.getContext("2d");


  ctx.clearRect(0, 0, c.width, c.height);
  const dishImg = await getImageFromPath("/imgs/dish.jpeg");
  ctx.drawImage(dishImg, 0, 0);


  for(let i in cart){
    if(i>=positions.length){break}
   const item = cart[i]
   const itemImg = await getImageFromPath('/imgs/'+item.img)
   ctx.drawImage(itemImg, positions[i][0], positions[i][1]);
  }
 // 畫到真正要呈現的 canvas 上
 const ctx2 = canvasRef.current.getContext("2d");
 ctx2.clearRect(0, 0, c.width, c.height);
 ctx2.drawImage(c, 0, 0);
 }

 const getImageFromPath =(path)=>{
  console.log(cache)
  return new Promise((resolve,reject)=>{

    if(cache[path]){
      return resolve(cache[path]);  // 已經在快取裡面的資料
    }



    const img =new Image()
    img.onload=(event)=>{
      setCache({...cache,[path]: img})
      resolve(img)
    }
    img.src = path;

  })
 }

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col">
                  {productData.map((v,i)=>{
                    return (
                        <div key={v.id} style={{ display: "inline-block" }} onClick={()=>{
                          if(cart.length>10){return}
                          const new_v = {...v,tid:Date.now()}
                          console.log(new_v);
                          setCart([...cart,new_v])

                        }}>
                        <div>
                            <img src={"/imgs/"+v.img} alt={v.name} width="150"/>
                        </div>
                        <div>
                        {v.name} {v.price}
                        </div>
                        </div>
                    )
                  })}
                  </div>
                 </div>

                 <div className="row">
                <div className="col">
                  {cart.map((v,i)=>{
                    return (
                        <div key={v.tid} style={{ display: "inline-block" }} onClick={()=>{
                          const newCart = cart.filter((c)=>{return c.tid !== v.tid})
                          setCart(newCart)
                        }}>
                        <div>
                            <img src={"/imgs/"+v.img} alt={v.name} width="60"/>
                        </div>
                        </div>
                    )
                  })}
                  </div>
                 </div>






                  <div className="row">
                    <div className="col">
                    <canvas width="800" height="700" ref={shadowRef} hidden></canvas>
                    <canvas width="800" height="700" style={{border:"1px solid gray"}} ref={canvasRef}></canvas>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Mycanvas