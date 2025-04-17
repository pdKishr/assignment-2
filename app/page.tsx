'use client'

import NewMail from "../public/assets/Svgs/NewMail";
import Notification from "../public/assets/Svgs/Notification";
import Overview from "../public/assets/Svgs/Overview";
import profile from "../public/assets/images/image3.avif";
import Image from "next/image";
import ViewDataComponent from "../components/ViewDataComponent";
import ShoppingBag from "../public/assets/Svgs/ShoppingBag";
import CarretUp from "../public/assets/Svgs/CarretUp";
import Clock from "../public/assets/Svgs/Clock";
import group from "../public/assets/Svgs/group";
import CarretDown from "../public/assets/Svgs/CarretDown";
import BarGraphSection from "../components/BarGraph";
import DoughnutChart from "../components/DoughnutChart";
import HorizontalDots from "../public/assets/Svgs/HorizontalDots";
import Magnifier from "../public/assets/Svgs/Magnifier";
import DealsStatics from "@/components/DealsStatics";


export default function Home() {

 
  
  return (
    <div className="h-screen overflow-auto scroll-hidden ">
      {/* Header section*/}
                <div className="flex items-center mb-4">

                      {/* Page name */}
                      <div className="flex items-center  gap-2 justify-start w-1/3">
                        <Overview color={"#139E49"} />
                        <span className="font-bold text-xl "> Overview </span>
                      </div>

                      {/* Search bar */}
                      <div className="w-1/3  border border-gray-300 rounded-full px-4 py-2 flex items-center justify-start gap-2">
                         <div><Magnifier/></div>
                        <input
                          type="text"
                          placeholder="Search here"
                          className=" w-4/5 outline-none p-1"
                        />    
                      </div>

                      {/* Icons */}
                      <div className="w-1/3 flex gap-2 justify-end">
                        <div className="p-4 border rounded-full border-gray-300"><NewMail color={"gray"}/></div> 
                        <div className="p-4 border rounded-full border-gray-300"><Notification/></div> 
                        <Image  className="size-13 rounded-full" src={profile} alt={'Byran R. image'} />
                      </div>

                </div>

      {/*Data Analytics Section - 1*/}

                <div className="ml-5 my-5 flex justify-evenly gap-5">
                      
                              <ViewDataComponent icon={ShoppingBag({ color: "white" })} title={"Total order"} amount={"$84.00K"} bgcolor={"bg-[#e8eb34]"} subtitleicon={CarretUp} subtitle={"17.33"} subtitlecolor={"black"} />
                              <ViewDataComponent icon={Clock({color:"white"})} title="Total income" amount={"$59.00K"} bgcolor={"bg-white"} subtitleicon={CarretUp}  subtitle="17.33" subtitlecolor={"#139E49"} />
                              <ViewDataComponent icon={group({color:"white"})} title="Total customers" amount={"12.00K"} bgcolor={"bg-white"} subtitleicon={CarretDown} subtitle="17.33" subtitlecolor={"red"}/>
                          
                </div>

        
      {/*Data Analytics section - 2 */}
             
               <div className="ml-5 flex justify-evenly gap-5 ">

                  {/* Order Statistics section*/}
                  <div className="p-5 bg-white rounded-xl w-3/5 ">
                          <BarGraphSection/>  
                  </div>

                  
                  {/*Customer Satisfication Section */}

                  <div className=" p-5 w-2/5  justify-center items-center  bg-white rounded-xl h-90">
                      <div className='pb-4 flex justify-between items-center'>
                            <div className="text-xl font-semibold">Customer Satisfaction</div>
                            <div className='flex'>
                            <div className="p-2 border rounded-full border-gray-300"><HorizontalDots/></div>   
                            </div>
                      </div>
                      
                      <div className="mt-5 mb-10 bg-[#e0f9e6] p-3 rounded-full text-sm justify-center items-center flex">
                          <div className="text-gray-500 font-medium">
                            Top <span className="text-green-500 font-bold">Performance</span> of this month
                          </div>
                      </div>
                      <DoughnutChart/>
                  </div>

                </div>

      {/* Deals Stratic section  */}
                <div className="h-100 ml-5 my-5 rounded-xl bg-white ">
                    <DealsStatics />
                </div>



    </div>
  );
}
