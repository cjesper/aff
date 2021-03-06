import React, { Component } from 'react';
import {Row, Col} from 'react-flexbox-grid';

//Material UI
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//Internal packages
import CreateAccountModal from './CreateAccountModal';

class Login extends Component {
    constructor(props) {
        super(props)
    }


    submitLogin = () => {
        console.log("aff")
    }

    createAccount = () => {
        window.location.href= "./create_account";
    }

    render() {
        var textFieldStyle={
            margin:"auto"
        }

        return (
            <MuiThemeProvider>
                <Row xs lg md>
                    <Col xs md lg />
                    <Col xs md lg>
                        <h1 style={{textAlign:"center"}}>"Welcome" to aff...</h1>
                    <div style={{width:"50%"}}>
                        <TextField 
                            hintText="Name"
                        />
                        <TextField
                            style={textFieldStyle}
                            hintText="Password Field"
                            floatingLabelText="Password"
                            type="password"
                        />
                    </div>
                    <RaisedButton 
                        label="Login"
                        primary={true}
                        onClick={this.submitLogin}
                    />
                    <RaisedButton 
                        label="Create Account"
                        onClick={this.createAccount}
                    />
                    </Col>
                    <Col xs md lg />
                </Row>
            </MuiThemeProvider>
        );
    }
}

export default Login;
