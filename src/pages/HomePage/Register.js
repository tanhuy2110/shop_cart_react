import React, { Component } from 'react';

class Register extends Component {
    render() {
        return(
            <div>
            <div class="velaAccountContainer">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="formAccount">
                        <h1 class="velaAccountTitle">Create Account</h1>
                        <form method="post" action="https://vela-kazan.myshopify.com/account" id="create_customer" accept-charset="UTF-8">
                            <input type="hidden" name="form_type" value="create_customer"/>
                            <input type="hidden" name="utf8" value="✓"/>
                            <div class="formContent">
                                
                                <div class="form-group">
                                    <label for="FirstName" class="">First Name</label>
                                    <input type="text" name="customer[first_name]" id="FirstName" class="form-control" placeholder="First Name" />
                                </div>
                                <div class="form-group">
                                    <label for="LastName" class="">Last Name</label>
                                    <input type="text" name="customer[last_name]" id="LastName" class="form-control" placeholder="Last Name"/>
                                </div>
                                <div class="form-group">
                                    <label for="Email" class="">Email</label>
                                    <input type="email" name="customer[email]" id="Email" class="form-control" placeholder="Email" />
                                </div>
                                <div class="form-group">
                                    <label for="CreatePassword" class="">Password</label>
                                    <input type="password" name="customer[password]" id="CreatePassword" class="form-control" placeholder="Password"/>
                                </div>
                                <div class="form-group">
                                    <input type="submit" value="Create an account" class="btn btnVelaOne"/>
                                </div>
                                <p><a class="velaLinkCancel" href="/">Return to Store</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
            </div>
        );
    }
}

export default Register;