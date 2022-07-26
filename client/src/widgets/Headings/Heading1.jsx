export default function Heading1(props){
    return (
        <div className="border-b ">
            <h1 className="text-2xl font-semibold">{props.title}</h1>
            <div className="border-b-2 border-black w-6 mt-1"></div>
        </div>
    )
}