import { Component } from 'react';
import { FormWrapper } from './LoginForm.styled';

export class LoginForm extends Component {
  state = {
    loginValue: '',
    passwordValue: '',
  };

  handleLoginChange = evt => {
    this.setState({ loginValue: evt.target.value });
  };

  handlePasswordChange = evt => {
    this.setState({ passwordValue: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const login = form.elements.login.value;
    const password = form.elements.password.value;
    console.log(login, password);

    this.setState({ loginValue: '', passwordValue: '' });
  };

  render() {
    const { loginValue, passwordValue } = this.state;

    return (
      <section>
        <FormWrapper>
          <h3>Login Form</h3>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="login"
              placeholder="Enter your name"
              value={loginValue}
              onChange={this.handleLoginChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={passwordValue}
              onChange={this.handlePasswordChange}
            />
            <button type="submit">Log in</button>
          </form>
        </FormWrapper>
      </section>
    );
  }
}
