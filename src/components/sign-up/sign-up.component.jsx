import React from "react";
import { connect } from "react-redux";
import FormImput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from "../../redux/user/user.actions";
import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return null;
    }

    signUpStart({ displayName, email, password });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormImput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label={"Display Name"}
            required
          />
          <FormImput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label={"Email"}
            required
          />
          <FormImput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label={"Password"}
            required
          />
          <FormImput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label={"Confirm Password"}
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});
export default connect(null, mapDispatchToProps)(SignUp);
