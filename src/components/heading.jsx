const Heading = ({title, subTitle, isFromSubscribe})=>{
    return <div className={`heading ${isFromSubscribe?"":"my-5 md:my-10"}`}>
        <h2 className="text-center">{subTitle}</h2>
        <h3 className="text-center">{title}</h3>
    </div>
}
export default Heading