const Metrics = ()=>{
    const data = [{
        num : "+1000",
        des : "Projects Done"
    },{
        num : "+375",
        des : "Statisfied Customers"
    },{
        num : "20K",
        des : "Campaigns Processed "
    },{
        num : "+20",
        des : "Team of Professionals"
    }]
    return(<div className="grid grid-cols-4 px-4 sm:px-10 metrics pt-10">
       {data.map((e,idx)=>(<div className="flex px-3 justify-center items-center flex-col" key={`About_Us_metrics_${e.des}_${idx}`}
                style={idx<3 ?{borderRight : `4px solid #ca9e67`}:{}} >
                <h4>{e.num}</h4>
                <p>{e.des}</p>
            </div>))}
    </div>)
}
export default Metrics