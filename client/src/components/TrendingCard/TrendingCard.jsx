import ArrowRight from '../../assets/icon/arrow-right.svg'
import {Link} from 'react-router-dom'

export default function TrendingCard(props){
    return (
        <div>
            <div className="">
                <div>
                    <img src={props.image} alt="" />
                </div>
                <div className="w-80 mx-auto py-5">
                    <div className="flex text-xs font-medium">
                        <p>{props.category}</p> . 
                        <p className="text-[#6e6e6e]">{props.time}</p>
                    </div>
                    <div>
                        <h1 className="text-lg font-bold py-2">{props.title}</h1>
                    </div>
                    <div>
                        <p className="text-sm text-[#6e6e6e]">{props.description}</p>
                    </div>
                    <div className="flex text-xs pt-4">
                        <div><p className=" text-[#6e6e6e]">{props.read}</p></div>
                        <div className="flex-1"></div>
                        <div>
                            <Link to='/'>
                                <p className="font-bold">Read Full <img src={ArrowRight} alt="" className="inline"/></p>
                            </Link>                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}