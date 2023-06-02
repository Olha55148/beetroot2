import { useState } from "react"

const InputText = (props) => {
    const [entredText, setentredText] = useState ('');
    const FirstLastNameChangeHandler = (event) => {
        setentredText(event.target.value)
      }
return (
   <div className="col-2">
        <div className="input-group">
            <label className="label">
               {props.title}
                <input className='input--style-4' type="text" onChange={FirstLastNameChangeHandler} />
            </label>
        </div>
    </div> 
)
    
}
export default InputText