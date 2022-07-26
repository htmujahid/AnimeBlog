import { useState } from 'react'
import Rectangle0 from '../../assets/img/Rectangle0.png'
import Rectangle1 from '../../assets/img/Rectangle1.png'
import Rectangle2 from '../../assets/img/Rectangle2.png'
import Rectangle3 from '../../assets/img/Rectangle3.png'
import TrendyCard from '../TrendyCard/TrendyCard'
import Heading1 from '../../widgets/Headings/Heading1'

export default function NewTrendy(){
    const [trendy, setTrendy] = useState([
        {image: Rectangle0},
        {title: 'Attack On Titans', image: Rectangle1, category: 'Fantasy', time: '1 Month Ago', read: '12 Min Read', description: 'The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.' },
        {title: 'Attack On Titans', image: Rectangle2, category: 'Fantasy', time: '1 Month Ago', read: '12 Min Read', description: 'The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.' },
        {image: Rectangle3}
    ])
    return (
        <div className="container mx-auto mt-16">
            <div>
                <Heading1 title="New & Trendy" />
            </div>
            <div className="mt-5">
                <div className="grid grid-cols-2">
                    {
                        trendy.map((trend)=>{
                            return(
                                <div>
                                    <TrendyCard image={trend.image} title={trend.title} category={trend.category} time={trend.time} read={trend.read} description={trend.description}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}