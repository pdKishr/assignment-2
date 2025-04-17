interface props{
    icon : any,
    title: string,
    value: string
}

export default ({icon,title,value}:props)=>{
    return(
        <>
        <div className="flex  items-center justify-center w-full py-3.5 gap-4">
            <div className="p-2.5 rounded-lg bg-gray-200">
                {icon({})}
            </div>
            <div className="flex justify-between items-center  w-full">
                    <p className={`text-lg font-semibold`}>
                        {title} 
                        {title==="Net Sale" ? 
                             <span className="text-green-500">
                              #𝟮𝟱𝟴𝟲
                             </span> :
                             <></>
                        }
                    </p>
                    <p className="text-sm  text-gray-500">{value}</p>
            </div>
       </div>
         <div className="border-b-2 border-gray-100"></div>
        </>
    )
}