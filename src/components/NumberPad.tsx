import type { ReactNode } from "react"
import CalcButton from "./CalcButton"
import './NumberPad.css'


function GenerateNumber(){
    let numberDiv:Array<ReactNode> = []
    for (let index = 9; index> 0; index--) {
        numberDiv.push(<CalcButton key={index} digit={index} />)
    }
    return <>{numberDiv}</> 
}


export default function NumberPad() {
  return (
    <>
      <div className="NumberContainer">
        <GenerateNumber/>
        <CalcButton digit={0}/>
        <CalcButton digit={"."}/>
        <CalcButton digit={"="}/>
      </div>
    </>
  )
}
