import Rectangle7 from '../../assets/img/Rectangle7.png';
import Star from '../../assets/icon/Star.svg';
import Heading1 from '../../widgets/Headings/Heading1';
import Heading0 from '../../widgets/Headings/Heading0';

export default function BlogHeader(){
    return (
        <div className="container mx-auto">
            <div className='h-[404px] mt-14 bg-cover relative' style={{backgroundImage: `url(${Rectangle7})`}}>
                <div className='flex items-center justify-center text-center text-white pt-16'>
                    <h1 id='main-heading' className='text-[70px] tracking-[10px]'>ATTACK ON THE TITANS</h1>
                </div>
                <div className='flex justify-center gap-x-24 mb-5'>
                    {Array.apply(null, { length: 5 }).map((e, i) => (
                        <div>
                            <img src={Star} alt="" />
                        </div>
                    ))}
                </div>
                <div className='absolute bottom-4 left-2/4 -translate-x-2/4'>
                    <p className="text-2xl text-center text-white">1 million+ reads</p>
                </div>
            </div>

        </div>
    )
}