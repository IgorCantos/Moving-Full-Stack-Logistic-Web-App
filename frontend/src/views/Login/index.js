import React from 'react';
import axios from 'axios';
import propTypes from 'prop-types';

import logoMoving from '../../assets/imgs/logo-moving.png';
import Container from '../../components/container';
import { BlueBackground, Logo } from './styles.js';
import { Button } from '../../components/button/styles';
import Input from '../../components/form/components/input';
import Form from '../../components/form';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      errors: {
        email: '',
        password: ''
      }
    }
  }

  static get propTypes() {
    return {
      history: propTypes.any
    }
  }


  handleOnChange = event => {
    const { name, value } = event.target;
    let { errors } = this.state;

    switch (name) {
      case "email": {
        const validEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

        errors.email = validEmail.test(value) ? '' : 'O e-mail inserido é inválido.';
        break;
      }

      case "password": {
        errors.password = value.length > 1 && value.length <= 5 ? 'A senha deve ter no mínimo 6 caracteres.' : '';
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
    const { email, password } = this.state;

    const dataIsValid = (errors) => {
      let valid = true;
      Object.values(errors).forEach((value) => value.length > 0 && (valid = false));
      return valid;
    }

    if (dataIsValid(this.state.errors)) {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/api/login',
        withCredentials: true,
        data: {
          email,
          password
        }
      })
        .then((response) => {
          if (response.status == 200) {
            this.props.history.push('/encomendas')
          }
        })
        .catch((error) => {
          console.log(error.response.data)
        });

    } else {
      console.log('erro')
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
          <Form legend="Login" onSubmit={this.handleFormSubmit}>

            <Input
              label="E-mail"
              type="text"
              required={true}
              placeholder="Ex: lucas.silva@gmail.com"
              name="email"
              value={this.state.email}
              onChange={(event) => this.handleOnChange(event)}
            />
            {errors.email.length > 0 && (<span> {errors.email} </span>)}

            <Input
              label="Digite sua senha"
              type="password"
              required={true}
              placeholder="Digite sua senha"
              name="password"
              value={this.state.password}
              onChange={(event) => this.handleOnChange(event)}
            />
            {errors.password.length > 0 && (<span> {errors.password} </span>)}

            <Button fontSize="20px">Entrar</Button>

          </Form>
        </Container>
      </BlueBackground>
    )
  }
}

export default Login;