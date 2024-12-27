import Image from "next/image"
import CountUp from "react-countup"

const Badge = ({containerStyles, icon, endCountNum, endCountText, badgeText}) => {
  return (
    <div className={`  badge `}>
       <div className="bg-red-500 p-[9px] rounded-full">
         <Image src={icon} width={25} height={25} alt={`${badgeText} icon`}/>
       </div>
       <div className="flex flex-col gap-0 ">
       <span className="text-bold text-3xl">
       <CountUp start={0} end={endCountNum} duration={5} />
        </span>
        <span className="whitespace-nowrap">
            {badgeText}
        </span>
       </div>
        
    </div>
  )
}

export default Badge