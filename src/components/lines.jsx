import { useEffect, useState } from "react";

const Lines = ({children,isWithGlow})=>{
    const [ start, setStart ] =  useState(true)
    useEffect(()=>{
        setTimeout(() => {
            setStart(false)
        }, 1200);
    },[])

    return (<div style={{overflow:"hidden",position:"relative"}} className="h-full">
       <div className={`${isWithGlow ? "container-lines-with-glow" : "grid-container"}`}>
            {
                [...Array(500)].map((_,idx)=>{
                    const height = Math.floor(Math.random() * 60) + 800;
                    return<div  className={`line-auto line-${idx}`} key={`Lines_${idx}`}></div>
                })
            }
       </div>
        <div className="content-lines h-full ">
            {children}
        </div>
    </div>)
}
export default Lines