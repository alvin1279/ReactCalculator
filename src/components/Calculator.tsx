import NumberPad from "./NumberPad"
import OperatorPad from "./OperatorPad"
import "./Calculator.css"
import Display from "./Display"

export default function Calculator() {
  return (
    <div className="CalcWrapper">
      <Display />
      <div className="CalcContainer">
        <NumberPad />
        <OperatorPad />
      </div>
    </div>
  )
}
