import React, { Component } from 'react';
import {Row, Col} from 'react-flexbox-grid';
import axios from 'axios';

//Material UI
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class CreateAccountModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newPassValue : "",
            newNameValue : "",
            newEmailValue : ""
        }
    }

    updateNameValue = (e) => {
        this.setState({
            newNameValue : e.target.value
        })
    }

    updateEmailValue = (e) => {
        this.setState({
            newEmailValue: e.target.value
        })
    }

    updatePassValue = (e) => {
        this.setState({
            newPassValue: e.target.value
        })
    }

    submitNewUser = () => {

        var newUserInfo = {
            name : this.state.newNameValue,
            email : this.state.newEmailValue,
            pass : this.state.newPassValue
        }

        console.log(this.state.newPassValue);
        console.log(this.state.newEmailValue);
        console.log(this.state.newNameValue);
    }
      render() {
       return (
        <div>
            <h1 style={{textAlign:"center"}}>Create new account</h1>
              <MuiThemeProvider>
                <Row xs lg md>
                    <Col xs md lg />
                    <Col xs md lg>
                    <div style={{width:"50%"}}>
                        <TextField 
                            hintText="Name"
                            onChange={this.updateNameValue}
                        />
                        <TextField 
                            hintText="Email"
                            onChange={this.updateEmailValue}
                        />
                        <TextField
                            hintText="Password Field"
                            onChange={this.updatePassValue}
                            floatingLabelText="Password"
                            type="password"
                        />
                    </div>
                    <RaisedButton 
                        label="Create"
                        primary={true}
                        onClick={this.submitNewUser}
                    />
                    </Col>
                    <Col xs md lg />
                </Row>
            </MuiThemeProvider>
        </div>
    );
  }
}

export default CreateAccountModal;
