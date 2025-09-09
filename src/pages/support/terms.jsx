import { useEffect } from "react"
import HeadingForDynamicPages from "../../components/headingForDynamicPages"
import Lines from "../../components/lines"
import { MetaData } from "../../data/meta"

const Terms = ()=>{
    useEffect(()=>{window.scrollTo({ top: 0})},[])
    return(<article>

            <title>{MetaData.terms.title}</title>
            <meta name="description" content={MetaData.terms.description} />
            <meta name="keywords" content={MetaData.terms.keywords} />
            <link rel="canonical" href={MetaData.terms.link} />
            {/*  Open Graph for Facebook, LinkedIn, etc.  */}
            <meta property="og:title" content={MetaData.terms.title} />
            <meta property="og:url" content={MetaData.terms.link} />
            <meta property="og:description" content={MetaData.terms.description} />
            {/* Twitter  */}
            <meta name="twitter:title" content={MetaData.terms.title} />
            <meta property="twitter:description" content={MetaData.terms.description} />




        <div className="flex flex-col gap-10">
            <Lines children={<div className="pb-4 mt-32 flex flex-col gap-10 px-4 sm:px-10">
                <HeadingForDynamicPages basicTitle={"Terms & Conditions"}  firstTitle={"Home"} link={"/"} secondTitle={"Terms"}  />
            </div>} />
            <div className="px-4 sm:px-10  flex flex-col gap-5 support mb-16">
                <div>
                    <p className="pb-2">Effective Date : <strong> June 16, 2025</strong></p>
                    <p>
                        Welcome to Ariz Global. These Terms of Service ("Terms") govern your use of our website and the services we provide. By accessing or using our services, you agree to be bound by these terms.
                    </p>
                    {/* <p>If you do not agree with these Terms, we ask you to kindly refrain from using our services websites.</p> */}
                </div>
                <div>
                    <h2>1. About Us</h2>
                    <p>Ariz Global is a full-service digital marketing agency based in Dubai, offering branding, web development, SEO, social media, and creative marketing solutions to businesses worldwide.</p>
                </div>
                <div>
                    <h2>2. Use of Our Services</h2>
                    <p>You agree to use our services only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of our services.</p>
                    <p>We reserve the right to refuse service, suspend accounts, or cancel projects for any reason, including misuse or unethical behavior.</p>
                </div>
                <div>
                    <h2>3. Client Responsibilities</h2>
                    <p>To ensure successful delivery, clients are responsible for</p>
                    <ul>
                        <li>Providing accurate and timely information.</li>
                        <li>Approving designs/content within agreed timelines.</li>
                        <li>Making payments on time as per the project agreement.</li>
                    </ul>
                    <p>Failure to do so may delay or pause the project.</p>
                </div>
                <div>
                    <h2>4. Payments & Billing</h2>
                    <p>All projects require partial or full payment in advance, depending on the scope of work. Invoices must be settled within the timeline stated in the agreement.</p>
                    <p>Late payments may incur a delay in project delivery or suspension of services.</p>
                </div>
                <div>
                    <h2>5. Intellectual Property</h2>
                    <p>Unless otherwise stated:</p>
                    <ul>
                        <li>All original content, designs, and code remain the property of Ariz Global until full payment is received.</li>
                        <li>Upon final payment, ownership of approved deliverables transfers to the client.</li>
                        <li>We may showcase completed projects in our portfolio unless requested otherwise.</li>
                    </ul>
                </div>
                <div>
                    <h2>6. Revisions & Approvals</h2>
                    <p>We offer a defined number of revisions per service (as stated in the proposal). Additional revisions will be billed separately. Approvals must be submitted in writing via email.</p>
                </div>
                <div>
                    <h2>7. Cancellations & Refunds</h2>
                    <p>If a client decides to cancel a project:</p>
                    <ul>
                        <li>Work completed up to the cancellation date is billable.</li>
                        <li>No refunds will be issued for services already delivered.</li>
                        <li>Refunds for prepaid services will be considered case-by-case.</li>
                    </ul>
                </div>
                <div>
                    <h2>8. Limitation of Liability</h2>
                    <p>Ariz Global will not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services. We do not guarantee specific business results such as leads, traffic, or revenue.</p>
                </div>
                <div>
                    <h2>9. Changes to These Terms</h2>
                    <p>We may update these terms at any time. All changes will be posted here with a new effective date. Your continued use of our services means you accept the updated Terms.</p>
                </div>
                <div>
                    <h2>10. Contact Us</h2>
                    <p>If you have any questions about these terms, feel free to reach out:</p>
                    <p> Email: info@arizglobal.com</p>
                </div>
                
            </div>
        </div>
    </article>)
}
export default Terms