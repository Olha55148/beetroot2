
import './InputBirthday.scss'
const InputBirthday = (props) => {
    const BirthdayChangeHandler = (event) => {
        console.log(event.target.value)
    }
    return (
        <div className="col-2">
            <div className="input-group">
                <label className="label">
                    {props.title}
                </label>
                <div className='input-group-icon'>
                    <input className='input--style-4 ' name='birthday' type="text" onChange={BirthdayChangeHandler} />
                    <i></i>
                </div>

            </div>
        </div>
        
    )

}
export default InputBirthday