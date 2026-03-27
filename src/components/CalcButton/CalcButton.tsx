import "./CalcButton.css"

interface CalcButtonProps {
    digit: number | string
    variant?: string   // ← add this
}

export default function CalcButton({ digit, variant = 'number' }: CalcButtonProps) {
    return (
        <div className={`Container border-2 shadow-xl text-shadow-lg/3 rounded-2xl ${variant}`}>{digit}</div>
    )
}