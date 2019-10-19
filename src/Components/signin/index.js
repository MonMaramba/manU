import React, { Component } from "react";
import FormField from "../ui/formFields";
import { validate } from "../ui/misc";
import { firebase } from "../../firebase";

export default class SignIn extends Component {
  state = {
    formError: false,
    formSuccess: "",
    formdata: {
      // will have all inputs needed
      email: {
        // input type as key/value pairs
        element: "input", //kind of html element
        value: "",
        config: {
          //
          name: "email_input",
          type: "email",
          placeholder: "enter your email"
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        validationMessage: ""
      },
      password: {
        // input type as key/value pairs
        element: "input", //kind of html element
        value: "",
        config: {
          //
          name: "password_input",
          type: "password",
          placeholder: "enter your password"
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: ""
      }
    }
  };

  updateForm(element) {
    const newFormdata = { ...this.state.formdata };
    const newElement = { ...newFormdata[element.id] };

    newElement.value = element.event.target.value;

    let validata = validate(newElement);
    newElement.valid = validata[0];
    newElement.validationMessage = validata[1];

    newFormdata[element.id] = newElement;

    this.setState({
      formError: false, // resets formError at start of typing
      formdata: newFormdata
    });
  }

  submitForm(event) {
    event.preventDefault();

    let dataToSubmit = {};
    let formIsValid = true;

    for (let key in this.state.formdata) {
      dataToSubmit[key] = this.state.formdata[key].value;
      formIsValid = this.state.formdata[key].valid && formIsValid;
    }
    if (formIsValid) {
      firebase
        .auth()
        .signInWithEmailAndPassword(dataToSubmit.email, dataToSubmit.password)
        .then(() => {
          this.props.history.push("/dashboard"); // to send user to new route 'dashboard' if authenticated
        })
        .catch(error => {
          this.setState({
            formError: true
          });
        });
    } else {
      this.setState({ formError: true });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="signin_wrapper" style={{ margin: "100px" }}>
          <form onSubmit={event => this.submitForm(event)}>
            <h2>Please Log In</h2>
            <FormField
              id={"email"}
              formdata={this.state.formdata.email}
              change={element => this.updateForm(element)}
            />
            <FormField
              id={"password"}
              formdata={this.state.formdata.password}
              change={element => this.updateForm(element)}
            />
            {this.state.formError ? (
              <div className="error_label">
                There's something wrong bro, try again
              </div>
            ) : null}
            <button onClick={event => this.submitForm(event)}>Log In</button>
          </form>
        </div>
      </div>
    );
  }
}
