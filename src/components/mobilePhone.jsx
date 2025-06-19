import { useEffect, useRef, useState } from "react";
import { countriesWithCodeNumber } from "../data/countries";

function MobileInput({register,value,returnedCountry,country_id,isOpenMenu=true,fromChatPopup=false}) {
    const [ countries, setCountries] = useState(countriesWithCodeNumber)
    const [ selectedCountry, setSelectedCountry,] = useState({})
    const [number ,setNumber ] = useState()
    const [isOpen ,setIsOpen ] = useState(false)
    useEffect(()=>{
        setSelectedCountry(countriesWithCodeNumber.find(e => e.code == "AE"))
        returnedCountry(countriesWithCodeNumber.find(e => e.code == "AE"))
    },[])
    useEffect(()=>{setNumber(value)},[value])

    const handleSearch = (e) => {
        if(e.target.value.length >2 ){
            const searchQuery = e.target.value.toLowerCase();
            const filtered = countriesWithCodeNumber.filter((country) =>
                country.name.toLowerCase().includes(searchQuery)
            );
            setCountries(filtered);
        }else{
            setCountries(countriesWithCodeNumber)
        }
       
    };
    const targetRef = useRef(null)
    useEffect(() => {
        const handleClickOutside = (event) => {
        if (targetRef.current && !targetRef.current.contains(event.target)) {
            setIsOpen(false);
        }
        };
        if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
        } else {
        document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);
    return ( <div ref={targetRef} className={`${"mobile-input"} items-center`}>
        <div  style={{minWidth:"50px"}} className={`flex items-center min-w-8 sm:min-w-12 ${isOpenMenu && "cursor-pointer"}`} onClick={()=>{
            if(isOpenMenu)setIsOpen(!isOpen)}}>
            
            {/* {loading ? <div className="loader-dark0"></div> : */}
            <img className="w-5 h-4 object-cotaint  rounded" alt={ "country_name" in selectedCountry ? selectedCountry.country_name: "flag"} src={"code" in selectedCountry ?`https://flagcdn.com/w320/${selectedCountry.code.toLowerCase()}.png` :""} />
            {/* } */}
            {isOpenMenu && <div className="flex cursor-pointer items-center">
                {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clipPath="url(#clip0_17_4651)">
                    <path d="M12 8L6 14L7.41 15.41L12 10.83L16.59 15.41L18 14L12 8Z" fill="#323232"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_17_4651">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clipPath="url(#clip0_17_4652)">
                        <path d="M16.59 8.58997L12 13.17L7.41 8.58997L6 9.99997L12 16L18 9.99997L16.59 8.58997Z" fill="#323232"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_17_4652">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>}
                
            </div>}
            
        </div>
        <div className="w-fit whitespace-nowrap">
            ( { "dial_code" in selectedCountry && selectedCountry.dial_code} )
        </div>
        <div className="w-full">
            <input  disabled={!isOpenMenu} placeholder="XX XX XX" {...register} value={number || ""} onChange={(e)=>{
                // register.onChange(e)
                setNumber(e.target.value)
                }} type="number" />
        </div>
        <ul className={`${isOpen?"block":"hidden"} ${fromChatPopup?"menu-countries-popup":"menu-countries"} `}>
            <li className="py-2">
                <input onChange={handleSearch} placeholder={"Search"} isDark={true}/>
            </li>
            {countries.length>0 ? countries.map((ele)=>{
                const code = ele.code.toLowerCase()
                return <li onClick={()=>{setSelectedCountry(ele)
                    returnedCountry(ele)
                    setIsOpen(false)
                }} className="flex mb-2 gap-2 cursor-pointer hover:text-stone-700 details-country" key={`Countries_${ele.name}`}>
                <img className="w-5 h-4  rounded" alt={ele.name} src={`https://flagcdn.com/w320/${code}.png`} />
                <div >
                    {ele.name}
                </div>
                <div>{`(${ele.dial_code})`}</div>
            </li>
            }):<div className="flex justify-center py-4">
                <p>No Country founded</p>
                </div>}
        </ul>
    </div> );
}

export default MobileInput;