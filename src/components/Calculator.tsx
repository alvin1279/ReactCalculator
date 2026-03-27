import NumberPad from "./NumberPad/NumberPad"
import OperatorPad from "./OperatorPad/OperatorPad"
import "./Calculator.css"
import Display from "./Display/Display"

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
