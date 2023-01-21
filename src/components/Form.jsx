import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { selectEmail, selectHappening, selectPassword, setEmail, setHappening, setPassword } from "../auth-feature/form-slice"

export const Form = () => {
    const dispatch = useDispatch()
    const happening = useSelector(selectHappening)
    const email = useSelector(selectEmail)
    const password = useSelector(selectPassword)
    const handlerEmail = (event) => {
        let regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        let value = event.target.value
        if(regEmail.test(value) ){
            dispatch(setEmail(value))
        }
    }
    const handlerPassword = (event) => {
            if(event.target.value.length >= 10){
                dispatch(setPassword(event.target.value))
            }
        }
    const putInLocalStorage = () => {
        if(localStorage.getItem(email) === null && localStorage.getItem(password) === null){
            localStorage.setItem('email',email)
            localStorage.setItem('password',password)
            dispatch(setHappening('Login'))
        } 
    }

    useEffect(() => {
        if(localStorage.getItem('email') != null && localStorage.getItem('password') != null){
            dispatch(setHappening('Login'))
            console.log('Этот лог показывает, что в ЛС есть нужные ключи')
            // let emailInput = document.getElementById('emailInput')
            // let passwordInput = document.getElementById('passwordInput')
            // emailInput.setAttribute('value', localStorage.getItem('email'))
            // passwordInput.setAttribute('value',localStorage.getItem('password'))
        } dispatch(setHappening('Registration'))
    }, [happening,dispatch] )
    const validateForm = () =>{
        alert("please insert valid Email or Password > 10 simbols. Now your password length is " + document.getElementById('passwordInput').value.length)
    }
    return(
        <>
            <div className="login-box">
                <h2>{happening}</h2>
                <form>
                    <div className="user-box">
                    <input id="emailInput" type="email"  onChange={handlerEmail}/>
                    <label>Email</label>
                    </div>
                    <div className="user-box">
                    <input id="passwordInput" type="text"   onChange={handlerPassword}/>
                    <label>Password &gt; 10 simbols</label>
                    </div>
                    <a  href="#" onClick={email && password ? putInLocalStorage : validateForm } >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Войти    
                     </a>
                </form>
            </div>
        </>
    )
}   