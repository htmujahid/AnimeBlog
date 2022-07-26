import Heading1 from "../../widgets/Headings/Heading1";
import Headings from "../../widgets/Headings/Headings";

import BlogCard0 from "../BlogCard/BlogCard0";
import BlogCard1 from "../BlogCard/BlogCard1";
import BlogCard2 from "../BlogCard/BlogCard2";

import Blog0 from "../../assets/img/Blog0.png";
import Blog1 from "../../assets/img/Blog1.png";
import Blog2 from "../../assets/img/Blog2.png";
import Blog3 from "../../assets/img/Blog3.png";
import Blog4 from "../../assets/img/Blog4.png";
import Blog5 from "../../assets/img/Blog5.png";
import Blog6 from "../../assets/img/Blog6.png";

import RightArrow from "../../assets/icon/arrow-right0.svg"

export default function BlogCard3(props){
    return(
        <div>
            <div className="flex gap-5">
                <div>
                    <img src={props.image} alt="" />
                </div>
                <div className="w-32">
                    <div>
                        <h1 className="text-sm font-medium">{props.title}</h1>
                    </div>
                    <div>
                        <p className="text-xs text-[#020202] mt-2">{props.date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}