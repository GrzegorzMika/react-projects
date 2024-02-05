import { useState } from "react"

export default function App() {
  const [bill, setBill] = useState(0)
  const [myTip, setMyTip] = useState(0)
  const [friendTip, setFriendTip] = useState(0)

function handleReset() {
  setBill(0)
  setMyTip(0)
  setFriendTip(0)
}

function handleChangeBill(value) {
  setBill(value)
}

function handleMyTipChange(value) {
  setMyTip(value)
}

function handlFriendTipChange(value) {
  setFriendTip(value)
}

return (
  <>
  <BillInput onChange={handleChangeBill} currentBillValue={bill}/>
  <TipInput currentTipLevel={myTip} handleChange={handleMyTipChange}>How did you like the service</TipInput>
  <TipInput currentTipLevel={friendTip} handleChange={handlFriendTipChange}>How did your friend like the service</TipInput>
  <Output bill={bill} myTip={myTip} friendTip={friendTip}/>
  <ResetButton onClick={handleReset}/>
  </>
)
}

function BillInput({ onChange, currentBillValue }) {
  return <>
    <label>
    How much was the bill? <input name="bill_value" type="number" value={currentBillValue} onChange={e=>onChange(e.target.value)}></input>
    </label>
  </>
}

function TipInput({currentTipLevel, handleChange, children}) {
  return <>
  <br/>{children}
  <select
  value={currentTipLevel}
  onChange={e=>handleChange(e.target.value)}
  >
    <option value={0.2}>Absolutly amazing! (20%)</option>
    <option value={0.1}>It was good (10%)</option>
    <option value={0.05}>It was okey (5%)</option>
    <option value={0}>Dissatisifed (0%)</option>
  </select>
  </>
}

function Output({ bill, myTip, friendTip }) {
  const tip = Math.round((+myTip + +friendTip)/2 * bill)
  return <h2>
    {`You pay $${+bill + +tip} ($${bill} + $${tip} tip)`}
  </h2>
}

function ResetButton({ onClick }) {
  return <button onClick={onClick}>Reset</button>
}

