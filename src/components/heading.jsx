const Heading = ({title, subTitle, isFromSubscribe,nonCenter})=>{
    return <div className={`heading ${isFromSubscribe?"":"my-5 md:my-10"}`}>
        <h2 className={nonCenter?"":"text-center"}>{subTitle}</h2>
        <h3 className={nonCenter?"":"text-center"}>{title}</h3>
    </div>
}
export default Heading