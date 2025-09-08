import { useState } from "react";

export default function Calculator(){
    const [expression, setExpression] = useState("")
    const [result, setResult] = useState<string | null>(null)

    const handleClick = (value: string) => {
        if (/[\+\-\*\/%]$/.test(expression) && /[\+\-\*\/%]/.test(value)) {
            return;
        }
        setExpression((prev) => prev + value);
  };

    const handleClear = () => {
        setExpression("");
        setResult(null);
    }

    const handleEqual = ()  => {
        try {
            const operation = eval(expression);
            setResult(operation.toString());
        } catch (error) {
            setResult("error");
        }
    }

    return (
        <div className="grid-cols-1 p-4 bg-blue-950 rounded-2xl w-auto h-min relative border-solid border-3 border-gray-500">
            <div className="mb-2 h-auto bg-gray-900 rounded-2xl border-solid border-3 border-black">
                <p className="text-3xl px-2 py-1 text-right font-bold">
                    {!result ? (
                        <>
                            {!expression ? (
                                <p>0</p>
                            ):(
                                <p>{expression}</p>
                            )}
                        </>
                    ):(
                        <p>{result}</p>
                    )}
                </p>
            </div>
            <div className="p-2 grid grid-cols-4 place-items-center gap-2 py-2 h-auto bg-gray-900 rounded-2xl border-solid border-3 border-black">
                <button onClick={() => handleClick("%")} className="btn-calc">%</button>
                <button onClick={handleClear} className="btn-calc">CE</button>
                <button onClick={handleClear} className="btn-calc">C</button>
                <button onClick={() => setExpression(expression.substring(0, expression.length - 1))} className="btn-calc">Del</button>
                {/*  */}
                <button disabled  className="btn-calc">x<sup>2</sup></button>
                <button onClick={() => handleClick("[")}  className="btn-calc">[</button>
                <button onClick={() => handleClick("]")} className="btn-calc">]</button>
                <button onClick={() => handleClick("/")} className="btn-calc">/</button>
                {/*  */}
                <button onClick={() => handleClick("7")} className="btn-calc">7</button>
                <button onClick={() => handleClick("8")} className="btn-calc">8</button>
                <button onClick={() => handleClick("9")} className="btn-calc">9</button>
                <button onClick={() => handleClick("*")} className="btn-calc">*</button>
                {/*  */}
                <button onClick={() => handleClick("4")} className="btn-calc">4</button>
                <button onClick={() => handleClick("5")} className="btn-calc">5</button>
                <button onClick={() => handleClick("6")} className="btn-calc">6</button>
                <button onClick={() => handleClick("-")} className="btn-calc">-</button>
                {/*  */}
                <button onClick={() => handleClick("1")} className="btn-calc">1</button>
                <button onClick={() => handleClick("2")} className="btn-calc">2</button>
                <button onClick={() => handleClick("3")} className="btn-calc">3</button>
                <button onClick={() => handleClick("+")} className="btn-calc">+</button>
                {/*  */}
                <button disabled className="btn-calc">+/-</button>
                <button onClick={() => handleClick("0")} className="btn-calc">0</button>
                <button onClick={() => handleClick(".")} className="btn-calc">.</button>
                <button onClick={handleEqual} className="btn-calc">=</button>
                {/*  */}
            </div>
        </div>
    )
}
