import { useEffect, useState } from "react";

const Lines = ({children,isWithGlow})=>{
    const [ start, setStart ] =  useState(true)
    useEffect(()=>{
        setTimeout(() => {
            setStart(false)
        }, 1200);
    },[])

    return (<div className={`${isWithGlow? "container-lines-with-glow": "container-lines"}  h-full`}>
            <div className="lines">
                    {
                        [...Array(500)].map((_,idx)=>{
                            const height = Math.floor(Math.random() * 60) + 800;
                            return<div  className="line" key={`Lines_${idx}`}></div>
                        })
                    }
            </div>
            <div className="lines-horizontal">
                    {
                        [...Array(500)].map((_,idx)=>{
                            const height = Math.floor(Math.random() * 60) + 800;
                            return<div  className="line-horizontal" key={`Lines_Horizontal_${idx}`}></div>
                        })
                    }
            </div>
               
                
                <div style={{animationDelay : "0.5s"}} className={`square ${start? "bubble-first" : "bubble"}`} ></div>
                <div style={{animationDelay : "0.3s"}} className={`square-left-2 ${start? "bubble-first" : "bubble"}`} ></div>
                <div style={{animationDelay : "0.4s"}} className={`square-left-3 ${start? "bubble-first" : "bubble"}`} ></div>
                <div style={{animationDelay : "0.3s"}} className={`square-left-4 ${start? "bubble-first" : "bubble"}`} ></div>
                <div style={{animationDelay : "0.8s"}} className={`square-left-5 ${start? "bubble-first" : "bubble"}`} ></div>
                <div style={{animationDelay : "1s"}} className={`square-left-6 ${start? "bubble-first" : "bubble"}`} ></div>
                <div style={{animationDelay : "0.6s"}} className={`square-left-7 ${start? "bubble-first" : "bubble"}`} ></div>
                <div style={{animationDelay : "0.3s"}} className={`square-left-8 ${start? "bubble-first" : "bubble"}`} ></div>
                <div style={{animationDelay : "0.5s"}} className={`square-left-9 ${start? "bubble-first" : "bubble"}`} ></div>
                <div style={{animationDelay : "0.6s"}} className={`square-left-10 ${start? "bubble-first" : "bubble"}`} ></div>
                <div style={{animationDelay : "0.3s"}} className={`square-left-11 ${start? "bubble-first" : "bubble"}`} ></div>
                <div className="content-lines h-full">
                {children}

            </div>
       </div>)
}
export default Lines