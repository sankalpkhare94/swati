import './style.css'
import { BsJustify} from 'react-icons/bs';


const MenuItems = ()=>{
    const menuItems = ["COLOURED LENS","MAKE-UP","SWATI.","BUNDELES & SETS","REVIEWS"]
    return (
        <div class="menuItems">
            {menuItems.map(x=>{
                return <span>{x}</span>
            })}
        </div>
    )
}

function Menu() {
  return (
    <div className="menu">
         <BsJustify style={{width : "1.875em",height : "1.875em"}}/>
         <MenuItems/>

    </div>
  );
}

export default Menu;
