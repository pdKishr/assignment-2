import Image from 'next/image';
interface QuickSendProps {
    profilePic:any ;
    name: string;
    latestImage : string,
    minutes : string
    msgseen : boolean
}

import doublecheck from '../public/assets/images/double-check.png'

export default ({ profilePic, name , latestImage , minutes,msgseen}: QuickSendProps)=>{
    return <>
       <div className="flex  items-center justify-center w-full py-3.5 gap-4">
            <div className="">
               <Image  className="size-10 m-1.5 rounded-full" src={profilePic} alt={' image'} />
            </div>
            <div className="flex justify-between items-center  w-full">
                <div>
                    <p className={`text-lg font-semibold`}>{name}</p>
                    <div className="flex items-center gap-1">
                    {!msgseen &&<Image  className="size-4" src={doublecheck} alt={' image'} />}
                    <p className={`text-xs ${msgseen?`font-semibold`:`text-gray-500`}`}>{latestImage}</p>
                    </div>
                    
                </div>
                <div>
                    <p className={`text-xs ${msgseen?`font-semibold`:`text-gray-500`}`}>{minutes}</p>
                </div>
                
            </div>
       </div>
       <div className="border-b-2 border-gray-100"></div>
    </>
}