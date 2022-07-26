import Heading1 from "../../widgets/Headings/Heading1"
import Group0 from "../../assets/img/Group0.png";
import Group1 from "../../assets/img/Group1.png";
import Group2 from "../../assets/img/Group2.png";

import ShortReadCard from "../ShortReadCard/ShortReadCard";

import { useState } from "react";

export default function ShortRead(){
    const [read, setRead] = useState([
        {image: Group0, title: 'Akame Ga Kill: Season finale', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
        {image: Group1, title: 'Naruto Uzumaki: Hidden Village', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
        {image: Group2, title: 'Love juice Season Priemere', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    ])
    return (
        <div className="container mx-auto">
            <div className="mt-16">
                <div>
                    <Heading1 title="Short Reads" />
                </div>
                <div className="flex justify-between py-4">
                    {read.map((r)=>{
                        return <ShortReadCard image={r.image} title={r.title} description={r.description}/>
                    })}
                </div>
            </div>
        </div>
    )
}