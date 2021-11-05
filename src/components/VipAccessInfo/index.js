import './style.css'
import InfoPic from '../../assets/pic2.png'
import {MdOutlineCheckCircle} from 'react-icons/md';

const VipAccessInfoList = ()=>{
  const data = [{maintext:"Exclusive VIP access",subtext:"Shop your favorite before they sell out"},{maintext:"Upto 50% off",subtext:"Enjoy exclusive offer before anyone else"}]
  return( <>
    {data.map(x=>{
    return (
      <div class="infolist">
      <MdOutlineCheckCircle style={{"height": "50px", "width": "50px","color":"palevioletred"}}/> 
      <div>
        <p>{x.maintext}</p>
        <p>{x.subtext}</p>
      </div>
      </div>
   ) 
  })}

      </>)
}

function VipAccessInfo() {
  return (
    <div className="vipaccessinfo">
        <div>
          <img src={InfoPic} className="infopic" alt="Vip Access Info"/>
        </div>
        <div className="infodetails">
            <span>GET VIP ACCESS</span>
            <span>SINGLES DAY</span>
            <span>Our fav days of the year is coming up and you don't want </span> 
            <span>to miss this one. Sign Up and get : </span>
            <VipAccessInfoList/>
        </div>


    </div>
  );
}

export default VipAccessInfo;
