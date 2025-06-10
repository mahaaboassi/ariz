import { Link } from "react-router-dom"

const HeadingForDynamicPages = ({basicTitle, firstTitle, link, secondTitle})=>{
    return(<div className="intro-heading flex flex-col justify-center items-center">
            <h1>{basicTitle}</h1>
            <div>
                <Link to={link}>{firstTitle} </Link>
                &nbsp; / &nbsp; <span className="not-clickable">{secondTitle}</span>
            </div>
        </div>)
}
export default HeadingForDynamicPages