import {useState} from "react";
import './input.styles.scss'

const InputComponent = ({inputResult})=>{
    const [error ,setErrorMessage] = useState(null);
    const [inputclass ,setInputClass] = useState('input');
    const handleinput = (e)=>{
        e.preventDefault();
        const emailpatterns = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        const email = e.target.value;
        if (!emailpatterns.test(email))
        {
            setErrorMessage("Email is not valid")
            setInputClass('input-error')
            inputResult(null);
        }
        else
        {
            setErrorMessage(null)
            setInputClass('input')
            inputResult(e.target.value);

        }
    }


    return(
        <>
            <form autoComplete='off'>
                <div className='lable-div'>
                    <label htmlFor='inputId' className='lable'> Email address</label>
                    {error && <div className='error-message'>{error}</div>}
                </div>
                <input className={inputclass} id='inputId' type='email' placeholder='example@mail.com' onChange={handleinput} />
            </form>
        </>

    )
}

export default InputComponent;