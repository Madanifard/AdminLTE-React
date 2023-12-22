import './main.css'
import Input from '../components/inputs/Input'
import Checkbox from '../components/inputs/Checkbox'
import Button from '../components/buttons/Buttons'
// import { useState } from 'react'

function Login() {

    // const [email, setEmail] = useState("")

    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="card card-outline card-primary">
                    <div className="card-header text-center">
                        <a href="../../index2.html" className="h1"><b>Admin</b>LTE</a>
                    </div>
                    <div className="card-body">
                        <p className="login-box-msg">Sign in to start your session</p>

                        <form action="../../index3.html" method="post">
                            <div className="input-group mb-3">
                            {/* value={email} onChange={(event: any) => setEmail(event.target.value)} */}
                                <Input type="email" class="form-control" placeholder="Email"  />

                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <Input type="password" class="form-control" placeholder="Password"  />

                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <div className="icheck-primary">
                                        <Checkbox id="remember" label="Remember Me" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <Button class="btn btn-primary btn-block" text="Sign In" />
                                </div>
                            </div>
                        </form>

                        <div className="social-auth-links text-center mt-2 mb-3">
                            <a href="#" className="btn btn-block btn-primary">
                                <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
                            </a>
                            <a href="#" className="btn btn-block btn-danger">
                                <i className="fab fa-google-plus mr-2"></i> Sign in using Google+
                            </a>
                        </div>

                        <p className="mb-1">
                            <a href="forgot-password.html">I forgot my password</a>
                        </p>
                        <p className="mb-0">
                            <a href="register.html" className="text-center">Register a new membership</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login