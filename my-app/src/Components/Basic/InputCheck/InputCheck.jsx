import "../InputCheck/InputCheck.scss";
const InputCheck = (props) => {
    const GenderChangeHandler = (event) => {
        console.log(event.target.value)
    }
    return (
        <div className="col-2">
            <div className="input-group1">
                <label className="label">
                    {props.title}
                </label>
                <div className="p-t-10">
                    <label className="radio-container m-r-45">
                        Male
                        <input type="radio" checked='checked' name='gender' onChange={GenderChangeHandler} />
                        <span className="checkmark">
                        </span>
                    </label>
                    <label className="radio-container">
                        Female
                        <input type="radio" name='gender' onChange={GenderChangeHandler} />
                        <span className="checkmark">
                        </span>
                    </label>
                </div>
            </div>
        </div>
    )
}
export default InputCheck