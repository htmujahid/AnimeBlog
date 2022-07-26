import ArrowRight from '../../assets/icon/arrow-right.svg'

export default function Subscribe(props){
    return (
        <div className="text-white">
            <div className="w-96 h-12 bg-zinc-50 flex items-center ">
                <div className="w-24 h-6 flex items-center justify-center bg-black text-white text-[9px] font-semibold mx-3">
                    Subscribe
                </div>
                <div className="flex items-center justify-center text-[#313131] text-xs font-medium mx-3">
                    <input type="email" name={props.name} id={props.id} placeholder={props.placeholder} className='focus:outline-none' />
                </div>
                <div className="flex items-center justify-center text-[#313131] text-xs font-medium mx-3">
                    <form action="">
                        <button type="submit">
                            <img src={ArrowRight} alt="" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}