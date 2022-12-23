/* eslint-disable */
import ComponentOne from "./ComponentOne"
import ComponentTwo from "./ComponentTwo"
import { useState } from 'react'
import "./App.css"
const App = () => {

    const [state, setState] = useState(0)
    const [text, setText] = useState("")

    const handleClick = (domElement) => {
        // if (state === 0) {
        //     setState(1)
        // } else {
        //     setState(0)
        // }
        console.log(domElement)
        setText(domElement.innerHTML)
    }

    return (
        <div>
            {/* {state === 0 ?
                <div className="svg-class-1" onClick={handleClick} >
                    <h1>Component 1</h1>
                    <ComponentOne />
                </div>
                :
                <div className="svg-class-2" onClick={handleClick} >
                    <h1>Component 2</h1>
                    <ComponentTwo />
                </div>
            } */}
            <div className="svg-class-1" onClick={handleClick} >
                <h1>{text}</h1>
                <ComponentOne />
            </div>
            <div className="container">
                <div className="class1" onClick={() => handleClick(document.querySelector(".class1"))}>Product 1</div>
                <div className="class2" onClick={() => handleClick(document.querySelector(".class2"))}>Product 2</div>
                <div className="class3" onClick={() => handleClick(document.querySelector(".class3"))}>Product 3</div>
            </div>
        </div>
    )
}

export default App