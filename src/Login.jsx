
import React ,{useState} from 'react';
import './Login.css';
import {Link  , useHistory} from 'react-router-dom';
import { auth } from './firebase';

function Login() {

const Histoy = useHistory();
const [email, setemail] = useState('');
const [password, setpassword] = useState('');

const SignIn = e => {
    e.preventDefault();
    auth
        .signInWithEmailAndPassword(email , password)
        .then((auth) => {
            if (auth) {
                Histoy.push('/')
            }
        })

}
const Register = e => {
    e.preventDefault();
    auth
        .createUserWithEmailAndPassword(email , password)
        .then((auth) => {
            if (auth) {
                Histoy.push('/')
            }
        })
        .catch(error => alert(error.message))

}




    return (
        <div  className="login">
            <Link to="/">
            <img className="login__logo" src="https://blog.flamingtext.com/blog/2020/10/18/flamingtext_com_1603017087_825463480.png" />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email}  onChange={ e => setemail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={ e => setpassword(e.target.value)} />

                    <button type="submit" onClick={SignIn} className="login__signin">Sign-in</button>
                </form>
                <p>It is a long established fact that a reader
                     will be distracted by the readable content o
                     f a page when looking at its layout. 
                </p>
                <button type="submit" onClick={Register} className="login__signup">create your Matrix Account</button>

            </div>
        </div>
        
    )
}

export default Login 
