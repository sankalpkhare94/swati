import './style.css'
import { FaAngleDown , FaCartPlus , FaHeart } from 'react-icons/fa';
import FlagImg from '../../assets/flag.png'

const HeaderItems = ()=>{

    return (
        <div>
           
            <span>
            PERSONALIZE
            <FaAngleDown style={{"position": "relative", "top": "2px"}}/>
            </span>
            <span>
            <FaHeart style={{"position": "relative", "top": "2px" , "color" :"pink"}}/>
            1
            </span>
            <span>
            <FaCartPlus   style={{"position": "relative", "top": "2px"}} />
            1
            </span>
         
        </div>
    )
}

const CountryDropDown = ()=>{

    return (
        <div>
            <img src={FlagImg} alt=""/>
            <span>SVENSKA</span>
            <FaAngleDown/>
        </div>
    )
}

function Header() {
  return (
    <div className="header">
        <CountryDropDown/>
        <span>FREE DELIVERY ON ORDER ABOVE 2 PAIRS</span>
        <HeaderItems/>
    </div>
  );
}

export default Header;
