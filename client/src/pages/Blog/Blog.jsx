import BlogComment from "../../components/BlogComment/BlogComment";
import BlogHeader from "../../components/BlogHeader/BlogHeader";
import ShortRead from "../../components/ShortRead/ShortRead";
import BlogChapter from "../../components/BlogChapter/BlogChapter";

export default function Blog(){
    return (
        <div>
            <BlogHeader />
            <BlogChapter />
            <ShortRead />
            <BlogComment />
        </div>
    )
}