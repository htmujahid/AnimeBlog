import { useState } from "react";

import BlogCard0 from "./BlogCard0";
import BlogCard3 from "./BlogCard3";

import Blog4 from "../../assets/img/Blog4.png";
import Blog5 from "../../assets/img/Blog5.png";
import Blog6 from "../../assets/img/Blog6.png";

export default function BlogCard(){
    const [blog3, setBlog3] = useState([
        {image: Blog4,title: 'Akame Ga Kill: Season finale', date: '21 March 2021'},
        {image: Blog5,title: 'Naruto Uzumaki: Hidden Village', date: '21 March 2021'},
        {image: Blog6,title: 'Love Juice Season Priemere', date: '21 March 2021'},
        {image: Blog6,title: 'Love Juice Season Priemere', date: '21 March 2021'},
        {image: Blog6,title: 'Love Juice Season Priemere', date: '21 March 2021'}
    ])

    return(
        <div className="grid grid-cols-3 mt-6 gap-16  ">
            <BlogCard0 />
            <div>
                <div className="border rounded-lg py-5 px-10 h-full">
                    <div>
                        <h1 className="text-lg mb-4">Manage Reads</h1>
                    </div>
                    <div className="grid gap-8">
                        {blog3.map((blog)=>{
                            return <BlogCard3 title={blog.title} image={blog.image} date={blog.date} />
                        })}

                    </div>
                </div>
            </div>
        </div>

    )
}