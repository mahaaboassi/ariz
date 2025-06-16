const Heading = ({title, subTitle, isFromSubscribe})=>{
    return <div className={`heading ${isFromSubscribe?"":"my-5 md:my-10"}`}>
        <h3 className="text-center">{subTitle}</h3>
        <h2 className="text-center">{title}</h2>
    </div>
}
export default Heading