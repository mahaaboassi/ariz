import { useEffect } from "react"
import HeadingForDynamicPages from "../../components/headingForDynamicPages"
import Lines from "../../components/lines"
import { MetaData } from "../../data/meta"

const Privacy = ()=>{
    useEffect(()=>{window.scrollTo({ top: 0, behavior: "smooth" })},[])
    return(<article>

            <title>{MetaData.policy.title}</title>
            <meta name="description" content={MetaData.policy.description} />
            <meta name="keywords" content={MetaData.policy.keywords} />
            <link rel="canonical" href={MetaData.policy.link} />

            <div className="flex flex-col gap-10">
                <Lines children={<div className="pb-4 mt-32 flex flex-col gap-10 px-4 sm:px-10">
                    <HeadingForDynamicPages basicTitle={"Privacy Policy"}  firstTitle={"Home"} link={"/"} secondTitle={"Privacy"}  />
                </div>} />
                <div className="px-4 sm:px-10  flex flex-col gap-5 support mb-16">
                    <div>
                        <p className="pb-2">Effective Date : <strong> June 16, 2025</strong></p>
                        <p>
                        At Ariz Global, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or use our services.
                        </p>
                        <p>By using our site, you agree to the collection and use of information in accordance with this policy.</p>
                    </div>
                    <div>
                        <h2>1. Information We Collect</h2>
                        <p>We may collect the following types of information:</p>
                        <ul>
                            <li>Personal information (name, email, phone) when you contact us, request a quote, or subscribe to our newsletter.</li>
                            <li>Usage data (IP address, browser type, pages visited, time on site) collected automatically through cookies or analytics tools.</li>
                            <li>Business information (company name, industry, service interests) provided when filling out project or contact forms.</li>
                        </ul>
                    </div>
                    <div>
                        <h2>2. How We Use Your Information</h2>
                        <p>We use the information we collect to:</p>
                        <ul>
                            <li>Respond to inquiries or requests.</li>
                            <li>Deliver our marketing and web development services.</li>
                            <li>Improve our website’s performance and user experience.</li>
                            <li>Send updates, blog content, or marketing emails (only if you’ve subscribed).</li>
                            <li>Comply with legal obligations.</li>
                        </ul>
                    </div>
                    <div>
                        <h2>3. Cookies & Tracking Technologies</h2>
                        <p>We use cookies and third-party tools like Google Analytics to track website traffic and usage behavior. This helps us improve our content and better serve our visitors.</p>
                        <p>You can disable cookies via your browser settings, though this may affect certain site features.</p>
                    </div>
                    <div>
                        <h2>4. Data Sharing</h2>
                        <p>We do not sell, rent, or trade your personal information. However, we may share data with trusted third-party providers who help us operate our website, such as</p>
                        <ul>
                            <li>Hosting services.</li>
                            <li>Email marketing platforms.</li>
                            <li>Analytics providers.</li>
                        </ul>
                        <p>All third parties are bound by confidentiality and data protection obligations.</p>
                    </div>
                    <div>
                        <h2>5. Data Security</h2>
                        <p>
                            We take appropriate security measures to protect your personal data from unauthorized access, disclosure, or destruction. However, no online system is 100% secure, so we encourage safe browsing practices.
                        </p>
                    </div>
                    <div>
                        <h2>6. Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul>
                            <li>Access or update your personal data.</li>
                            <li>Request deletion of your data.</li>
                            <li>Withdraw consent from marketing communications.</li>
                            <li>File a complaint with a data protection authority if you believe your rights are violated.</li>
                        </ul>
                        <p>To exercise your rights, contact us directly.</p>
                    </div>
                    <div>
                        <h2>7. Third-Party Links</h2>
                        <p>Our website may include links to third-party websites or tools. We are not responsible for the privacy practices of those sites. We encourage you to review their policies before sharing any personal information.</p>
                    </div>
                    <div>
                        <h2>8. Children’s Privacy</h2>
                        <p>Our services are not intended for users under the age of 13. We do not knowingly collect personal information from children.</p>
                    </div>
                    <div>
                        <h2>9. Updates to This Policy</h2>
                        <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>
                    </div>
                    <div>
                        <h2>10. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, feel free to reach out:</p>
                        <p> Email: info@arizglobal.com</p>
                    </div>
                    
                </div>
            </div>
    </article>)
}
export default Privacy