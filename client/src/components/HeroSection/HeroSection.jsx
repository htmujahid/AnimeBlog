import Subscribe from '../../widgets/Inputs/Subscribe';
import HeroImage from '../../assets/img/heroImage.png'
export default function HeroSection(){
    return(
        <div className="background-img">
            <div className='container mx-auto flex items-center h-full text-white '>
                <div>
                    <div>
                        <h1 id="main-hading" className='text-8xl leading-[95px] tracking-[3px]'>
                            Welcome to Gates
                        </h1>
                    </div>
                    <div className='my-6'>
                        <p className='text-lg leading-7 tracking-[0.5px] text-zinc-50'>
                        Get the latest news on your favourite mangas, anime and <br /> manhwa around the world!
                        </p>
                    </div>
                    <div>
                        <Subscribe name="email" id="email" placeholder="Enter Your Email" />
                    </div>
                </div>
                <div>
                    <div>
                        <img src={HeroImage} alt="" className='h-[calc(100vh-70px)]' />
                    </div>
                </div>
            </div>
        </div>
    )
}