import React from 'react';
import axios from 'axios';
import propTypes from 'prop-types';

import logoMoving from '../../assets/imgs/logo-moving.png';
import Container from '../../components/container'
import Form from '../../components/form';
import Input from '../../components/form/components/input';
import { Button } from '../../components/button/styles';
import { Logo } from './styles';
import { BlueBackground } from '../Login/styles';
import { Link } from 'react-router-dom';

class CreateAccount extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  }

  static get propTypes() {
    return {
      history: propTypes.any
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    let { errors } = this.state;

    switch (name) {
      case "username": {
        let haveNumber = /\d/;

        errors.username = value.match(haveNumber) ? 'O nome não pode conter números.' : '';
        break;
      }

      case "email": {
        const validEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

        errors.email = validEmail.test(value) ? '' : 'O e-mail inserido é inválido.';
        break;
      }

      case "password": {
        errors.password = value.length > 1 && value.length <= 5 ? 'A senha deve ter no mínimo 6 caracteres.' : '';
        break;
      }

      case "confirmPassword": {
        errors.confirmPassword = value.length > 0 && value != this.state.password ? 'As senhas devem ser iguais.' : '';
        break;
      }

      default:
        break;
    }

    this.setState({
      errors,
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, email, password } = this.state;

    const dataIsValid = (errors) => {
      let valid = true;
      Object.values(errors).forEach((value) => value.length > 0 && (valid = false));
      return valid;
    }

    if (dataIsValid(this.state.errors)) {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/api/criar-conta',
        withCredentials: true,
        data: {
          username,
          email,
          password
        }
      })
        .then(() => this.props.history.push('/encomendas'))
        .catch((error) => {
          console.log(error)
        });

    } else {
      return false
    }
  }

  render() {
    const { errors } = this.state;

    return (
      <BlueBackground>
        <Container>
          <Link to="/">
            <Logo
              src={logoMoving}
              width="120"
              height="auto"
              alt="Imagem com um texto escrito Moving."
              title="Moving. Suas encomendas em ótimas mãos."
            />
          </Link>
        </Container>

        <Container>
          <Form legend="Criar conta" onSubmit={this.handleFormSubmit}>

            <Input
              label="Nome e sobrenome"
              type="text"
              required={true}
              placeholder="Ex: Lucas Silva"
              name="username"
              value={this.state.username}
              onChange={(event) => this.handleChange(event)}
            />
            {errors.username.length > 0 && (<span> {errors.username} </span>)}

            <Input
              label="E-mail"
              type="text"
              required={true}
              placeholder="Ex: lucas.silva@gmail.com"
              name="email"
              value={this.state.email}
              onChange={(event) => this.handleChange(event)}
            />
            {errors.email.length > 0 && (<span> {errors.email} </span>)}

            <Input
              label="Qual senha você quer utilizar?"
              type="password"
              required={true}
              name="password"
              value={this.state.password}
              onChange={(event) => this.handleChange(event)}
            />
            {errors.password.length > 0 && (<span> {errors.password} </span>)}

            <Input
              label="Confirme sua senha"
              type="password"
              required={true}
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={(event) => this.handleChange(event)}
            />
            {errors.confirmPassword.length > 0 && (<span> {errors.confirmPassword} </span>)}

            <Button fontSize="20px">Criar conta</Button>
          </Form>
        </Container>
      </BlueBackground>
    );
  }
}

export default CreateAccount;