import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FormWrapper,
  InputWrapper,
  PasswordWrapper,
} from './RegistrationForm.styled';

const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
};

export class SignUpForm extends Component {
  state = { ...INITIAL_STATE };

  // Для всіх інпутів створюємо один обробник
  // Розрізняти інпути будемо за атрибутом name
  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { login, email, password } = this.state;
    console.log(`Login: ${login}, Email: ${email}, Password: ${password}`);

    //якщо в пропсах є onSubmit(відправка форми, подія), то викликаємо його і передаємо в нього стейт(стани інпутів)
    if (this.props.onSubmit) {
      this.props.onSubmit({ ...this.state });
    }
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password } = this.state;

    return (
      <section>
        <FormWrapper>
          <h3>Sign up Form</h3>
          <form onSubmit={this.handleSubmit}>
            <InputWrapper>
              <label>
                Name
                <input
                  type="text"
                  placeholder="Enter login"
                  name="login"
                  value={login}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </label>
            </InputWrapper>
            <PasswordWrapper>
              <label>
                Password
                <input
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
              </label>
            </PasswordWrapper>
            <button type="submit">Sign up as {login}</button>
          </form>
        </FormWrapper>
      </section>
    );
  }
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func,
};
