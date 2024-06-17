
'use client';
import Image from 'next/image';
import SocialMedia from "../static/SocialMedia";
import Typing from "../static/Typing";


function Person() {

    return <div id="Person" className="flex justify-center items-center h-screen text-white bg-gradient-to-r from-gradientLeft to-gradientRight">
        <div className="flex flex-row items-center w-full flex-1">
            <div className="flex flex-col z-20 pointer-events-none text-white w-3/5">
                <p className="text-[5vw] font-bold text-lightcyan w-full"></p>
                <p className="text=[3vw" >Hello, my name is Julian, a developer specializing in web/mobile apllications using 
                    <Typing/>
                </p>
                <div className="flex mt-6 justify-start w-[17vw]"> <SocialMedia size={100}  /></div>
            </div>
            <div className="w-2/5 object-contain self-center animate-scalepulse">
            <Image src="/icons/youtube.svg" alt="Icon" width={500} height={500} />
            </div> 

        </div>
    </div>
    
}

export default Person;


