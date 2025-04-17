
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { useEffect, useRef } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

const colors = [
    "#010a03",
    "#031c0a",
    "#093b16",
    "#135c27",
    "#1e7d37",
    "#1e7d37",
    "#1e7d37",
    "#2d8c46",
    "#2d8c46",
    "#46ab61",
    "#46ab61",
    "#46ab61",
    "#46ab61",
    "#7db88d",
    "#79b389",
    "#7fb88e",
    "#a4bfac",
    "#adc4b3",
    "#c1d9c7",
    "#d5e3d9",
    "#dfe6e0",
    "#e4f0e7",
    "#edf2ef"
]
  

export default ()=>{
    const chartRef = useRef<ChartJS | null>(null);

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

    

    const arr = [];
    for(let i=0;i<23;i++) arr.push(1);

    const labels=[];
    labels.push('High')
    for(let i=1;i<12;i++) labels.push('');
    labels.push('Low')
    
    const data = {
        labels: labels ,
        datasets: [
          {
            data: arr,
            backgroundColor:  colors,
            borderWidth: 0,
            circumference: 155,
            rotation: 285, // makes it start from bottom (semi-circle)
            cutout: '70%',
            spacing: 20 ,
            borderRadius: 3,
         
          },
        ],
      };

      const options = {
        responsive : true ,
        maintainAspectRatio: false,
        plugins: {
          legend: { 
            display : false
          },
          tooltip: {
            enabled : false
          },
          datalabels: {
             display: false
          }
        },
      };
    

      return (
        <div className="relative justify-center ">
         
          <Doughnut data={data} options={options} />
        
              <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-30%] text-center">
                                <div className="text-4xl font-bold mt-10">{"550"}</div>
                                <div className="text-xs text-gray-400 mb-3">Perfromace This month</div>
                                <div className="text-xs flex  text-gray-400 justify-evenly">
                                    <div className="gap-2 justify-center items-center flex  ">
                                        <div className="size-2 bg-[#010a03] rounded-full"></div>
                                        <div>High</div>
                                    </div>
                                    <div className="gap-2 justify-center items-center flex">
                                        <div className="size-2 bg-[#46ab61]  rounded-full"></div>
                                        <div>Low</div>
                                    </div>
                                </div>
              </div>
          </div>
      );
      
}