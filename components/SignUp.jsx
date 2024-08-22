"use client"
export function SignUp(){
    return(
    <div className="border w-[400px] border-white p-[20px] text-white font-sans text-[20px]">
        <h2 className="text-center border-b pb-[20px] border-blue-900">Signup</h2>
        <div className="mt-[20px]">
            <label>Name :</label>
            <input type="text" name="name" className="bg-black ml-[20px] border h-[25px] border-blue-900 w-[70%] border-box pl-[20px]"/>
        </div>
        <div className="mt-[20px]">
            <label>Email :</label>
            <input type="email" name="name" className="bg-black ml-[20px] border h-[25px] border-blue-900 w-[71%] border-box pl-[20px]"/>
        </div>
        <div className="mt-[20px]">
            <label>Password :</label>
            <input type="password" name="name" className="bg-black ml-[20px] border h-[25px] border-blue-900 w-[62%] border-box pl-[20px]"/>
        </div>
        <div className="mt-[30px] flex justify-between items-center">
        <p className="text-[17px] underline text-blue-900 cursor-pointer" onClick={()=>{
            window.location.pathname = "/signin"
        }}>Already have an account</p>
        <button className="bg-gray-900 text-blue-900 p-[10px] rounded-[10px] w-[150px]">SignUp</button>
        </div>
    </div>
    )
}