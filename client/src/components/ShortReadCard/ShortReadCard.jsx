export default function ShortReadCard(props){
    return (
        <div>
            <div className="flex gap-4">
                <div><img src={props.image} alt="" /></div>
                <div className="w-48">
                    <h1 className="text-lg font-medium">{props.title}</h1>
                    <p className="text-xs text-[#020202] pt-2">{props.description}</p>
                </div>
            </div>
        </div>
    )
}