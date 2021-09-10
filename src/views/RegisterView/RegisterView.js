import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import style from './RegisterView.module.css';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className={style.form}
          autoComplete="off"
        >
          <label className={style.label}>
            Name
            <input
              type="text"
              name="name"
              value={name}
              className={style.input}
              onChange={this.handleChange}
            />
          </label>

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

          <button type="submit" className={style.button}>Sign up</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);