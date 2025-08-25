
import Lottie from "lottie-react";
import animationData from "../data/json/gift.json";

// Images 
import mark from '../assets/images/memory-game/question_mark.png'

import image_1 from "../assets/images/memory-game/shape_1.png"
import image_1_match from "../assets/images/memory-game/shape_1 - Copy.png"

import image_2 from "../assets/images/memory-game/shape_2.png"
import image_2_match from "../assets/images/memory-game/shape_2 - Copy.png"

import image_3 from "../assets/images/memory-game/shape_3.png"
import image_3_match from "../assets/images/memory-game/shape_3 - Copy.png"

import image_4 from "../assets/images/memory-game/shape_4.png"
import image_4_match from "../assets/images/memory-game/shape_4 - Copy.png"

import image_5 from "../assets/images/memory-game/shape_5.png"
import image_5_match from "../assets/images/memory-game/shape_5 - Copy.png"

import image_6 from "../assets/images/memory-game/shape_6 - Copy.png"
import image_6_match from "../assets/images/memory-game/shape_6 - Copy.png"

import { useEffect, useState } from "react";

const MemoryCard = ()=>{
    const data = [{
        image : image_1,
        id : 1,
        key : 1,
        flip : false
    },{
        image : image_2,
        id : 2,
        key : 2,
        flip : false
    },{
        image : image_3,
        id : 3,
        key : 3,
        flip : false
    },{
        image : image_4,
        id : 4,
        key : 4,
        flip : false
    },{
        image : image_5,
        id : 5,
        key : 5,
        flip : false
    },{
        image : image_6,
        id : 6,
        key : 6,
        flip : false
    },{
        image : image_1_match,
        id : 7,
        key : 1,
        flip : false
    },{
        image : image_2_match,
        id : 8,
        key : 2,
        flip : false
    },{
        image : image_3_match,
        id : 9,
        key : 3,
        flip : false
    },{
        image : image_4_match,
        id : 10,
        key : 4,
        flip : false
    },{
        image : image_5_match,
        id : 11,
        key : 5,
        flip : false
    },{
        image : image_6_match,
        id : 12,
        key : 6,
        flip : false
    }]
    const [ dataCard, setDataCard ] = useState(data)
    const [ time , setTime ] = useState(0)
    const [ move, setMove ] = useState(0)
    const [ match, setMatch ] = useState(0)
    const [ openCard, setOpenCard ] = useState(false)
    const [flippedCards, setFlippedCards] = useState([])
    const runTime = ()=>{
        setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);
        
        // setInterval(() => {
        //     const d = new Date(),
        //         seconds = d.getMinutes() * 60 + d.getSeconds()
        //         totalTime = 60 * 6
        //         tL = totalTime - (seconds % totalTime)
        //         console.log(tL)
                
        //         r = `${parseInt(tL / 60, 10)}:${tL % 60}`;

        //     setTime(r);

        // }, 1000);
    }
    const shuffle = (array) => {
        return [...array].sort(() => Math.random() - 0.5);
    };

    useEffect(() => {
        setDataCard(shuffle(data));
    }, [openCard]);
    const handleFlip = (element) => {
        let array = [...flippedCards]
        let newArray =  array.filter(e => e.id != element.id)
        newArray.push(element)
        if(newArray.length % 2 == 0){
            setMove(move+1)
        }
        setFlippedCards(newArray);
        if (newArray.length % 2 === 0) {
            setTimeout(() => {
                if (newArray[newArray.length - 2]?.key !== newArray[newArray.length - 1]?.key) {
                    // Remove last two cards if not match
                    setFlippedCards(prev => prev.filter(e => e.id !== newArray[newArray.length - 1].id && e.id !== newArray[newArray.length - 2].id));
                }else{
                    setMatch(match+1)
                }
            }, 600);
        }
    };
    const closeIcon =  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <g clipPath="url(#clip0_17_1174)">
        <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#C3996B"/>
        </g>
        <defs>
        <clipPath id="clip0_17_1174">
        <rect width="24" height="24" fill="#19770D"/>
        </clipPath>
        </defs>
        </svg>
    const closeGame = ()=>{
        setOpenCard(true)
        setFlippedCards([])
        setMove(0)
        setMatch(0)
    }
    return(<div className="chance">
        {/* <button onClick={runTime} >test</button> */}
        <div className="content-chance cursor-pointer">
            <div onClick={closeGame}  style={{ width: 65, height: 65 }}>
                <Lottie  animationData={animationData} loop={true} />
            </div>
        </div>
        { openCard && <div className="memory-card p-5">
            <div className="flex flex-col gap-5">
                <div>
                    <div className="flex justify-end ">
                        <div onClick={()=>setOpenCard(false)} className="cursor-pointer" >{closeIcon}</div>
                    </div>
                    <h2 className="text-center">MEMORY GAME</h2>
                </div>
                <div className="flex gap-10 justify-center">
                    <div className="content-properties p-3">Moves: {move}</div>
                    <div className="content-properties p-3" >Time: {time}</div>
                    <div className="content-properties p-3" >matches: {match}/6</div>
                </div>
                <div className="grid-game">
                    {dataCard.map((e,i)=>{
                       const flippedIds =  []
                       flippedCards.forEach((ele)=>{
                            flippedIds.push(ele.id)
                       })
                       return <div 
                            key={`Image_Memory_Card_${e.id}_${i}`}
                            className={`card-flip flex justify-center items-center ${flippedIds.includes(e.id) ? "flipped" : ""}`}
                            onClick={() => handleFlip(e)}
                            >
                            <div className="card-inner ">
                                {/* Front (hidden side) */}
                                <div className="card-front ">
                                    <img src={mark} alt={`Question Mark`} />
                                </div>
                                {/* Back (actual image) */}
                                <div className="card-back">
                                    <img src={e.image} alt={`Image (${e.id})`} />
                                </div>
                            </div>
                        </div>
                        })}
                </div>

            </div>
            
        </div>}
    </div>)
}

export default MemoryCard