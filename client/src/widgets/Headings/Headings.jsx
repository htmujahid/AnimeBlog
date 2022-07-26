import { useState } from "react"

export default function Headings(props){
    const [titles, setTitles] = useState(['comedy', 'fantasy', 'drama', 'action', 'history', 'military']);
    return(
        <div className="border-b">
            <div className="flex gap-10">
            {titles.map((title)=>{
                return <h1 className="text-xl font-semibold">{title}</h1>
            })}
            </div>
            <div className="border-b-2 border-black w-14 mt-1"></div>
        </div>
    )
}