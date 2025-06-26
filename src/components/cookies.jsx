import { useEffect, useState } from "react";

const CookieConsent = ()=>{
    const [showConsent, setShowConsent] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie_consent');
        if (!consent) {
        setShowConsent(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie_consent', 'true');
        window.gtag('config', 'G-EHFT2Z5RX7');
        setShowConsent(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookie_consent', 'false');
        setShowConsent(false);
    };

    if (!showConsent) return null;

    return( <div className="cookies gap-5 py-10 sm:p-10">
       <div className="flex flex-col items-center">
         <p>  This website uses cookies to ensure you get the best experience on our site, to analyze traffic, and to serve personalized content. Click "Accept" to allow all cookies or "Decline" to continue with essential ones only.</p>
         <p> Learn more in our <a href="/policy" target="_blank">Privacy Policy</a>.</p>
       </div>
       <div>
            <button onClick={handleAccept} style={{ marginRight: '10px' }}>Accept</button>
            <button className="outline-btn" onClick={handleDecline}>Decline</button>
       </div>

    </div>)
}
export default CookieConsent