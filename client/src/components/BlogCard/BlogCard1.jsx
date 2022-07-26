import RightArrow from "../../assets/icon/arrow-right0.svg"
import Heading1 from "../../widgets/Headings/Heading1";
import Headings from "../../widgets/Headings/Headings";

import BlogCard0 from "../BlogCard/BlogCard0";
import BlogCard2 from "../BlogCard/BlogCard2";
import BlogCard3 from "../BlogCard/BlogCard3";

import Blog0 from "../../assets/img/Blog0.png";
import Blog1 from "../../assets/img/Blog1.png";
import Blog2 from "../../assets/img/Blog2.png";
import Blog3 from "../../assets/img/Blog3.png";
import Blog4 from "../../assets/img/Blog4.png";
import Blog5 from "../../assets/img/Blog5.png";
import Blog6 from "../../assets/img/Blog6.png";

export default function BlogCard1(){
    return(
        <div>
            <div>
                <img src={Blog0} alt="" />
            </div>
            <div className="">
                <div><p className="text-xs text=[#6e6e6e] pt-7">1 Month Ago</p></div>
                <div><h1 className="text-lg font-bold py-5">Attack On Titans</h1></div>
                <div><p className="text-sm text-[#6e6e6e] pr-12">lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.</p></div>
                <div><p className="text-xs font-bold mt-12">Load More <img src={RightArrow} alt="" className="inline"/></p></div>
            </div>
        </div>
    )
}