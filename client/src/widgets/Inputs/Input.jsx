export default function Input(props){
    return(
        <div className="text-white">
            <div className="w-96 h-12 bg-zinc-50 flex items-center ">
                <div className="w-24 h-6 flex items-center justify-center bg-black text-white text-[9px] font-semibold mx-3">
                    {props.label}
                </div>
                <div className="flex items-center justify-center text-[#313131] text-xs font-medium mx-3">
                    <input type={props.type} name={props.name} id={props.id} placeholder={props.placeholder} className='focus:outline-none' />
                </div>
            </div>
        </div>
    )
}