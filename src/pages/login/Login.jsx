import './login.css'

function Login() {
    return(
        <>
            <div className="login">
                <div className="loginWrapper">
                    <div className="loginLeft">
                        <h3 className="loginLogo">Bitscorp Social</h3>
                        <span className="loginDesc">Connect with friends and the world around you on Bitscorp Social</span>
                    </div>
                    <div className="loginRight">
                        <login className="loginBox">
                            <input placeholder="Email" className="loginInput" />
                            <input placeholder="Password" className="loginInput" />
                            <button className="loginButton">Log In</button>
                            <span className="loginForgot">Forgot Password</span>
                            <button className="loginRegistrationButton">Create a New Account</button>
                        </login>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login