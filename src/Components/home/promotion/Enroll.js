import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import FormField from "../../ui/formFields";
import { validate } from "../../ui/misc";
import { firebasePromotions } from "../../../firebase";

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

  resetFormSuccess = type => {
    const newFormdata = { ...this.state.formdata };

    for (let key in newFormdata) {
      newFormdata[key].value = "";
      newFormdata[key].valid = false;
      newFormdata[key].validadionMessage = "";
    }
    this.setState({
      formError: false,
      formdata: newFormdata,
      formSuccess: type ? "Congratulations" : "Already on the database"
    });
    this.clearSuccessMessage();
  };

  clearSuccessMessage() {
    setTimeout(() => {
      this.setState({
        formSuccess: ""
      });
    }, 2000);
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
      // orderByChild & .equalTo are firebase methods
      firebasePromotions
        .orderByChild("email")
        .equalTo(dataToSubmit.email)
        .once("value")
        .then(snapshot => {
          if (snapshot.val() === null) {
            firebasePromotions.push(dataToSubmit);
            this.resetFormSuccess(true);
          } else {
            this.resetFormSuccess(false);
          }
        });
      //this.resetFormSuccess();
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
                  Enter a valid email address please
                </div>
              ) : null}
              <div className="success_label">{this.state.formSuccess}</div>
              <button onClick={event => this.submitForm(event)}>Enroll</button>
              <div className="enroll_discl">
                Chuck Norris went to the US Virgin Islands.... now it's just
                known as US Islands
              </div>
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}
