import { Link } from "react-router-dom"
import Lines from "../../components/lines"
import { MetaData } from "../../data/meta"

const Page_404 = ()=>{
    return(<article>

        <title>{MetaData.page404.title}</title>
        <meta name="description" content={MetaData.page404.description} />
        <meta name="keywords" content={MetaData.page404.keywords} />
        <link rel="canonical" href={MetaData.page404.link} />
        {/*  Open Graph for Facebook, LinkedIn, etc.  */}
        <meta property="og:title" content={MetaData.page404.title} />
        <meta property="og:url" content={MetaData.page404.link} />
        <meta property="og:description" content={MetaData.page404.description} />
        {/* Twitter  */}
        <meta name="twitter:title" content={MetaData.page404.title} />
        <meta property="twitter:description" content={MetaData.page404.description} />

        <Lines isWithGlow={true} children={<div className="page-404 text-center px-4 sm:px-10 flex flex-col justify-center items-center gap-4">
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p >Sorry, it seems like the page you are looking for does not exist </p>
        <Link to={"/"}><button>Back to Home</button></Link>
    </div>} />
    </article>)
}
export default Page_404