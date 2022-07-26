export default function BlogCard2(props){
    return(
        <div className="flex gap-5">
            <div>
                <img src={props.image} alt="" />
            </div>
            <div className="w-44">
                <div>
                    <h1 className="text-xl font-medium">{props.title}</h1>
                </div>
                <div>
                    <p className="text-xs text-[#020202] mt-2">{props.date}</p>
                </div>
            </div>
        </div>
    )
}