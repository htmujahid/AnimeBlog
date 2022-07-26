import Heading1 from "../../widgets/Headings/Heading1";

import Rectangle4 from '../../assets/img/Rectangle4.png';
import Rectangle5 from '../../assets/img/Rectangle5.png';
import Rectangle6 from '../../assets/img/Rectangle6.png';

import TrendingCard from "../TrendingCard/TrendingCard";
import { useState } from "react";

export default function NowTrending(){
    const [trending, setTrending] = useState([
        {'image': Rectangle4, title: 'Attack On Titans', category: 'Fantasy', time: '1 Month Ago', read: '12 Min Read', description: 'lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.'},
        {'image': Rectangle5, title: 'Dr. Stone', category: 'History', time: '1 Month Ago', read: '12 Min Read', description: 'lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.'},
        {'image': Rectangle6, title: 'Second Chance', category: 'Darama', time: '1 Month Ago', read: '12 Min Read', description: 'lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.'}
    ]);
    return (
        <div className="mt-16">
            <div className="container mx-auto">
                <div>
                    <Heading1 title="Now Trending" />
                </div>
                <div className="flex justify-between mt-5">
                    {trending.map((trend)=>{
                        return(
                            <TrendingCard title={trend.title} image={trend.image} category={trend.category} time={trend.time} read={trend.read} description={trend.description} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}