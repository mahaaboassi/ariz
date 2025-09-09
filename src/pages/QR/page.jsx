import React, { useState, useEffect } from "react";
import QRCode from "qrcode";
import Lines from "../../components/lines";
import HeadingForDynamicPages from "../../components/headingForDynamicPages";

// for validation
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    link: Yup.string()
        .url('Invalid URL format') 
        .required('URL is required'),

  });
function QR() {
    const { register, handleSubmit, formState: { errors } } = useForm(
        {resolver: yupResolver(validationSchema), 
            mode: 'onChange'   }
    );
    const [qrCode, setQrCode] = useState("");
    const [ viewDownload, setViewDownload ] = useState(false)
    // Your HTTPS link
    // const link = `${window.location.protocol}//${window.location.host}/menu`; // Replace with your link

    const generateQRCode = async (link) => {
      try {
        const qr = await QRCode.toDataURL(link,{
            width: 1000, // High resolution
            scale: 10,
            color: {
                dark: "#000000",
                light: "#FFFFFF",
            },
          });
        setQrCode(qr);
        setViewDownload(true)
      } catch (error) {
        console.error("Error generating QR code:", error);
      }
    };
    const onSubmit = async(value)=>{
        generateQRCode(value.link)

    }
  return (
    <div>
        <Lines children={<div className="pb-4 mt-32 flex flex-col gap-10 px-4 sm:px-10">
                <HeadingForDynamicPages basicTitle={"Create QR Code"}  firstTitle={"Home"} link={"/"} secondTitle={"QR"}  />
            </div>} />
            <div className="flex flex-col gap-5 px-4 sm:px-10 mb-16 md:w-3/4 m-auto ">
                 <div  className="container flex justify-center items-center  p-4">
                    <div className="w-full">
                        {/* <div className="flex justify-center "><img className="img-move w-52 md:w-80" alt="logo" src={logo} /></div> */}
                        <form onSubmit={handleSubmit(onSubmit)}  className=" flex w-full flex-col items-center justify-center gap-4 pt-4">
                            <div className="w-full">
                                <input className="w-full" {...register("link")} placeholder="Link" />
                                {errors.link && <p className="p-0.5 text-error">{errors.link.message}</p>}
                            </div>
                            <button onClick={generateQRCode} >Create </button>
                        </form>
                        
                        <div className="flex justify-center mt-3 ">
                        {qrCode && <img  src={qrCode} alt="QR Code" className="w-60 md:w-80 rounded"  />}
                        {/* <img  src={qr_img} alt="QR Code" className="w-60 md:w-80"  /> */}
                        </div>
                        {viewDownload && <a className="flex justify-center py-2 tex-white" href={qrCode} download="QR-Code.png">
                            Download QR Code
                        </a>}

                    </div>
                    
                </div>
            </div>
    </div>

  );
}

export default QR;