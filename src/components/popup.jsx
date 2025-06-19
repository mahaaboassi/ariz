import { useSelector, useDispatch } from 'react-redux';
import { changePopup } from '../features/popupSlice';
const Popup = ()=>{
    const status = useSelector((state) => state.popup);

    const dispatch = useDispatch();
    const closeIcon =  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <g clipPath="url(#clip0_17_1174)">
        <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#C3996B"/>
        </g>
        <defs>
        <clipPath id="clip0_17_1174">
        <rect width="24" height="24" fill="#19770D"/>
        </clipPath>
        </defs>
        </svg>
    const closePopup =()=> dispatch(changePopup({
            isOpen : false,
            component : <></>
        }))
    return(status.isOpen && <div className={`popup ${status.type == "error"? "err-msg" : ""}`}>
        <div style={{maxHeight: `${window.innerHeight -200}px`}} className='content-popup p-2 flex flex-col gap-2'>
            <div className='flex justify-end cursor-pointer ' onClick={closePopup}>{closeIcon}</div>
            <div className='py-5 w-full h-full '>
                {status.component}
            </div>
        </div>
       

    </div>)
}

export default Popup