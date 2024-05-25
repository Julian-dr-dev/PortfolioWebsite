

import About from "@/app/component/About";
import Navbar from "@/app/component/Navbar";
import Projects from "@/app/component/Projects";
import Services from "@/app/component/Services";
import Person from "@/app/component/Person";
import Bottom from "@/app/component/Bottom";

import './globals.css'




export default function Home() {
  return (
    <>
    <Navbar/>
    <Person/>
    <About/>
    <Projects/>
    <Services/> 
    <Bottom/>
    
    </>


    
  );
}
