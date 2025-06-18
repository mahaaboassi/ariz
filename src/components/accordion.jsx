const Accordion = ({onClick,isOpen,question,answer})=>{
    return <div className={`container p-5`}>
            <div onClick={onClick} className={`target flex items-center gap-5 cursor-pointer`}>
                <div style={{width:"fit-content"}} >
                    <div className={`icon-accordion`}>
                            <div className={`${isOpen?"icon-first-active":"icon-first"}`}></div>
                            <div className={`icon-second`}></div>
                    </div>
                </div>
                <div > {question} </div>
                
            </div>
            <p className={`content-accordion flex items-center ${isOpen ? "content-active":""}`}>
                {answer}
            </p>
        </div>
}

export default Accordion