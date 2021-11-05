import './style.css'



function Banner() {
    const VipAccessTagList = [1,2,3,4,5,6,7,8].map(x=>{
        return <p> VIP ACCESS</p>
    })
  return (
    <div className="banner">
        {VipAccessTagList}
    </div>
  );
}

export default Banner;
