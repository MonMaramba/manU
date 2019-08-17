import React, { Component } from "react";
import FormField from "../ui/formFields";
import { validate } from "../ui/misc";

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

  updateForm() {}

  submitForm() {}

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
          </form>
        </div>
      </div>
    );
  }
}
