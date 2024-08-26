"use client"

import { useRouter } from 'next/navigation';

export function UserCard(props){
    const router = useRouter();

    const handleclick = ()=>{
        document.cookie = `authToken=none; path=/`;
        router.push('/signin');
    }
    return(
        <div className="border w-[500px] border-white p-[20px] text-white font-sans text-[20px]">
            <h2>Name: <span className="text-blue-900 font-bold font-mono">{props.name}</span></h2>
            <h2 className="mt-[20px]">Email: <span className="text-blue-900 font-bold font-mono">{props.email}</span></h2>
            <button onClick={handleclick} className='border p-3 w-[200px] mt-[20px]'>Logout</button>
        </div>
    )
}