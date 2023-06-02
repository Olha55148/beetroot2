const InputEmail = (props) => {
    const EmailChangeHandler = (event) => {
        console.log(event.target.value)
      }
return (
   <div className="col-2">
        <div className="input-group">
            <label className="label">
               {props.title}
                <input className='input--style-4' type="email" onChange={EmailChangeHandler} />
            </label>
        </div>
    </div> 
)
    
}
export default InputEmail