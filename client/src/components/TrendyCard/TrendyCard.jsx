import ArrowRight from '../../assets/icon/arrow-right.svg'
import {Link} from 'react-router-dom'

export default function TrendyCard(props){
    return (

        <div>
            {
                !props.title && (
                    <div className='h-full bg-center bg-cover h-96'  style={{ backgroundImage: `url(${props.image})`}}>
                        
                    </div>
                )
            }
            {
                props.title && (
                    <div className='h-full bg-center bg-cover h-96 '  style={{ backgroundImage: `url(${props.image})`}}>
                        <div className='flex items-center justify-center w-[471px] mx-auto py-16'>
                            <div className=''>
                                <div className='text-lg font-medium flex gap-3'>
                                    <p>{props.category}</p> . 
                                    <p className='text-gray-800 text-[#6E6E6E]'>{props.time}</p>
                                </div>
                                <div>
                                    <h1 className='font-bold text-2xl'>{props.title}</h1>
                                </div>
                                <div>
                                    <p className='text-xl leading-8 text-[#6E6E6E]'>{props.description}</p>
                                </div>
                                <div className='flex mt-6'>
                                    <div className='text-[#6E6E6E]'>
                                        {props.read}
                                    </div>
                                    <div className="flex-1"></div>
                                    <div className='font-bold'>
                                        <Link to='/'>
                                            Read Full <img src={ArrowRight} alt="" className='inline'/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>

    )
}