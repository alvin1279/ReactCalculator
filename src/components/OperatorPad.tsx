import CalcButton from './CalcButton'
import './OperatorPad.css'

const operators = ['+', '-', '/', '*'] as const

export default function OperatorPad() {
    return (
        <div className="OperatorContainer">
            {operators.map(op => (
                <CalcButton key={op} digit={op} variant="operator" />
            ))}
        </div>
    )
}