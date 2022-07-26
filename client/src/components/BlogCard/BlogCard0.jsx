import Heading1 from "../../widgets/Headings/Heading1";
import Headings from "../../widgets/Headings/Headings";

import BlogCard1 from "../BlogCard/BlogCard1";
import BlogCard2 from "../BlogCard/BlogCard2";
import BlogCard3 from "../BlogCard/BlogCard3";

import Blog0 from "../../assets/img/Blog0.png";
import Blog1 from "../../assets/img/Blog1.png";
import Blog2 from "../../assets/img/Blog2.png";
import Blog3 from "../../assets/img/Blog3.png";


import RightArrow from "../../assets/icon/arrow-right0.svg"
import { useState } from "react";

export default function BlogCard0(){

    const [blog1, setBlog1] = useState(
        {title: "Attack On Titans" , image: Blog0, date: "1 Month Ago", description: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen."}
    )

    const [blog2, setBlog2] = useState([
        {title: "Akame Ga Kill: Season finale", image: Blog1, date:"21 March 2021"},
        {title: "Naruto Uzumaki: Hidden Village", image: Blog2, date:"21 March 2021"},
        {title: "Love juice Season Priemere", image: Blog3, date:"21 March 2021"},
        {title: "Love juice Season Priemere", image: Blog3, date:"21 March 2021"}
    ])
    return(
        <div className="col-span-2">
            <div className="grid grid-cols-2 gap-9 border rounded-lg p-5 h-full">
                <BlogCard1 title={blog1.title} image={blog1.image} date={blog1.date} description={blog1.description}/>
                <div className="grid gap-12">
                    {blog2.map((blog)=>{
                        return <BlogCard2 title={blog.title} image={blog.image} date={blog.date}/>
                    })}
                </div>
            </div>
        </div>
    )
}