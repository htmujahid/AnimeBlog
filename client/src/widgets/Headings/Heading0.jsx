export default function Heading0(props){
    return (
        <div className="border-b ">
            <h1 id="main-heading" className="text-4xl font-semibold tracking-[8px]">{props.title}</h1>
            <div className="border-b-2 border-black w-6 mt-1"></div>
        </div>
    )
}