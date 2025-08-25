import { useEffect, useState } from "react";

const Lines = ({children,isWithGlow, isContact})=>{
    const [ start, setStart ] =  useState(true)
    useEffect(()=>{
        setTimeout(() => {
            setStart(false)
        }, 1200);
    },[])

    return (<div style={{overflow:"hidden",position:"relative"}} className="h-full">
       <div className={`${isWithGlow ? "container-lines-with-glow" : "grid-container"}`}>
            {
                [...Array(400)].map((_,idx)=>{
                    if(idx== 62 || idx== 50 || idx== 70 || idx== 120 || idx == 85 || idx== 201 || idx== 154 ||
                        idx== 300 || idx== 220 || idx== 400 || idx== 286 || idx == 140
                      ){
                        return<div  className={`line-auto ${isContact &&  idx== 286  ? ``: `line-${idx}`} ${start ? "bubble-first" : "bubble"}`} key={`Lines_${idx}`}></div>
                      }else{
                        return<div  className={`line-auto line-${idx}`} key={`Lines_${idx}`}></div>
                      }
                    
                })
            }
       </div>
        <div className="content-lines h-full ">
            {children}
        </div>
    </div>)
}
export default Lines