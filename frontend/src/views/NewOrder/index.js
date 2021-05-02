import React from 'react';
import axios from 'axios';
import propTypes from 'prop-types';

import '../../components/globalStyles/styles';
import Input from '../../components/form/components/input';
import Select from '../../components/form/components/select';
import OrderData from './components/orderData';
import TextArea from './components/textarea'

import Form from '../../components/form';
import GoogleMaps from './components/googleMaps';
import { Button } from '../../components/button/styles';
import { FormWrapper, Row } from './styles.js';

class NewOrder extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      originAddress: '',
      destinyAddress: '',
      comment: '',
      distance: '-',
      time: '-',
      price: '-',
      showStepOne: true,

      errors: {
        originAddress: '',
        destinyAddress: '',
        cardName: '',
        cardNumber: '',
        cardValidity: '',
        cardCVV: ''
      }
    }
  };

  static get propTypes() {
    return {
      history: propTypes.any
    }
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    if (this.state.showStepOne) {
      this.setState({ showStepOne: false })
      return
    };

    const dataIsValid = (errors) => {
      let valid = true;
      Object.values(errors).forEach((value) => value.length > 0 && (valid = false));
      return valid;
    };

    if (dataIsValid(this.state.errors)) {

      axios({
        method: 'POST',
        url: 'http://localhost:3000/api/nova-encomenda',
        withCredentials: true,
        data: {
          origin_address: this.state.originAddress,
          destiny_address: this.state.destinyAddress,
          comment: this.state.comment,
          distance: this.state.distance,
          price: this.state.price
        }
      })
        .then(() => {
          this.props.history.push('/encomendas')
        })
        .catch((error) => {
          console.error(error)
        });

    };

    return false

  }

  getDistanceBetweenTwoPoints = () => {
    const PRICE_PER_KM = 1.50

    axios({
      method: 'POST',
      url: 'http://localhost:3000/api/distance',
      withCredentials: true,
      data: {
        originAddress: this.state.originAddress,
        destinyAddress: this.state.destinyAddress
      }
    })
      .then(response => {
        this.setState({
          distance: response.data.distance,
          time: response.data.time,
          price: Math.round(response.data.distance.split(' ')[0] * PRICE_PER_KM)
        })
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.originAddress !== this.state.originAddress || prevState.destinyAddress !== this.state.destinyAddress) {
      this.getDistanceBetweenTwoPoints()
    }
  }

  componentWillUnmount() {
    this.setState({
      originAddress: '',
      destinyAddress: '',
      comment: '',
      distance: '-',
      time: '-',
      price: '-',
      showStepOne: true
    })
  };

  handleOnChange = (event) => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  };

  handleOnBlur = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })
  };

  render() {

    const { errors } = this.state;

    return (
      <Row>
        <FormWrapper>
          {this.state.showStepOne ?

            <Form legend="Nova Encomenda" id="step-1" onSubmit={this.handleFormSubmit}>

              <Input
                label="Endereço de origem:"
                type="text"
                required={true}
                id="originAddress"
                placeholder="R. Afonso Herrera 41a, São Paulo"
                name="originAddress"
                onBlur={(event) => this.handleOnBlur(event)}
                onKeyPress={(event) => { event.key === 'Enter' && event.preventDefault(); }}
              />

              <Input
                label="Endereço de entrega:"
                type="text"
                required={true} id="destinyAddress"
                placeholder="Av. Brigadeiro Faria Lima 1656, São Paulo"
                name="destinyAddress"
                onBlur={(event) => this.handleOnBlur(event)}
                onKeyPress={(event) => { event.key === 'Enter' && event.preventDefault(); }}
              />

              <TextArea label="Gostaria de passar alguma especificação?" rows="3" id="comment" name="comment" value={this.state.comment} onBlur={this.handleOnChange} />

              <OrderData distance={this.state.distance} minutes={this.state.time} price={this.state.price} />

              <Button fontSize="18px">Ir para pagamento</Button>

            </Form>

            :

            <Form legend="Pagamento" id="step-2" onSubmit={this.handleFormSubmit}>

              <Select label="Meio de Pagamento:" required={true} id="payment_type" >
                <option>Cartão de crédito</option>
                <option disabled>Cartão de débito</option>
                <option disabled>Boleto Bancário</option>
              </Select>

              <Input
                label="Nome no cartão"
                type="text"
                required={true}
                id="cardName"
                value={this.state.cardName}
                placeholder="Ex: igor s cabral"
              />
              {errors.cardName.length > 0 && (<span> {errors.cardName} </span>)}

              <Input
                label="Número do cartão"
                type="number"
                required={true}
                id="cardNumber"
                name="cardNumber"
                value={this.state.cardNumber}
                placeholder="Ex: 1111 2222 3333 4444"
              />
              {errors.cardNumber.length > 0 && (<span> {errors.cardNumber} </span>)}

              <Row>
                <Input
                  label="Validade"
                  type="date"
                  required={true}
                  id="cardValidity"
                  name="cardValidity"
                  value={this.state.cardValidity}
                  placeholder="Ex: 21/12"
                />
                {errors.cardValidity.length > 0 && (<span> {errors.cardValidity} </span>)}

                <Input
                  label="CVV"
                  type="text"
                  required={true}
                  id="cardCVV"
                  name="cardCVV"
                  value={this.state.cardCVV}
                  placeholder="Ex: 123"
                />
                {errors.cardCVV.length > 0 && (<span> {errors.cardCVV} </span>)}
              </Row>

              <OrderData distance={this.state.distance} minutes={this.state.time} price={this.state.price} />

              <Button fontSize="18px">Finalizar pedido</Button>
            </Form>
          }

        </FormWrapper>
        <GoogleMaps parentState={this.state} />
      </Row>
    );
  }
}

export default NewOrder;
