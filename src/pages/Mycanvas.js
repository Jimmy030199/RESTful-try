import {useRef,useEffect} from 'react'
import { productData } from "./../data/product-data";

function Mycanvas() {
const canvasRef = useRef({})


useEffect(()=>{

    const c= canvasRef.current;
    console.log(c)

    const ctx = c.getContext('2d')

    const img = new Image()
    img.onload=(e)=>{
        ctx.drawImage(img,0,0); 
    }
    img.src="/imgs/1.png"



    // ctx.beginPath(); // 重置path
    // ctx.moveTo(50, 50);
    // ctx.lineTo(200, 300);
    // ctx.lineTo(400, 50);
    // ctx.strokeStyle = 'orange'; // 設定畫筆顏色
    // ctx.lineWidth = 20;// 設定畫筆粗細
    
    // ctx.stroke()// 在路徑上畫線


},[])

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col">
                  {productData.map((v,i)=>{
                    return (
                        <div key={v.id} style={{ display: "inline-block" }}>
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