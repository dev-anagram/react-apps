import { useState } from "react"
import Toast from 'typescript-toastify'

function sendToast(): void {
    const toast = new Toast({
        position: "top-right",
        toastMsg: "Limit exceeded",
        autoCloseTime: 2000,
        canClose: true,
        showProgress: true,
        type: "default",
        theme: "dark"
    });
    toast.remove;
}

export default function Counter(){
    const [count, setCount] = useState(0);

    if(count > 10 || count < -10){
        sendToast();
        if(count > 0) setCount(10); else setCount(-10);
    }

    return(
        <div>
            <button className="bg-green-400 hover:bg-green-500 transition duration-500 ease-in-out text-gray-50 text-shadow-md text-shadow-gray-600 hover:text-gray-100 font-bold py-2 px-5 mx-2 rounded"
                onClick={() => setCount((count) => count + 1)}>Add</button>
            <button className="bg-red-400 hover:bg-red-500 transition duration-500 ease-in-out text-gray-50 text-shadow-md text-shadow-gray-600 hover:text-gray-100 font-bold py-2 px-5 mx-2 rounded"
                onClick={() => setCount((count) => count - 1)}>Subtract</button>
            <button id="counterText" className="bg-blue-400 hover:bg-blue-500 transition duration-500 ease-in-out text-gray-50 text-shadow-md text-shadow-gray-600 hover:text-gray-100 font-bold py-2 px-5 mx-2 rounded"
                onClick={() => setCount(0)}>Reset</button>
            <p className="flex items-center justify-center text-gray-50 text-shadow-md text-shadow-gray-600 hover:text-gray-100 text-2xl py-2"
                >{count}</p>
        </div>
    )
}
