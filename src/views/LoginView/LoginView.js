import React, { Component } from 'react';
import style from './LoginView.module.css';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className={style.form}
          autoComplete="off"
        >
          <label className={style.label}>
            E-mail
            <input
              type="email"
              name="email"
              value={email}
              className={style.input}
              onChange={this.handleChange}
            />
          </label>

          <label className={style.label}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              className={style.input}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit" className={style.button}>Log in</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);