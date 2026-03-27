import "./CalcButton.css"

interface CalcButtonProps {
    digit: number | string
    variant?: string
    onPress?: (value: number | string) => void
}

export default function CalcButton({ digit, variant = 'number',onPress }: CalcButtonProps) {
    return (
        <div className={`Container border-2 shadow-xl text-shadow-lg/3 rounded-2xl ${variant}`}
        onClick={()=> onPress?.(digit)}
        >{digit}</div>
    )
}