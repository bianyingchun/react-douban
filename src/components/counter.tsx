import React, {useState, useRef, useEffect} from "react";


// 1.useState参数为基本类型时的常规使用：
const Counter: React.FC<{initial:number}> = ({initial = 0}) => {
    const [count, setCount] = useState<number>(initial)
    return (
        <div className="counter">
            <p>cout:{count}</p>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count-1)}>-</button>
        </div>
    )
}

export default Counter