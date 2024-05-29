
'use client';
import Image from 'next/image';
import SocialMedia from "../static/SocialMedia";
import Typing from "../static/Typing";
import monkeyImage from './public/transitions/view-funny-monkey-human-clothing.jpg';



function Person() {

    return <div id="Person" className="flex justify-center items-center h-screen text-white bg-gradient-to-r from-gradientLeft to-gradientRight">
        <div className="flex flex-row items-center w-full flex-1">
            <div className="flex flex-col z-20 pointer-events-none text-white w-3/5">
                <p className="text-[5vw] font-bold text-lightcyan w-full">Hello, my name is Julian</p>
                <p className="text=[3vw" >I am a developer specialzing in technologies such as 
                    <Typing/>
                </p>
                <div className="flex mt-6 justify-start w-[17vw]"> <SocialMedia size={200}  /></div>
            </div>
            <div className="w-2/5 object-contain self-center animate-scalepulse">
            <Image
                src='/public/transitions/view-funny-monkey-human-clothing.jpg' 
                alt="Portrait"
                width={500}
                height={500}
            />
            </div> 

        </div>
    </div>
    
}

export default Person;


