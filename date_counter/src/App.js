import {useState} from "react";
import "./App.css";

const defaultStep = 1;
const defaultCount = 0;

export default function App() {


    return (
        <div className="App">
            <Counter/>
        </div>
    );
}

function Counter() {
    const [step, setStep] = useState(defaultStep)
    const [count, setCount] = useState(defaultCount)
    const today = new Date()

    function handleReset() {
        setStep(defaultStep)
        setCount(defaultCount)
    }

    return (
        <>
            <div>
                <input type="range" min="1" max="10" value={step}
                       onChange={(e) => setStep(+e.target.value)}/>
                <span>{step}</span>
            </div>
            <div>
                <button onClick={() => setCount(c => c - step)}>-</button>
                <input type="text" value={count} onChange={(e) => setCount(+e.target.value)}/>
                <button onClick={() => setCount(c => c + step)}>+</button>
            </div>
            <div>
                <p>{count === 0 ?
                    `Today is ${today.toLocaleDateString()}` :
                    count < 0 ?
                        `${count} days ago was ${new Date(today.setDate(today.getDate() + count)).toLocaleDateString()}` :
                        `In ${count} days will be ${new Date(today.setDate(today.getDate() + count)).toLocaleDateString()}`}</p>
            </div>
            {count !== defaultCount || step !== defaultStep ? <button onClick={handleReset}>Reset</button> : null}
        </>
    )

}