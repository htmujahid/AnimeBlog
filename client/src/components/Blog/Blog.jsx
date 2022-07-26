import Heading1 from "../../widgets/Headings/Heading1";
import Headings from "../../widgets/Headings/Headings";

import BlogCard0 from "../BlogCard/BlogCard0";
import BlogCard1 from "../BlogCard/BlogCard1";
import BlogCard2 from "../BlogCard/BlogCard2";
import BlogCard3 from "../BlogCard/BlogCard3";

import Blog0 from "../../assets/img/Blog0.png";
import Blog1 from "../../assets/img/Blog1.png";
import Blog2 from "../../assets/img/Blog2.png";
import Blog3 from "../../assets/img/Blog3.png";
import Blog4 from "../../assets/img/Blog4.png";
import Blog5 from "../../assets/img/Blog5.png";
import Blog6 from "../../assets/img/Blog6.png";

import RightArrow from "../../assets/icon/arrow-right0.svg"
import BlogCard from "../BlogCard/BlogCard";

export default function Blog(){
    return (
        <div className="my-16">
            <div className="container mx-auto">
                <div>
                    <Heading1 title="Blog" />
                </div>
                <div className="mt-10">
                    <Headings/>
                </div>
                <div>
                    <BlogCard />
                </div>
            </div>
        </div>
    )
}