import CarretDown from "@/public/assets/Svgs/CarretDown";
import Shortcut from "@/public/assets/Svgs/Shortcut";
import { useState } from "react";

export default ()=>{
     {/* The declarations below are used inside the Deals Order section */}
            const [isOpen,setIsOpen] = useState(false);
            const [activeIndex,setActiveIndex] = useState(1);
    
            const handleChange = (indexNum:number)=>{
              setActiveIndex(indexNum);
              setIsOpen(!isOpen);
            }
    
            const months = [
              { index: 0, month: 'Jan' },
              { index: 1, month: 'Mar' },
              { index: 2, month: 'May' },
              { index: 3, month: 'Jul' },
              { index: 4, month: 'Sep' },
              { index: 5, month: 'Nov' },
            ];
    return <>
      <div className=" p-3  justify-center items-center  bg-white rounded-xl">
                      <div className='pb-3 flex justify-between items-center'>
                           {/* Title */}
                            <div className="text-xl font-semibold">Deals Static</div>
                             <div className='flex gap-2'>
                                  <div className="relative inline-block "  onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                                        <button className="text-sm border rounded-full p-2 border-gray-300 text-gray-500 w-30 mb-0.5 flex justify-between">
                                            <div className="justify-center">
                                                  {activeIndex === 1? <>This month</>: <>{months[activeIndex].month}</>}
                                            </div>
                                            <div>
                                                  <CarretDown color={'gray'}/>
                                            </div>
                                        </button>
                                        <div className="absolute bg-gray-300 ">
                                            {
                                              isOpen && months && 
                                              <div className="flex flex-col w-25 ">
                                                {months.map(({index,month}) => 
                                                <button key={index} className={`p-2 px-4 hover:bg-gray-200 ${index !== 5 ?"border-white border-b" :" "} `} onClick={()=>handleChange(index)} >
                                                  {month}
                                                </button>
                                                )}
                                              </div>
                                            }
                                        </div>
                                    </div>
                                  <div>
                                    <div className="p-2 border rounded-full border-gray-300"><Shortcut/></div> 
                                  </div>
                              </div>
                      </div>      
        </div>
        <div className="justify-center items-center flex bg-green-100 h-full">
                          Contents
        </div>  
    </>
}