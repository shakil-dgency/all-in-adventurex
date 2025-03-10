

import { FiX } from "react-icons/fi";
import Image from 'next/image'
import SvglogoMain from './headerComps/SvglogoMain'
import SvglogoMobile from './headerComps/SvglogoMobile'
import SubMenu from './headerComps/SubMenu'
import LocationMenu from "./headerComps/LocationMenu";
import Link from "next/link"
import { useEffect, useRef, useState} from 'react';
import HeaderBtnRed from "./headerComps/HeaderBtnRed";
import LocationBtnH from "./util/LocationBtnH";



const Homenav=()=>{
    const ref = useRef();
    const [showMe, setShowMe] = useState(false);
    function toggle(){
      setShowMe(!showMe);
    }
    
    useEffect(() => {
        const checkIfClickedOutside = e => {
         
          if (showMe && ref.current && !ref.current.contains(e.target)) {
            setShowMe(false)
          }
        }
    
        document.addEventListener("mouseup", checkIfClickedOutside)
    
        return () => {
          
          document.removeEventListener("mouseup", checkIfClickedOutside)
        }
      }, [showMe]);
    return(
        <> 
        <div Id="locmenu" className="loc-menu-holder hidden">
        <LocationMenu/>
        </div>
        
        
        <header id="header" className="bg-coffee w-full z-50 fixed">
            <div className="max-w-7xl mx-auto relative md:px-4" ref={ref}>
                <div className="home-nav-bar flex justify-between items-center py-2 px-2 sm:p-1 lg:py-2 lg:px-0"> 
                    <div className="logo">
                        <Link href="/"> 
                            <a className="flex items-center">
                                <SvglogoMain></SvglogoMain>
                            </a>
                        </Link>
                    </div>
          
                 {/*============location search btn==========*/}
                    <LocationBtnH borderbg='bg-golden' borderbghover='bg-golden-alt' innerbg='bg-coffee-light' innerborder='border-black' innerbghover='bg-black' innerborderhover='black' color="white"/>
                 {/*============location search btn==========*/}
                    <div className="home-nav-menu flex items-center space-x-0 md:space-x-10 lg:space-x-14 justify-end "> 
                        
                         <div className="menu-item-btn search-loc  text-white text-lg hidden lg:block">
                           
                                 <HeaderBtnRed btntext='BOOK AN EVENT'btnbg='bg-transparent'/>
                            
                         </div>
                         <div className="menu-item-btn text-white text-lg hidden lg:block search-loc ">
                           <HeaderBtnRed btntext='BOOK GAMES' btnbg='bg-red-600'/>
                         </div>
                         <div className="menu-item hover:shadow-md hover:cursor-pointer relative" onClick={toggle}>
                            <div className="menu-icon-box p-2 bg-coffee-light"
                                 style={{
                                 display: !showMe?"block":"none"
                             }}> 
                                <span className="block w-7 md:w-8 h-1 bg-golden"></span>
                                <span className="block my-1 w-7 md:w-8 h-1 bg-golden"></span>
                                <span className="block my-1 w-7 md:w-8 h-1 bg-golden"></span>
                                <span className="block w-7 md:w-8 h-1 bg-golden"></span>
                            </div>
                            <div className="menu-icon-box menu-close flex justify-center items-center p-1 px-1 md:px-1.5 bg-coffee-light"
                                    style={{
                                  display: showMe?"block":"none"
                                 }}> 
                           
                               <div className="text-gold text-3xl md:text-4xl"> 
                               <FiX/>

                               </div>
                            </div>
                            
                         </div>
                    </div>
                </div>
                        
                                <div className="submenu-holder absolute top-full right-0 z-40 w-full md:w-auto"> 
                                {showMe &&(
                                     <SubMenu></SubMenu>
                                     )}
                        </div>

                       
                
            </div>
        </header>
        </>
    )
}

export default Homenav;