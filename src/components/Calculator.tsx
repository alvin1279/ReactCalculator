import NumberPad from "./NumberPad/NumberPad"
import OperatorPad from "./OperatorPad/OperatorPad"
import "./Calculator.css"
import Display from "./Display/Display"
import FunctionPad from "./FunctionPad/FunctionPad"

export default function Calculator() {
  return (
    <div className="CalcWrapper">
      <Display />
      <div className="CalcLeft">
        <FunctionPad/>
      </div>
      <div className="CalcContainer">
        <NumberPad />
        <OperatorPad />
      </div>
    </div>
  )
}
