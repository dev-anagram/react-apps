import { useState } from "react";

export default function Calculator(){
    const [result, setResult] = useState(0)

    return (
        <div className="grid-cols-1 p-4 bg-blue-950 rounded-2xl w-auto h-min relative border-solid border-3 border-gray-500">
            <div className="mb-2 h-auto bg-gray-900 rounded-2xl border-solid border-3 border-black">
                <p className="text-3xl px-2 py-1 text-right text-white font-bold">
                    {result}
                </p>
            </div>
            <div className="p-2 grid grid-cols-4 place-items-center gap-2 py-2 h-auto bg-gray-900 rounded-2xl border-solid border-3 border-black">
                <button className="btn-calc">%</button>
                <button className="btn-calc">CE</button>
                <button className="btn-calc">C</button>
                <button className="btn-calc">Del</button>
                {/*  */}
                <button className="btn-calc">1/x</button>
                <button className="btn-calc">x<sup>2</sup></button>
                <button className="btn-calc">&radic;x</button>
                <button className="btn-calc">/</button>
                {/*  */}
                <button className="btn-calc">7</button>
                <button className="btn-calc">8</button>
                <button className="btn-calc">9</button>
                <button className="btn-calc">*</button>
                {/*  */}
                <button className="btn-calc">4</button>
                <button className="btn-calc">5</button>
                <button className="btn-calc">6</button>
                <button className="btn-calc">-</button>
                {/*  */}
                <button className="btn-calc">1</button>
                <button className="btn-calc">2</button>
                <button className="btn-calc">3</button>
                <button className="btn-calc">+</button>
                {/*  */}
                <button className="btn-calc">+/-</button>
                <button className="btn-calc">0</button>
                <button className="btn-calc">.</button>
                <button className="btn-calc">=</button>
                {/*  */}
            </div>
        </div>
    )
}
