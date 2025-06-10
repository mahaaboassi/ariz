import { Link } from "react-router-dom"

const Intro = ()=>{
    return(<div className="intro pb-10 mt-32 flex flex-col gap-10 px-4 sm:px-10 ">
        <div className="intro-heading flex flex-col justify-center items-center">
            <h1>Who We Are</h1>
            <div>
                <Link to={"/"}>Home </Link>
                &nbsp; / &nbsp; About
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
            <div><p>Ariz Global brings over a decade of specialized expertise in digital marketing, with a mission to deliver tailored solutions that meet the evolving needs of luxury brands. Our journey has been shaped by a commitment to excellence, innovation, and a deep understanding of the premium market space.</p></div>
            <div><p>We go beyond traditional marketing to craft strategies that do more than simply elevate our clients’ presence. Our strategic approach focuses on strengthening brand identity, building prestige, and creating lasting value. We empower brands to thrive in a competitive global arena.</p></div>
        </div>

    </div>)
}
export default Intro