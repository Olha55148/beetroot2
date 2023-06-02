
const InputNumber = (props) => {
    const NumberChangeHandler = (event) => {
        console.log(event.target.value)
      }
return (
   <div className="col-2">
        <div className="input-group">
            <label className="label">
               {props.title}
                <input className='input--style-4' type="number" onChange={NumberChangeHandler} />
            </label>
        </div>
    </div> 
)
    
}
export default InputNumber