import { Link } from "react-router-dom"
import Lines from "../../components/lines"

const Page_404 = ()=>{
    return(<Lines isWithGlow={true} children={<div className="page-404 text-center px-4 sm:px-10 flex flex-col justify-center items-center gap-4">
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p >Sorry, it seems like the page you are looking for does not exist </p>
        <Link to={"/"}><button>Back to Home</button></Link>
    </div>} />)
}
export default Page_404