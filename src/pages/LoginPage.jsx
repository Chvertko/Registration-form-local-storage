

import Confetti from 'react-confetti'
import {useSelector } from 'react-redux'
import { useWindowSize } from 'react-use'
import hiImg from '../assets/robot.png'
import {selectEmail, selectHappening, selectPassword} from '../auth-feature/form-slice'

export const LoginPage = ({children}) => {
    const {width,height} = useWindowSize()
    const happening = useSelector(selectHappening)
    const email = useSelector(selectEmail)
    const password = useSelector(selectPassword)
    
    if(happening === 'Registration'){
        console.log(happening)
        return(
            <>
                <div className="login-page-title">
                    <img src={hiImg} width='50px' height='50px' alt="hiImg" />
                    <span>Hi,please signUP </span>
                </div>
                {children}
            </>
        )
    }
    if(happening === 'Login'){
        console.log(happening)
        
        return(
            <>
                <div className="login-page-title">
                    <img src={hiImg} width='50px' height='50px' alt="hiImg" />
                    <span>You are logened with Email :{localStorage.getItem('email')} and password : {localStorage.getItem('password')}</span>
                    <button className='login-page btn-clearButton' onClick={() => {
                        localStorage.clear()
                        window.location.reload()
                    }}>CLEAR LOCALSTORAGE AND RELOAD</button>
                </div>
                <Confetti width ={width} height = {height}/>

            </>
        )
    }
    
}