import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import FormField from "../../ui/formFields";
import { validate } from "../../ui/misc";

export default class Enroll extends Component {
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
    } else {
      this.setState({ formError: true });
    }
  }

  render() {
    return (
      <Fade>
        <div className="enroll_wrapper">
          <form onSubmit={event => this.submitForm(event)}>
            <div className="enroll_title">Enter your email</div>
            <div className="enroll_input">
              <FormField
                id={"email"}
                formdata={this.state.formdata.email}
                change={element => this.updateForm(element)}
              />
              {this.state.formError ? (
                <div className="error_label">
                  enter a valid email address please
                </div>
              ) : null}
              <button onClick={event => this.submitForm(event)}>Enroll</button>
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}
