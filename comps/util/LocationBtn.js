import { BiMap } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";

const LocationBtn=(props)=>{

    return(
        <div className={props.borderbg+' hover:'+ props.borderbghover+ '  search-loc hover:cursor-pointer hover:shadow boder-p2 rounded-full'}> 
        <div className={'border-2 '+props.innerborder+' hover:'+props.innerborderhover+' '+props.innerbg+' hover:'+props.innerbghover+ " flex space-x-2 justify-between md:space-x-20  rounded-full items-center  md:border-4 p-2 md:p-2 text-white "}>
                <div className={props.color+ " nav-search-l flex space-x-2 items-center"}>
                     <span class="text-xl md:text-2xl"> <BiMap/></span>
                    <span class=" font-medium md:text-lg"> CHOOSE YOUR LOCATION</span>
                </div> 
                 <div className={props.color+ " nav-search-r"}>
                     <span className="text-xl md:text-2xl">  <FaAngleDown/></span>
                </div>   
    
        </div>
    </div>

    )

    
}

export default LocationBtn;