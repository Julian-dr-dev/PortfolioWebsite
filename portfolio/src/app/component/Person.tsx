
'use client';
import SocialMedia from "../static/SocialMedia";
import Typing from "../static/Typing";

function Person() {

    return <div id="Person" className="flex justify-center items-center h-screen text-white bg-gradient-to-r from-gradientLeft to-gradientRight">
        <div className="flex flex-row items-center w-full flex-1">
            <div className="flex flex-col z-20 pointer-events-none text-white w-3/5">

            </div>
            <img className="w-2/5 object-contain self-center animate-scalepulse" src="view-funny-monkey-human-clothing.jpg" alt="Portrait"/>

        </div>
    </div>
    
}

export default Person;