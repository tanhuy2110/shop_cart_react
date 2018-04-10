import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <main className="mainContent">
                    <section id="pageContent">
                        <div className="container">
                            <div className="velaAccountContainer">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6">
                                        <div className="formAccount formLogin">
                                            <div id="CustomerLoginForm" className="formAccountLogin">
                                                <h1 className="velaAccountTitle">Login</h1>
                                                <form method="post" action="https://vela-kazan.myshopify.com/account/login" id="customer_login"><input type="hidden" name="form_type" value="customer_login"/><input type="hidden" name="utf8" value="✓"/>
                                                    <div className="formContent">
                                                        <div className="form-group">
                                                            <label  className="">Email</label>
                                                            <input type="email" name="customer[email]" id="CustomerEmail" className="form-control" placeholder="Email"/>
                                                        </div>
                                                            <div className="form-group">
                                                                <label className="">Password</label>
                                                                <input type="password" value="" name="customer[password]" id="CustomerPassword" className="form-control" placeholder="Password"/>
                                                            </div>
                                                            <p className="forgetPassword"><a href="#recover" id="RecoverPassword">Forgot your password?</a></p>
                                                        <p><input type="submit" className="btn btnVelaOne" value="Sign In"/></p>
                                                        <p className="hidden"><a href="../index.html">Return to Store</a></p>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6">
                                        <div className="formAccount formLogin">
                                            <h3 className="velaAccountTitle">Create Account</h3>
                                            <div className="formContent">
                                                <div className="registerDescription">
                                                    <p>Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register.</p>
                                                </div>
                                                <div className="submit">
                                                    <a className="btn btnVelaOne" href="register.html">
                                                        <span>Create an account</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>                    
                </main>
            </div>
        );
    }
}

export default Login;