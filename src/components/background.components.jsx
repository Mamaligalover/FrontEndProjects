import './background.styles.scss'
import ButtonComponent from "./button/button.component";
import InputComponent from "./input/input.component";
import {useState} from "react";

const BackgroundComponents= ()=>{
 const [isCliked , setIsCliked] = useState(false)
 const [email , setEmail] = useState(null)

    const OnCLik = ()=>
    {
        console.log(email,"----")
        if (email !== null)
        setIsCliked(true);
    }
    const Dismis=()=>{

     setEmail(null);
        setIsCliked(false);
    }
    const handelValueFromChild=(data)=>{
     console.log(data)
     setEmail(data);
    }
    return(
        <div className='background'>
            {isCliked?
                <div className='confirm-card'>
                    <div className='confirm-content'>
                        <div className='confirmation-img'></div>
                        <h1>Thanks for subscribing!</h1>
                        <p>
                            {
                                `A confirmation email has ben
                                sent to ${email} .Please open it and
                                click the button inside to
                                confirm your subscription`
                            }
                        </p>
                        <ButtonComponent onClik={Dismis} title='Dismiss message'/>
                    </div>
                </div> :
            <div className='card'>
                <div className='content'>
                        <h1 className='title'>Stay updated!</h1>
                        <p className='subtitle'>Join 60,000+ product managers receving monthly opdates on:</p>
                        <ul className='list'>
                            <li> Product doscpvery and building what matters</li>
                            <li> Measuring to ensure updates are a success</li>
                            <li> And much more!</li>
                        </ul>

                    <InputComponent inputResult={handelValueFromChild}/>
                    <ButtonComponent onClik={OnCLik} title='Subscribe to monthly newsletter'/>

                </div>
                <div className='image'>
                </div>
            </div>
            }

        </div>
    )
}

export default BackgroundComponents;