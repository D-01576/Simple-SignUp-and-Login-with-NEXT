export function UserCard(props){
    return(
        <div className="border w-[500px] border-white p-[20px] text-white font-sans text-[20px]">
            <h2>Name: <span className="text-blue-900 font-bold font-mono">{props.name}</span></h2>
            <h2 className="mt-[20px]">Email: <span className="text-blue-900 font-bold font-mono">{props.email}</span></h2>
        </div>
    )
}