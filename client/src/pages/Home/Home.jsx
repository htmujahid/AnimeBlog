import HeroSection from "../../components/HeroSection/HeroSection";
import NewTrendy from "../../components/NewTrendy/NewTrendy";
import NowTrending from "../../components/NowTrending/NowTrending";
import ShortRead from "../../components/ShortRead/ShortRead";
import Blog from "../../components/Blog/Blog";
import Footer from "../../components/Footer/Footer";

export default function Home(){
    return (
        <div>
            <HeroSection />
            <NewTrendy />
            <NowTrending />
            <ShortRead />
            <Blog />     
            <Footer />       
        </div>
    )
}