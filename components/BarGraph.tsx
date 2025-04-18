'use client'
import {
    Chart as ChartJS,
    CategoryScale ,
    LinearScale ,
    BarElement ,
    Title ,
    Tooltip ,
    Legend, 
    
} from 'chart.js';
import {Bar} from 'react-chartjs-2' ;
import { useEffect, useRef, useState } from 'react';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import HorizontalDots from '../public/assets/Svgs/HorizontalDots';
import CarretDown from '../public/assets/Svgs/CarretDown';

ChartJS.register(CategoryScale , LinearScale , BarElement ,Title , Tooltip,Legend,ChartDataLabels);

function createDiagonalLinePattern(color = '#34b7f1', spacing = 5) {

    const canvas = document.createElement('canvas');
    const size = spacing * 4;
    canvas.width = size;
    canvas.height = size;
  
    const ctx = canvas.getContext('2d');
    if (!ctx) return '#FFFFFF'; // Fallback to a default color if context is unavailable
  
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
  
    ctx.beginPath();
    // draw diagonal lines from bottom-left to top-right
    for (let i = -size; i < size * 2; i += spacing) {
      ctx.moveTo(i, size);
      ctx.lineTo(i + size, 0);
    }
  
    ctx.stroke();
  
    return ctx.createPattern(canvas, 'repeat') || '#FFFFFF'; // Fallback to a default color
}

export default function MyStackedBar(){

  const [activeIndex,setActiveIndex] = useState(1);
  const [pattern, setPattern] = useState<string | CanvasPattern>('#FFFFFF');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pattern = createDiagonalLinePattern('#139E49');
      setPattern(pattern);
    }
  }, []);

    const chartRef = useRef<ChartJS | null>(null);

    const data = {
        labels : ['Jan','Mar','May','Jul','Sep','Nov'] ,
        datasets : [
            {
                label : "data-white",
                data : [20,40,50,60,55,40],
                backgroundColor : [pattern],
                borderRadius:{
                    topLeft: 10,
                    topRight: 10,
                    bottomLeft: 10,
                    bottomRight: 10,
                },       
                borderSkipped: false   ,  
                barThickness: 40,
            } ,
            {
                label : "data-green",
                data : [20,30,30,25,30,20],
                backgroundColor : '#139E49',
                borderRadius:{
                    topLeft: 10,
                    topRight: 10,
                    bottomLeft: 10,
                    bottomRight: 10,
                },     
                borderSkipped: false,        
                barThickness: 40,
            },
            {
                label : "div",
                data : [-1,-1,-1,-1,-1,-1],
                customLabels : ["$20.00K","$40.00K","$45.00K","$50.00K","$50.00K","$30.00K"], 
                backgroundColor : '#139E49',
                borderRadius: 20 ,   
                borderSkipped: false,        
                borderColor : 'white',
                borderWidth : 2,
                barThickness: 60
            }
       ],
    };

    data.datasets[2].data[activeIndex]=15 ;
    
    const option = {
        responsive : true ,
        plugins : {
            legend: {
                display: false, // 👈 disables the legend
              },
              datalabels: {

                color: '#fff',
                anchor: 'center' as 'center',
                align: 'center' as 'center',
                formatter: (value:any, context:any) => {
                  return context.dataset.customLabels?.[context.dataIndex] || value;
                },
                display: (context:any) => {
                  return context.datasetIndex === 2 && context.dataIndex === activeIndex; // show only for this bar
                },
              },
        },
        scales :{
            x: {
                stacked : true,
                grid: {
                    display: false, //  removes vertical grid lines
                  },
            } ,
            y:{
                stacked : true,
                min : 0,
                max : 100,
                ticks: {
                    stepSize: 20,  // set spacing between ticks
                  },
                  grid: {
                    display: true, 
                    drawOnChartArea: true
                  },
                  beginAtZero: false
                 
            } ,
        } ,
    };

    
      useEffect(() => {
        const handleResize = () => {
          if (chartRef.current) {
            chartRef.current.resize(); // ✅ Resize chart on container/tab resize
          }
        };
    
        window.addEventListener("resize", handleResize);
    
        // Clean up on unmount
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

      
      const [isOpen,setIsOpen] = useState(false);

      const months = [
        { index: 0, month: 'Jan' },
        { index: 1, month: 'Mar' },
        { index: 2, month: 'May' },
        { index: 3, month: 'Jul' },
        { index: 4, month: 'Sep' },
        { index: 5, month: 'Nov' },
      ];

  const handleChange = (indexNum:number)=>{
       setActiveIndex(indexNum);
       setIsOpen(!isOpen);
  }




     return<div className="">
        
         <div className='pb-5 flex justify-between items-center'>
                                  <div className="text-xl font-semibold">Order statistics</div>
                                  <div className='flex gap-2'>
                                      <div className="relative inline-block"
                                          onMouseEnter={() => setIsOpen(true)}
                                          onMouseLeave={() => setIsOpen(false)} >
                                          <button className="text-sm border rounded-full p-2 border-gray-300 text-gray-500 w-30 mb-0.5 flex justify-between">
                                            <div className="justify-center">
                                                  {activeIndex === 1? <>This month</>: <>{months[activeIndex].month}</>}
                                            </div>
                                           <div>
                                                  <CarretDown color={'gray'}/>
                                            </div>

                                            </button>
                                          <div className=" bg-gray-300 absolute">
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
                                        <div className="p-2 border rounded-full border-gray-300"><HorizontalDots/></div> 
                                      </div>
                                  </div>
                                </div>
                                <div>
                            <Bar ref={(instance) => { chartRef.current = instance || null; }}  data={data} options={option} />
                  </div> 
     </div>
}