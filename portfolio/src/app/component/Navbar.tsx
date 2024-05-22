import MenuButon from "../navigation/MenuButton";

function Navbar() {
    return <div className="flex justify-center items-center h-14 w-full bg-black text-white">
        <MenuButon title={"About"}/>
        <MenuButon title={"Projects"}/>
        <MenuButon title={"Person"}/>


    </div>

}
export default Navbar;