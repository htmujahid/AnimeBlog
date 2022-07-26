export default function Button(props){
    return (
        <button className="text-sm border border-2 border-white px-4 py-1 rounded hover:border-blue-500 transition text-white bg-black">{props.label}</button>
    )
}