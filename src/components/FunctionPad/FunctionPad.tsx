import CalcButton from "../CalcButton/CalcButton"
import "./FunctionPad.css"

const functions = ["AC", "(", ")", "%"] as const

export default function FunctionPad() {
    return (
        <div className="FunctionContainer">
            {functions.map(fn => (
                <CalcButton key={fn} digit={fn} variant="function" />
            ))}
        </div>
    )
}