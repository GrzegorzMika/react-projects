import {useState} from "react";
import "./App.css";

export default function App() {


    return (
        <div className="App">
            <Counter/>
        </div>
    );
}

function Counter() {
    const [step, setStep] = useState(1)
    const [count, setCount] = useState(0)
    const today = new Date()

    return (
        <>
            <div>
                <button onClick={() => setStep(s => s - 1)}>-</button>
                <span>Step: {step}</span>
                <button onClick={() => setStep(s => s + 1)}>+</button>
            </div>
            <div>
                <button onClick={() => setCount(c => c - step)}>-</button>
                <span>Count: {count}</span>
                <button onClick={() => setCount(c => c + step)}>+</button>
            </div>
            <div>
                <p>{count === 0 ?
                    `Today is ${today.toLocaleDateString()}` :
                    count < 0 ?
                        `${count} days ago was ${new Date(today.setDate(today.getDate() + count)).toLocaleDateString()}` :
                        `In ${count} days will be ${new Date(today.setDate(today.getDate() + count)).toLocaleDateString()}`}</p>
            </div>
        </>
    )

}