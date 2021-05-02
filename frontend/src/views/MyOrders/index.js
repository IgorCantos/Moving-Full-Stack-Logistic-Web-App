import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

import logoMovingBlue from '../../assets/imgs/logo-moving-blue.png';
import './styles.js';
import { Button } from '../../components/button/styles';
import { Data, Header, Nav, Row, Wrapper } from './styles.js';
import OrderTable from './components/orderTable';
import Section from '../../components/themedSection';
import UserProfile from './components/userProfile';
import Container from '../../components/container';

class MyOrders extends Component {
  constructor(props) {
    super(props)
    this.state = {
      encomendas: []
    }
  }

  fetchUserOrders = () => {
    axios({
      method: 'GET',
      url: 'http://localhost:3000/api/encomendas',
      withCredentials: true
    })
      .then(response => this.setState({ encomendas: response.data }))
      .catch(error => { console.log(error) })
  }

  handleOnClick = (event) => {
    event.preventDefault();
    this.props.history.push('/nova-encomenda')
  }

  componentDidMount() {
    this.fetchUserOrders()
  }

  componentWillUnmount() {
    this.setState({
      encomendas: []
    })
  }

  render() {
    return (
      <Section background="light">

        <Header>
          <Container>
            <Nav>
              <img
                src={logoMovingBlue}
                width="120"
                height="auto"
                alt="Palavra em azul escrito Moving"
                title="Moving"
              />
              <UserProfile />
            </Nav>
          </Container>
        </Header>

        <Container>
          <Wrapper>
            <h2>Minhas encomendas enviadas</h2>
            <Button as="a" maxWidth="280px" onClick={this.handleOnClick}>+ Nova encomenda</Button>
          </Wrapper>
        </Container>

        <Container fluid>

          <OrderTable>
            {this.state.encomendas.map((encomenda) => (
              <Row key={encomenda._id}>
                <Data>{encomenda._id}</Data>
                <Data><strong>{encomenda.status}</strong></Data>
                <Data>{encomenda.createdAt}</Data>
                <Data>{encomenda.origin_address}</Data>
                <Data>{encomenda.destiny_address}</Data>
                <Data>{encomenda.comment}</Data>
                <Data>{encomenda.distance}</Data>
                <Data>R$ {encomenda.price}</Data>
              </Row>
            ))}
          </OrderTable>
        </Container>
      </Section>
    );
  }
}

export default MyOrders;