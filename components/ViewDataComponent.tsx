interface props{
    icon : any ,
    title : string ,
    amount : string,
    bgcolor: string,
    subtitleicon : any,
    subtitle : string,
    subtitlecolor:string

}

export default ({icon,title,amount,bgcolor,subtitle,subtitlecolor,subtitleicon}:props)=>{
    return (
        <div className={`p-4  rounded-xl ${bgcolor} w-80 h-fit`}>
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-black rounded-xl w-fit">
                        {icon}
                    </div>
                    <div className="font-bold">{title}</div>
                </div>
                <div className="text-2xl xl:text-4xl font-bold py-1">
                    {amount}
                </div>
                <div className={`text-${subtitlecolor} flex items-center pt-5`}>
               <span> {subtitleicon({color:subtitlecolor})} </span>
               <span className="text-sm" style={{color:subtitlecolor}}> {subtitle+" "}Than last week </span>
               </div>
        </div>
    )
}