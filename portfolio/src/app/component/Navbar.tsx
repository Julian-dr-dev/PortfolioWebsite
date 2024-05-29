'use client'

import UseScroll from "../hooks/useScroll";
import MenuButton from "../navigation/MenuButton";

function Navbar() {

    const isAtTop = UseScroll();

    return <div className={`mobile:hidden sticky -mt-14 top-0 z-50 ${isAtTop?'opacity-100':'opacity-0 hover:opacity-100 transition-opacity duration-500'} flex justify-end items-center h-14 w-full bg-gradient-to-r from-transparent to-black text-white`} >
        <div className="flex justify-around text-2xl w-1/2 items-center">
            <MenuButton title={"About"} />
            <MenuButton  title={"Projects"} />
            <MenuButton  title={"Services"} />
           
        </div>
    </div>
}

export default Navbar;