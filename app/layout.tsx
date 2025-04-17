"use client"
import { usePathname } from "next/navigation";
import Overview from "../public/assets/Svgs/Overview";
import Profile from "../public/assets/Svgs/profile";
import './globals.css'
import Link from 'next/link'
import Clipboard from "../public/assets/Svgs/Clipboard"; // Ensure Clipboard is imported correctly
import Cube from "../public/assets/Svgs/Cube";
import Spray from "../public/assets/Svgs/Spray";
import Group from "../public/assets/Svgs/group";
import Calender from "../public/assets/Svgs/Calender";
import ShoppingBag from "../public/assets/Svgs/ShoppingBag";
import Clock from "../public/assets/Svgs/Clock";
import MessageComponent from "../components/MessageComponent";
import BryanR from '../public/assets/images/BryanR.png'
import CassieW from '../public/assets/images/CassieW.png'
import image2 from '../public/assets/images/photo1.avif'
import photo2 from '../public/assets/images/photo2.avif'
import NotificationComponent from "../components/NotificationComponent";
import ShoppingCart from "../public/assets/Svgs/ShoppingCart";
import NewMail from "../public/assets/Svgs/NewMail";



export default function RootLayout({children} : Readonly<{ children: React.ReactNode}>) {

  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        <div className=" flex pl-1 pt-4 pr-4 pb-1 bg-gray-100 w-full h-screen overflow-hidden">

        {/* unmovable parts */}
         <div className="flex w-1/3">

                {/* icons section */}
                <div className="bg-white w-1/5 min-h-screen flex flex-col gap-0 justify-start items-center rounded-l-lg  ">

                     {/*icons list */}

                      <div className="font-extrabold text-3xl flex font-serif border-r-3 pb-6 mt-4 border-gray-100 w-full justify-center items-center">
                        A  <div className="text-green-600 font-extrabold text-3xl">r</div>
                      </div>
                      
                      <div className={`border-r-3 w-full justify-center items-center p-1 flex ${pathname === '/' ? 'border-green-600' : 'border-gray-100'}`}>
                        <div className={pathname === '/' ? `bg-green-600 rounded-full p-4.5 w-fit` : `rounded-full p-4.5`}>
                          <Link href="/"><Overview color={pathname === '/' ? 'white' : "gray"} /></Link>
                        </div>
                      </div>

                      <div className={`border-r-3 w-full justify-center items-center p-1 flex ${pathname === '/profile' ? 'border-green-600' : 'border-gray-100'}`}>
                        <div className={pathname === '/profile' ? `bg-green-600 rounded-full p-4.5 w-fit` : `rounded-full p-4.5`}>
                          <Link href="/profile"><Profile color={pathname === '/profile' ? 'white' : "gray"} /></Link>
                        </div>
                      </div>

                      <div className={`border-r-3 w-full justify-center items-center p-1 flex ${pathname === '/cube' ? 'border-green-600' : 'border-gray-100'}`}>
                        <div className={pathname === '/cube' ? `bg-green-600 rounded-full p-4.5 w-fit` : `rounded-full p-4.5`}>
                          <Link href="/cube"><Cube color={pathname === '/cube' ? 'white' : "gray"} /></Link>
                        </div>
                      </div>

                      <div className={`border-r-3 w-full justify-center items-center p-1 flex ${pathname === '/paint' ? 'border-green-600' : 'border-gray-100'}`}>
                        <div className={pathname === '/paint' ? `bg-green-600 rounded-full p-4.5 w-fit` : `rounded-full p-4.5`}>
                          <Link href="/paint"><Spray color={pathname === '/paint' ? 'white' : "gray"} /></Link>
                        </div>
                      </div>

                      <div className={`border-r-3 w-full justify-center items-center p-1 flex ${pathname === '/docs' ? 'border-green-600' : 'border-gray-100'}`}>
                        <div className={pathname === '/docs' ? `bg-green-600 rounded-full p-4.5 w-fit` : `rounded-full p-4.5`}>
                          <Link href="/docs"><Clipboard color={pathname === '/docs' ? 'white' : "gray"} /></Link>
                        </div>
                      </div>

                      <div className={`border-r-3 w-full justify-center items-center p-1 flex ${pathname === '/clock' ? 'border-green-600' : 'border-gray-100'}`}>
                        <div className={pathname === '/clock' ? `bg-green-600 rounded-full p-4.5 w-fit` : `rounded-full p-4.5`}>
                          <Link href="/clock"><Clock color={pathname === '/clock' ? 'white' : "gray"} /></Link>
                        </div>
                      </div>

                      <div className={`border-r-3 w-full justify-center items-center p-1 flex ${pathname === '/group' ? 'border-green-600' : 'border-gray-100'}`}>
                        <div className={pathname === '/group' ? `bg-green-600 rounded-full p-4.5 w-fit` : `rounded-full p-4.5`}>
                          <Link href="/group"><Group color={pathname === '/group' ? 'white' : "gray"} /></Link>
                        </div>
                      </div>

                      <div className={`border-r-3 w-full justify-center items-center p-1 flex ${pathname === '/calender' ? 'border-green-600' : 'border-gray-100'}`}>
                        <div className={pathname === '/calender' ? `bg-green-600 rounded-full p-4.5 w-fit` : `rounded-full p-4.5`}>
                          <Link href="/calender"><Calender color={pathname === '/calender' ? 'white' : "gray"} /></Link>
                        </div>
                      </div>

                      <div className={`border-r-3 w-full justify-center items-center p-1 flex ${pathname === '/shoppingbag' ? 'border-green-600' : 'border-gray-100'}`}>
                        <div className={pathname === '/shoppingbag' ? `bg-green-600 rounded-full p-4.5 w-fit` : `rounded-full p-4.5`}>
                          <Link href="/shoppingbag"><ShoppingBag color={pathname === '/shoppingbag' ? 'white' : "gray"} /></Link>
                        </div>
                      </div>
                      {/* this is a empty div to bring completness for right border between icons section and message section */}
                      <div className="w-full h-full border-r-3 border-gray-100">
                      </div>
                </div>

                {/*message and notification section */}
                <div className="flex flex-col w-4/5 bg-white rounded-r-lg p-5 overflow-auto ">
                     
                    <div className="my-16">
                      <p className="text-gray-500 font-medium">Welcome to </p>
                      <p className="font-bold text-5xl">Arcedia</p>
                    </div> 


                    <div className="overflow-y-scroll scroll-hidden">
                          {/* Message section*/}

                          <div className="flex justify-between">
                              <p className="font-bold text-lg">Message</p>
                              <div className=" border-1 border-gray-300 rounded-full px-2 font-bold">+</div>
                          </div>
                              
                          <div className="py-4">             
                                  <MessageComponent profilePic={BryanR} name="Bryan R." latestImage="Hi Mick, I would like to.." minutes={"2 min"} msgseen={true}/>
                                  <MessageComponent profilePic={photo2} name="Mally J." latestImage="Hi Mick, I would like to.." minutes={"3 min"} msgseen={false}/>
                                  <MessageComponent profilePic={CassieW} name="Cassie W." latestImage="Hi Mick, I would like to.." minutes={"4 min"} msgseen={false}/>
                                  <MessageComponent profilePic={image2} name="Jose J." latestImage="Hi Mick, I would like to" minutes={"8 min"} msgseen={false}/>
                          
                          </div>

                         {/* Notification */}

                         <h1 className="font-bold mt-5">Notifications</h1>
                         <div className="py-2 ">             
                                 <NotificationComponent icon={ShoppingCart} title="Net Sale" value="~$264.00" />
                                 <NotificationComponent icon={NewMail} title="New email" value="3hrs" />
                                 <NotificationComponent icon={ShoppingCart} title="New Order" value="~$264.00" />
                          </div>
                    </div>
                </div>
          </div>
          
          {/* main content */}
        <div className="w-2/3 p-5">
                <main>{children}</main> 
        </div>
         
        </div>
       
      </body>
    </html>
  );
}
