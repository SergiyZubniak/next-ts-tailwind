import React from "react";
import Image from "next/image";





const Masthead: React.FC = () => {
return (
    <div>
    
    <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
            <source src='/abstract.mp4' type='video/mp4'/>
            </video>

    <div className="min-h-screen flex flex-col items-center justify-center">
         
   
            
            <div className={`flex-grow-0 pt-10 transition-opacity duration-1000`}>
                <Image src='/vercel.svg' width={128 } height={114 } alt='logo' />
            </div>

        <div className="p-12 font-bold z-10 text-white 
        drop-shadow-[0_5px_3px_rgb(0,0,0,0.4)] text-center  
            flex-1 flex items-center justify-center flex-col">
            <h1 className="mb-6 text-4xl xl:text-5xl">Sergiy</h1>
            <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
                <span>App Development,</span><span>done right.</span>
            </h2>
        </div>
        <div className="flex-grow-0 pb-20 md:pb-10 transition-all duration-1000">
            <Image src='/arrow-down.svg' alt="arrow-down" width={188/3} height={105/3} />
        </div>
              
    </div>

    </div>
)

}

export default Masthead