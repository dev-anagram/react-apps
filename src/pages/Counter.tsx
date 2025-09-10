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
        <div className="text-xl">
            <button className="button-add"
                onClick={() => setCount((count) => count + 1)}>Add</button>
            <button className="button-remove"
                onClick={() => setCount((count) => count - 1)}>Subtract</button>
            <button className="button-reset"
                onClick={() => setCount(0)}>Reset</button>
            <p className="flex items-center justify-center text-shadow-md text-3xl py-2"
                >{count}</p>
        </div>
    )
}
